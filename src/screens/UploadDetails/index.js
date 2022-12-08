import React, { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./UploadDetails.module.sass";
import Dropdown from "../../components/Dropdown";
import Icon from "../../components/Icon";
import TextInput from "../../components/TextInput";
import Switch from "../../components/Switch";
import Loader from "../../components/Loader";
import Modal from "../../components/Modal";
import Preview from "./Preview";
import Cards from "./Cards";
import FolowSteps from "./FolowSteps";
import { Contract, utils } from "ethers";
import { MarketAbi, MarketAdd, TokenAbi, TokenAdd } from "../../config";
import { useWeb3React } from "@web3-react/core";



const ipfsClient = require('ipfs-http-client');
const projectId = '2HdKrtd8GBGyqmO0u1BW2Re1hSK';
const projectSecret = '624bcf5bf92747f385771188371089f4';
const auth =
    'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');


const royaltiesOptions = ["10%", "20%", "30%"];

const items = [
  {
    title: "Create collection",
    color: "#4BC9F0",
  },
  {
    title: "Crypto Legend - Professor",
    color: "#45B26B",
  },
  {
    title: "Crypto Legend - Professor",
    color: "#EF466F",
  },
  {
    title: "Legend Photography",
    color: "#9757D7",
  },
];

export const getContract = (library, account,add,abi) => {
	const signer = library?.getSigner(account).connectUnchecked();
	var contract = new Contract(add,abi, signer);
	return contract;
};



const Upload = () => {
  const [royalties, setRoyalties] = useState(royaltiesOptions[0]);
  const [sale, setSale] = useState(true);
  const [price, setPrice] = useState(false);
  const [locking, setLocking] = useState(false);
  const [image,setimage] = useState()
  const [name,setname] = useState()
  const [description,setdescription] = useState()
  const [size,setSize] = useState()
  const [Properties,setProperties] = useState()
  const [album,setAlbum] = useState(0)
  const [mintingDone,setMintingdone] = useState(false)
  const [approvalDone,setApprovalDone] = useState(false)
  const [lockDone,setLockdone] = useState(false)
  const [Counter,setCounter] = useState(0)
  const [approvalLoader,setApprovalLoader] = useState(false)
  const [mintingLoader,setMintingLoader] = useState(false)
  const [lockLoader,setLockLoader] = useState(false)
  const { account,library,chainId } = useWeb3React();
  const tokenContract = getContract(library, account,TokenAdd,TokenAbi);
  const marketContract = getContract(library, account,MarketAdd,MarketAbi);
  const [visibleModal, setVisibleModal] = useState(false);
  const [PriceinEth, setPriceEth] = useState(0);
  const [AuctionEnd, setAuctionEnd] = useState(0);

  const [visiblePreview, setVisiblePreview] = useState(false);

useEffect(()=>{
  const abc = async ()=>{
    if(account){
      const _counter = await tokenContract.tokenCounter()
      setCounter(_counter)
    }


  }
  abc()
},[account])



  var imageBugger;


  const client = ipfsClient.create({
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
     console.log("buffer",imageBugger)
 client.add(imageBugger).then((res) => {
   setimage(`https://gateway.pinata.cloud/ipfs/${res.path}`)

});}
}


console.log("counter", Counter )

const upLoadNFT = async ()=>{
  setMintingLoader(true)
  const obj = {image,name,description,PriceinEth,royalties,size,sale,price,locking,album:items[album].title,minter_address:account}
  const jsonObj = JSON.stringify(obj)
  const jsonIPFS = await client.add(jsonObj)
  const tx = await tokenContract.Mint(account,jsonIPFS.path,{gasLimit:3000000})
  await tx.wait()

  if(tx){
    console.log("obj",jsonIPFS)
    setMintingdone(true)
    setMintingLoader(false)
  }
}

const clearAll = ()=>{
  setimage("")
  setname("")
  setdescription("")
  setPriceEth("")
  setVisiblePreview(false)

}


const approval = async ()=>{
  setApprovalLoader(true)
  try {
    const tx = await tokenContract.approve(MarketAdd,Counter)
    await tx.wait()
    
    if(tx){
      console.log("tx",tx)
      setApprovalLoader(false)
      setApprovalDone(true)
    }
  } catch (error) {
    console.log(error)
  }
}



const Lock = async ()=>{
setLockLoader(true)
  try {
    const tx = await marketContract.createAuction(
        Counter,Date.parse(AuctionEnd)/1000,utils.parseUnits(PriceinEth.toString(),"ether") ,TokenAdd
    ,{gasLimit:3000000}
        )
    await tx.wait()
    
    if(tx){
      console.log("tx",tx)
      setLockdone(true)
      setLockLoader(false)
      setVisibleModal(false)
    }
  } catch (error) {
    console.log(error)
  }
}




  return (
    <>
      <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
          <div className={styles.wrapper}>
            <div className={styles.head}>
              <div className={cn("h2", styles.title)}>
                Create single collectible
              </div>
              <button
                className={cn("button-stroke button-small", styles.button)}
              >
                Switch to Multiple
              </button>
            </div>
            <form className={styles.form} action="">
              <div className={styles.list}>
                <div className={styles.item}>
                  <div className={styles.category}>Upload file</div>
                  <div className={styles.note}>
                    Drag or choose your file to upload
                  </div>
                  <div className={styles.file}>
                    <input onChange={captureFile} className={styles.load} type="file" />
                    <div className={styles.icon}>
                      <Icon name="upload-file" size="24" />
                    </div>
                    <div className={styles.format}>
                      PNG, GIF, WEBP, MP4 or MP3. Max 1Gb.
                    </div>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.category}>Item Details</div>
                  <div className={styles.fieldset}>
                    <TextInput
                      className={styles.field}
                      label="Item name"
                      name="Item"
                      type="text"
                      value={name}
                      onChange={(e)=>{setname(e.target.value)}}
                      placeholder='e. g. Redeemable Bitcoin Card with logo"'
                      required
                    />
                    <TextInput
                      className={styles.field}
                      label="descriptionription"
                      name="descriptionription"
                      type="text"
                      value={description}
                      onChange={(e)=>{setdescription(e.target.value)}}
                      placeholder="e. g. “After purchasing you will able to recived the logo...”"
                      required
                    />
                    <div className={styles.row}>
                      <div className={styles.col}>
                        <div className={styles.field}>
                          <div className={styles.label}>Royalties</div>
                          <Dropdown
                            className={styles.dropdown}
                            value={royalties}
                            setValue={setRoyalties}
                            options={royaltiesOptions}
                          />
                        </div>
                      </div>
                      <div className={styles.col}>
                        <TextInput
                          className={styles.field}
                          label="Size"
                          name="Size"
                          value={size}
                          onChange={(e)=>{setSize(e.target.value)}}
                          type="text"
                          placeholder="e. g. Size"
                          required
                        />
                      </div>
                      <div className={styles.col}>
                        <TextInput
                          className={styles.field}
                          label="Price"
                          name="Price"
                          value={PriceinEth}
                          onChange={(e)=>{setPriceEth(e.target.value)}}
                          type="number"
                          placeholder="2 eth"
                          required
                        />
                      </div>
                      <div className={styles.col}>
                        <TextInput
                          className={styles.field}
                          label="Propertie"
                          name="Propertie"
                          value={Properties}
                          onChange={(e)=>{setProperties(e.target.value)}}
                          type="text"
                          placeholder="e. g. Propertie"
                          required
                        />
                      </div>

                      <div className={styles.col}>
                        <TextInput
                          className={styles.field}
                          label="Auction End"
                          name="Auction End"
                          value={AuctionEnd}
                          onChange={(e)=>{setAuctionEnd(e.target.value)}}
                          type="date"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.options}>
                <div className={styles.option}>
                  <div className={styles.box}>
                    <div className={styles.category}>Put on sale</div>
                    <div className={styles.text}>
                      You’ll receive bids on this item
                    </div>
                  </div>
                  <Switch value={sale} setValue={setSale} />
                </div>  
                <div className={styles.option}>
                  <div className={styles.box}>
                    <div className={styles.category}>Instant sale price</div>
                    <div className={styles.text}>
                      Enter the price for which the item will be instantly sold
                    </div>
                  </div>
                  <Switch value={price} setValue={setPrice} />
                </div>
                <div className={styles.option}>
                  <div className={styles.box}>
                    <div className={styles.category}>Unlock once purchased</div>
                    <div className={styles.text}>
                      Content will be unlocked after successful transaction
                    </div>
                  </div>
                  <Switch value={locking} setValue={setLocking} />
                </div>
                <div className={styles.category}>Choose collection</div>
                <div className={styles.text}>
                  Choose an exiting collection or create a new one
                </div>
                <Cards className={styles.cards} items={items} setAlbum={setAlbum}/>
              </div>
              <div className={styles.foot}>
                <button
                  style={{backgroundColor:"blue",color:"white"}}
                  // className={cn("button-stroke tablet-show", styles.button)}
                  //onClick={Lock}
                  onClick={()=>{setVisiblePreview(true)}}
                  type="button"
                >
                  Preview
                </button>
                <button
                 className={cn("button", styles.button)}
                  onClick={() => setVisibleModal(true)}
                  // type="button" hide after form customization
                  type="button"
                >
                  <span>Create item</span>
                  <Icon name="arrow-next" size="10" />
                </button>
                <div className={styles.saving}>
                  {/* <span>Auto saving</span>
                  <Loader className={styles.loader} /> */}
                </div>
              </div>
            </form>
          </div>
          {visiblePreview?
          <Preview

          clearAll={clearAll}
          obj={{image,name,description,PriceinEth,royalties,size,sale,price,locking,album:items[album].title}}
          className={cn(styles.preview, { [styles.active]: visiblePreview })}
          onClose={() => setVisiblePreview(false)}
        />: null 
          }
          
        </div>
      </div>
      <Modal visible={visibleModal} onClose={() => setVisibleModal(false)}>
          <FolowSteps className={styles.steps} 
          upLoadNFT={upLoadNFT}
          approval={approval}
          approvalLoader={approvalLoader}
          mintingDone={mintingDone}
          approvalDone={approvalDone}
          lockDone={lockDone}
          Lock={Lock}
          mintingLoader={mintingLoader}
          lockLoader={lockLoader}
          />
      </Modal>
    </>
  );
};

export default Upload;
