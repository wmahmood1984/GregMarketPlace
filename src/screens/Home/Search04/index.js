import React, { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./Search01.module.sass";
import { Contract } from "ethers";
import TextInput from "../../../components/TextInput";
import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import { BUSD, IERC20, SwapAbi, TVL, TVLSwap } from "../../../config";
import { formatEther, parseEther } from "ethers/lib/utils";
import logo from "../../../Img/swap.jpg"



export const getContract = (library, account,add,abi) => {
	const signer = library?.getSigner(account).connectUnchecked();
	var contract = new Contract(add,abi, signer);
	return contract;
};



const Search04 = () => {

  const {account,library} = useWeb3React()
  const TVLContract = getContract(library,account,TVL,IERC20)
  const SwapContract = getContract(library,account,TVLSwap,SwapAbi)
  const BUSDContract = getContract(library,account,BUSD,IERC20)
  const [BUSDBalance,setBUSDBalance] = useState(0)
  const [TVLBalance,setTVLBalance] = useState(0)
  const [TVLamount,setTVLAmount] = useState()
  const [amount,setAmount] = useState()
  const [toggle,setToggle] = useState(false)
  const [open,setOpen] = useState(false)
  const [title,setTitle] = useState("")
  const [refSwap,setRefswap] = useState(false)

  useEffect(()=>{
    const abc = async ()=>{
      const _bal = await BUSDContract.balanceOf(account)
      setBUSDBalance(formatEther(_bal))

      const _Tbal = await TVLContract.balanceOf(account)
      setTVLBalance(formatEther(_Tbal))

    }

    abc ()

  },[account,toggle])


  const swapTVL = async ()=>{
    setTitle("Swapping TVL")
    try {
      const tx1 = await SwapContract.buyTVL(parseEther(amount),{gasLimit:3000000})
      await tx1.wait()
      if(tx1){
        setToggle(!toggle)
        setOpen(false)
        setAmount("")
      }

    } catch (error) {
      console.log("Error in approve TVL",error)
      setTitle("Transaction in Error")
      setOpen(false)
      
    }
  }  
  
  
  
  
  const approveTVL = async ()=>{
    if(account){
      setOpen(true)
      setTitle("Approving the BUSD")
      try {
        const tx1 = await BUSDContract.approve(TVLSwap,parseEther(amount),{gasLimit:3000000})
        await tx1.wait()
        
        if(tx1){
          swapTVL()
        }
  
      } catch (error) {
        console.log("Error in approve TVL",error)
      }
    }else{
      window.alert("Please connnect your wallet")
    }

  }



  const swapBUSD = async ()=>{
    setTitle("Swapping BUSD")

    try {
      const tx1 = await SwapContract.sellTVL(parseEther(TVLamount),{gasLimit:3000000})
      await tx1.wait()
      if(tx1){
        setToggle(!toggle)
        setOpen(false)
        setTVLAmount("")
      }

    } catch (error) {
      console.log("Error in approve TVL",error)
      setTitle("Transaction in Error")
      setOpen(false)
      
    }
  }  
  
  
  
  
  const approveBUSD = async ()=>{
  if(account){
    setOpen(true)
    setTitle("Approving the TVL")
    try {
      const tx1 = await TVLContract.approve(TVLSwap,parseEther(TVLamount),{gasLimit:3000000})
      await tx1.wait()
      
      if(tx1){
        swapBUSD()
      }

    } catch (error) {
      console.log("Error in approve BUSD",error)
    }
  }else{
    window.alert("Please connect your walet")
  }

  }

  const upper = {marginLeft:"10%",width:"80%", height:"45%",marginTop:"5%", boxShadow: "0px 0px 25px 10px #888888", textAlign:"center",borderRadius:"15px" } 
  const lower = {marginLeft:"10%",width:"80%", height:"45%",marginTop:"5%", boxShadow: "0px 0px 25px 10px #888888", textAlign:"center",borderRadius:"15px" }

  return (
    <div className={cn("section-pt80", styles.section)}>
      <div style={{marginLeft:"30%",width:"40%", height:"550px",boxShadow: "0px 0px 25px 10px #888888", textAlign:"center",borderRadius:"15px"}}>
      <strong style={{fontSize:"30px"}}>SWAP TOOL FOR CRYPTOCURRENCY</strong>
      {!refSwap? 
       <div>
        <strong>Swap BUSD to TVL</strong>
       <div style={!refSwap? upper : lower}>
       <h1 style={{marginTop:"10px"}}>Your Existing BUSD balance : {Number(BUSDBalance).toFixed(2)}</h1> 
         <TextInput
         
          style={{width:"80%"}}
          className={styles.field}
          label="Enter BUSD Value here"
          name="BUSD Amount"
          type="number"
          placeholder="Enter your BUSD Value"
          value={amount}
          onChange={async (e) => {
           setAmount(e.target.value)
           const _tvlPrice = await SwapContract.getTVLOutputAmount(parseEther(e.target.value))
           setTVLAmount(formatEther(_tvlPrice))
         
         }}
         />
         <Button 
         onClick={approveTVL}
         style={{marginTop:"2%",marginBottom:"10px", width:"30%"}} variant="contained"> SWAP </Button>
 
 
 
       </div>
       <button onClick={()=>{setRefswap(!refSwap)}}><img width="50px" style={{marginTop:"20px"}} src={logo}/></button>
       <div style={!refSwap? lower : upper}>
       <h1>Your Existing TVL balance : {Number(TVLBalance).toFixed(2)} </h1>
       <TextInput
          style={{width:"80%"}}
          className={styles.field}
          label="Enter TVL Value here"
          name="TVL Amount"
          type="number"
          placeholder="Enter your TVL Value"
          value={TVLamount}
          onChange={async (e) => {
           setTVLAmount(e.target.value)
           const _BUSDPrice = await SwapContract.getBUSDOutputamount(parseEther( e.target.value))
           setAmount(formatEther(_BUSDPrice) )
         
         }}
 
         />
 
       <Button onClick={approveBUSD} style={{marginTop:"2%",marginBottom:"10px", width:"30%"}} variant="contained">Swap</Button>
       </div>
 
       </div> : 
       <div>
        <strong>Swap TVL to BUSD</strong>
       <div style={refSwap? upper : lower}>
       <h1>Your Existing TVL balance : {Number(TVLBalance).toFixed(2)} </h1>
       <TextInput
          style={{width:"80%"}}
          className={styles.field}
          label="Enter TVL Value here"
          name="TVL Amount"
          type="number"
          placeholder="Enter your TVL Value"
          value={TVLamount}
          onChange={async (e) => {
           setTVLAmount(e.target.value)
           const _BUSDPrice = await SwapContract.getBUSDOutputamount(parseEther( e.target.value))
           setAmount(formatEther(_BUSDPrice) )
         
         }}
 
         />
 
       <Button onClick={approveBUSD} style={{marginTop:"2%",marginBottom:"10px", width:"30%"}} variant="contained"> SWAP </Button>
       </div>
       <button onClick={()=>{setRefswap(!refSwap)}}><img width="50px" style={{marginTop:"20px"}} src={logo}/></button>
       <div style={refSwap? lower : upper}>
       <h1>Your Existing BUSD balance : {Number(BUSDBalance).toFixed(2)}</h1> 
         <TextInput
         
          style={{width:"80%"}}
          className={styles.field}
          label="Enter BUSD Value here"
          name="BUSD Amount"
          type="number"
          placeholder="Enter your BUSD Value"
          value={amount}
          onChange={async (e) => {
           setAmount(e.target.value)
           const _tvlPrice = await SwapContract.getTVLOutputAmount(parseEther(e.target.value))
           setTVLAmount(formatEther(_tvlPrice))
         
         }}
         />
         <Button 
         onClick={approveTVL}
         style={{marginTop:"2%",marginBottom:"10px", width:"30%"}} variant="contained"> SWAP </Button>
 
 
 
       </div>
       
 
       </div>
      }

      </div>
      <br/>
      <br/>
      <div style={{marginLeft:"30%",width:"40%", minHeight:"300px",boxShadow: "0px 0px 25px 10px #555555", textAlign:"left",borderRadius:"15px",padding:"50px 30px 50px 30px"}}>
      <p style={{fontSize:"18px"}}>TVL COIN is pegged against the BUSD as clone of the stablecoin BUSD. Therefore 1 BUSD is ≈ (approximately equal to) 1 TVL.<br/><br/>
      From every buy and sell transaction swap between BUSD to TVL and vice versa a minimum amount of taxes are collected for marketing and development purposes of the TVL COIN. In order to grow the stability and investment potential of TVL COIN, tax is also sent to liquidity.
      The immediate benefits of using TVL COIN is firstly the security of the coin that is both stable and will never fluctuate widely on the crypto currency exchanges.<br/><br/>
      Secondly when using TVL COIN you will have exclusive access to purchase NFTs within our digital marketplaces in various industry sectors including tourism, sports and gaming. All available NFTs will be both officially licensed products that will not be available on any other NFT marketplace and to be sold in a safe, secure environment. As a benefit to pass onto the buyers, the NFTs will be extremely price competitive, exclusive with savings that will be unmatched.</p>
      </div>
      <ResponsiveDialog2 open={open} title={title} />
    </div>
  );
};

export default Search04;



function ResponsiveDialog2({open,title}) {
 



  return (
      <div style={{marginLeft:"30%",width:"40%"}}>
      

  <Dialog 
open={open}
//onClose={handleClose}
aria-labelledby="alert-dialog-title"
aria-describedby="alert-dialog-description"
>
 <DialogTitle id="alert-dialog-title">
 Transaction in Process
</DialogTitle>
<DialogContent>
{title}
</DialogContent>

  </Dialog> 


        
      </div>
   
  );
}
