import React, { useContext } from "react";
import cn from "classnames";
import styles from "./ProfileEdit.module.sass";
import Control from "../../components/Control";
import TextInput from "../../components/TextInput";
import TextArea from "../../components/TextArea";
import { useLocation } from "react-router";
import { useState } from "react";
import { client, q } from "../../config";
import { useWeb3React } from "@web3-react/core";
const ipfsClient = require('ipfs-http-client');
const projectId = '2HdKrtd8GBGyqmO0u1BW2Re1hSK';
const projectSecret = '624bcf5bf92747f385771188371089f4';
const auth =
    'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

//import { TravelCoinContext } from '../../context/TravelCoinContext'

const breadcrumbs = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Edit Profile",
  },
];

const ProfileEdit = () => {
  const { account,library,chainId } = useWeb3React();
  const [open, setOpen] = useState(false);
  let location = useLocation();
  const [name,setName] = useState(location.state[0])
  const [email,setemail] = useState(location.state[1])
  const [image,setImage] = useState(location.state[3])
  const [bio,setBio] = useState(location.state[4])
  const [twitter,setTwitter] = useState(location.state[5])

  
  const   handleSetUserDetails = null






    var imageBugger;
    const clienti = ipfsClient.create({
      host: 'ipfs.infura.io',
      port: 5001,
      protocol: 'https',
      headers: {
          authorization: auth,
      },
   });
  


    const captureFile = async(e)=>{
      e.preventDefault()
    const file = e.target.files[0]
    const reader = new window.FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = async ()=>{
     imageBugger = Buffer(reader.result)
 //     console.log("buffer",imageBugger)
  clienti.add(imageBugger).then((res) => {
    setImage(`https://gateway.pinata.cloud/ipfs/${res.path}`)
 
 });}
 }
 
const Register = async ()=>{
  setOpen(true)  
  try {
    const tx = await  client.query(
      q.Update(
        q.Ref(q.Collection('TravelCoin'),`${location.state[6].value.id}`),
        {
          data: {
            name,email,image,account,bio,twitter
                },
        },
      )
      )

    console.log(tx)
    if(tx){
      window.alert("Profile Updated Succesfully")
    }
    setOpen(false)

  } catch (error) {
    console.log(error)
  }


  
}
  

  console.log("true",location.state)

  return (
    <div className={styles.page}>
      <Control className={styles.control} item={breadcrumbs} />
      <div className={cn("section-pt80", styles.section)}>
        <div className={cn("container", styles.container)}>
          <div className={styles.top}>
            <h1 className={cn("h2", styles.title)}>Edit profile</h1>
            <div className={styles.info}>
              You can set preferred display name, create{" "}
              <strong>your profile URL</strong> and manage other personal
              settings.
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.col}>
              <div className={styles.user}>
                <div className={styles.avatar}>
                  <img src={image && image} alt="Avatar" />
                </div>
                <div className={styles.details}>
                  <div className={styles.stage}>Profile photo</div>
                  <div className={styles.text}>
                    We recommend an image of at least 400x400. Gifs work too{" "}
                    <span role="img" aria-label="hooray">
                      🙌
                    </span>
                  </div>
                  <div className={styles.file}>
                    <button
                      onClick={captureFile}
                      className={cn(
                        "button-stroke button-small",
                        styles.button
                      )}
                    >
                      Upload
                    </button>
                    <input className={styles.load} type="file" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.col}>
              <div className={styles.list}>
                <div className={styles.item}>
                  <div className={styles.category}>Account info</div>
                  <div className={styles.fieldset}>
                    <TextInput
                      className={styles.field}
                      label="display name"
                      name="Name"
                      type="text"
                      placeholder="Enter your display name"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      required
                    />
                    <TextArea
                      className={styles.field}
                      label="Bio"
                      name="Bio"
                      placeholder="About yourselt in a few words"
                      value={bio}
                      onChange={e => setBio(e.target.value)}
                      required="required"
                    />
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.category}>Social</div>
                  <div className={styles.fieldset}>
                    <TextInput
                      className={styles.field}
                      label="portfolio or email"
                      name="Portfolio"
                      type="text"
                      placeholder="Enter URL"
                      value={email}
                      onChange={e => setemail(e.target.value)}
                      required
                    />
                    <div className={styles.box}>
                      <TextInput
                        className={styles.field}
                        label="twitter"
                        name="Twitter"
                        type="text"
                        placeholder="@twitter username"
                        value={twitter}
                        onChange={e => setTwitter(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.note}>
                To update your settings you should sign message through your
                wallet. Click 'Update profile' then sign the message
              </div>
              <div className={styles.btns}>
                <button className={cn("button", styles.button)} onClick={Register}>
                  Update Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
