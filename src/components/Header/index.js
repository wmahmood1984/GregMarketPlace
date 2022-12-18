import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Header.module.sass";
import Icon from "../Icon";
import Image from "../Image";
import Notification from "./Notification";
import User from "./User";
import { TravelCoinContext } from '../../context/TravelCoinContext'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useWeb3React } from "@web3-react/core";
import { Injected,WalletConnect } from "../../connector.js"
import metamask from "../../Img/metamask.png"
import walletC from "../../Img/WalletConnect-Logo.png"
import { client, q } from "../../config";
import { useEffect } from "react";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { dataBase, getData } from "../../state/ui";
import { useSelector } from "react-redux";
import { ethers } from "ethers";
const ipfsClient = require('ipfs-http-client');
const projectId = '2HdKrtd8GBGyqmO0u1BW2Re1hSK';
const projectSecret = '624bcf5bf92747f385771188371089f4';
const auth =
    'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');


const nav = [
  // {
  //   url: "/search01",
  //   title: "Discover",
  // },
  // {
  //   url: "/faq",
  //   title: "How it work",
  // },
  // {
  //   url: "/item",
  //   title: "Create item",
  // },
  // {
  //   url: "/profile",
  //   title: "Profile",
  // },
  {
    url: "/search01",
    title: "Buy",
  },
  {
    url: "/sell",
    title: "Sell",
  },
  {
    url: "/auction",
    title: "Auction",
  }
];

const Headers = () => {
  const [open, setOpen] = useState(false);
  const [visibleNav, setVisibleNav] = useState(false);
  const [search, setSearch] = useState("");
  const { account,library,chainId } = useWeb3React();
  const [NROpen,setNROpen] = useState(false)
  window.ethereum.on("accountsChanged",(e,r)=>{window.location.reload()})
  const dispatch = useDispatch()

  useEffect(()=>{
    const abc = async ()=>{
      setDataBase(account)
      dispatch(dataBase({}) )
      dispatch(getData({}))

    }
    
    abc()
   },[account])
  

   
    const setDataBase = async (account)=>{
 //     console.log("account in",account)
      try {
        const tx1 = await client.query(
    
            q.Get(
            q.Match(q.Index('Account1'), `${account}`)
            ))
    
//        console.log(tx1)
      } catch (err) {
        if(account){
          setNROpen(true)
        }

        console.error(
          'Error: [%s] %s: %s',
          err,
          err.name,
          err.message,
          err.errors()[0].description,
          )
      }
    
    }

    const data = useSelector((state) => {
      return state.adoptReducer.data;
    });


    const moralisData = useSelector((state) => {
      return state.adoptReducer.moralisData;
    });




    if (window.ethereum.networkVersion != "97") {
      try {
         window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: ethers.utils.toHex(97) }]
        });
      } catch (err) {
          // This error code indicates that the chain has not been added to MetaMask
        if (err.code === 4902) {
          window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainName: 'BSC Mainnet',
                chainId: ethers.utils.toHex(97),
                nativeCurrency: { name: 'TBNB', decimals: 18, symbol: 'BNB' },
                rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545']
              }
            ]
          });
          window.alert("This chain is not configured in your metamask"
          // ,{
          //   type: "failure",
          //   position: toast.POSITION.BOTTOM_CENTER,
          //   closeOnClick: true,
          //   }
            )
        }
      }
    }

  return (
    <header className={styles.header}>
      <div className={cn("container", styles.container)}>
        <Link className={styles.logo} to="/">
          <Image
            className={styles.pic}
            src="/images/VT-Logo-Light.png"
            srcDark="/images/VT-Logo-Dark.png"
            alt="Img Not Found!"
          />
        </Link>
        <div className={cn(styles.wrapper, { [styles.active]: visibleNav })}>

          <nav className={styles.nav}>
            {nav.map((x, index) => (
              <Link
                className="ml-8 leading-10 text-[#777E90] active:text-[#ffffff]"
                to={x.url}
                key={index}
              >
                {x.title}
              </Link>
            ))}
          </nav>
          <form
            className={styles.search}
            action=""
          >
            <input
              className={styles.input}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              name="search"
              placeholder="Search"
              required
            />
            <button className={styles.result}>
              <Icon name="search" size="20" />
            </button>
          </form>
          <Link
            className={cn("button-small", styles.button)}
            to="/upload-variants"
          >
            Upload
          </Link>
        </div>
        {/* <button
        onClick={setDataBase}
        >do something</button> */}
        {
          account ? (
            <>
              {/* <Notification className={styles.notification} /> */}
              <Link
                className={cn("button-small", styles.button)}
                to="/upload-variants"
              >
                Upload
              </Link>
              {/* <User className={styles.user} /> */}
            </>
          ) : (
            <div
              className={`${cn("button-stroke button-small", styles.button)} cursor-pointer`}
              onClick={()=>{setOpen(true)}}
            >
              {account ? `${account.slice(0,5)}...${account.slice(-3)}` : `Connect Wallet`}
            </div>
          )
        }
        <Link className={styles.logo} style={{ padding: "15px" }} to="/">
          <Image
            className={styles.pic}
            src="/images/logo-light.png"
            srcDark="/images/logo-dark.png"
            alt="Img Not Found!"
          />
        </Link>

        <button
          className={cn(styles.burger, { [styles.active]: visibleNav })}
          onClick={() => setVisibleNav(!visibleNav)}
        ></button>
      </div>
      <ResponsiveDialog open={open} setOpen={setOpen}/>
      <ResponsiveDialog2 open={NROpen} setOpen={setNROpen}/>
    </header >
  );
};

export default Headers;


function ResponsiveDialog({open,setOpen,network,setNetwork}) {
  const { activate,deactivate,account } = useWeb3React();
 
  
  const handleClose = () => {
      setOpen(false);
      activate(WalletConnect)
    };
  
  const handleClose2 = () => {
      setOpen(false);
      activate(Injected)


    };

  const handleDeactivate = () => {
      setOpen(false);
      deactivate()
    };




  return (
      <div>
      

  <Dialog
open={open}
//onClose={handleClose}
aria-labelledby="alert-dialog-title"
aria-describedby="alert-dialog-description"
>
 <DialogTitle id="alert-dialog-title">
 Please Choose Wallet
</DialogTitle>
<DialogContent>
<DialogContentText id="alert-dialog-description">
  <button
    style={{ cursor: `pointer`, border:"none", width:"200px" }}
    onClick={handleClose2}
    
  >
    <span>
      <img
        width="40px"
        src={metamask}
        alt="img"
      />
    </span>
    MetaMask
  </button>
  <br/>
  <button
    style={{ cursor: `pointer`, border:"none", width:"200px" }}
    onClick={handleClose}
    
  >
    <span>
      <img
        width="40px"
        src={walletC}
        alt="img"
      />
    </span>
    Wallet Connect
  </button>
  <br/>
  <span 
    style={{ cursor: "pointer" }}
  onClick={handleDeactivate}
  >
    De-Activate
  </span>


</DialogContentText>
  
</DialogContent>
  </Dialog> 


        
      </div>
   
  );
}



function ResponsiveDialog2({open,setOpen}) {
  const { activate,deactivate,account } = useWeb3React();
  const [name,setName] = useState()
  const [email,setEmail] = useState()
  const [image,setImage] = useState()
  const [counter,setCounter] = useState()
  
  var imageBugger;
  const clienti = ipfsClient.create({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
        authorization: auth,
    },
 });


 useEffect(()=>{
  const abc = async ()=>{
    const tx1 = await client.query(
    
      q.Paginate(q.Documents(q.Collection("TravelCoin")))
      )

  setCounter(tx1.data.length)
  }
  abc()
 },[])
 
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
  
  try {
    const tx = await  client.query(
      q.Create(
        q.Ref(q.Collection('TravelCoin'),`${counter+1}`),
        {
          data: {
            name,email,image,account
                },
        },
      )
      )

//    console.log(tx)
    setOpen(false)

  } catch (error) {
    console.log(error)
  }


  
}

  
  const handleClose = () => {
      setOpen(false);
      activate(WalletConnect)
    };
  
  const handleClose2 = () => {
      setOpen(false);
      activate(Injected)


    };

  const handleDeactivate = () => {
      setOpen(false);
      deactivate()
    };




  return (
      <div>
      

  <Dialog
open={open}
//onClose={handleClose}
aria-labelledby="alert-dialog-title"
aria-describedby="alert-dialog-description"
>
 <DialogTitle id="alert-dialog-title">
 Please Register Your Self
</DialogTitle>
<DialogContent>
<DialogContentText id="alert-dialog-description">
 <input placeholder="Name here" type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/><br/>
 <input placeholder="Email address here" type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br/>
 <input placeholder="Image File" type="file"  onChange={(e)=>{captureFile(e)}}/><br/>
 <Button variant="contained" onClick={Register}>Register</Button>

</DialogContentText>
  
</DialogContent>
  </Dialog> 


        
      </div>
   
  );
}



// const setDataBase = async (wait)=>{
//   client.query(
// q.Create(
//   q.Ref(q.Collection('Launch'), `1205`),
//   {
//     data: {

//       description : "desc",
//       Symbol : "projectSymbol",
//       Website:"website",
//       WhitePaper: "whitePaper",
//       Telegram: "telegramURL",
//       Twitter: "twitterURL",
//       Discord: "discordURL",
//       Other: "otherURL"
//     },
//   },
// )
// )
// .then((ret) => console.log(ret))
// .catch((err) => console.error(
// 'Error: [%s] %s: %s',
// err.name,
// err.message,
// err.errors()[0].description,
// ))
// }



