import React, { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./Bid.module.sass";
import { useWeb3React } from "@web3-react/core";
import { Contract, ethers, utils } from "ethers";
import { formatEther } from "ethers/lib/utils";
import { MarketAbi, MarketAdd, TokenAdd } from "../../config";

const items = [
  {
    title: "Enter bid",
    value: "ETH",
  },
  {
    title: "Your balance",
    value: "8.498 ETH",
  },
  {
    title: "Service fee",
    value: "0 ETH",
  },
  {
    title: "Total bid amount",
    value: "0 ETH",
  },
];

export const getContract = (library, account,add,abi,setVisibleModalBid,toggle,setToggle) => {
	const signer = library?.getSigner(account).connectUnchecked();
	var contract = new Contract(add,abi, signer);
	return contract;
};

const Bid = ({ className,tokenId,AddressOfToken,setVisibleModalBid,toggle,setToggle }) => {



  const [bid,setBid] = useState()
  const [balance,setBalance] = useState()
  const { account,library } = useWeb3React();
  const [serviceFee,setServiceFee] = useState(500000000000)
  const marketContract = getContract(library, account,MarketAdd,MarketAbi);
  
  
  useEffect(() => {
    const abc = async ()=>{
      const _balance = await library?.getSigner(account).getBalance()
      setBalance(_balance)

    //   const _service = await marketContract.bidfee()
    //   setServiceFee(_service)
    }
    abc()
  }, [])

  console.log( tokenId,AddressOfToken )



  const placeBid = async ()=>{
    try {
      const tx = await marketContract.bid(tokenId,AddressOfToken,{gasLimit:3000000,value:utils.parseUnits(bid.toString(),"ether")})

      await tx.wait()

      if(tx){
        setVisibleModalBid(false)
        setToggle(!toggle)
      }
    } catch (error) {
      console.log(error)
      setVisibleModalBid(false)
    }
  }
  
  return (
    <div className={cn(className, styles.checkout)}>
      <div className={cn("h4", styles.title)}>Place a bid</div>
      <div className={styles.info}>
        You are about to purchase <strong>C O I N Z</strong> from{" "}
        <strong>UI8</strong>
      </div>
      <div className={styles.stage}>Your bid</div>
      <div className={styles.table}>
      <input className={styles.row} type="number" placeholder="Enter Bid" value={bid} onChange={(e)=>{setBid(e.target.value) }} />
      <div className={styles.cow}>
            <div className={styles.col}>Your balance</div>
            <div className={styles.col}>{balance && formatEther(balance)}</div>
      </div>
      <div className={styles.cow}>
            <div className={styles.col}>Service Fee</div>
            <div className={styles.col}>{balance && formatEther(serviceFee)}</div>
      </div>

      <div className={styles.cow}>
            <div className={styles.col}>Total amount </div>
            <div className={styles.col}>{balance &&  ((Number(bid) + Number(formatEther(serviceFee))*bid)).toFixed(4)}</div>
      </div>
      
      </div>
      <div className={styles.btns}>
        <button onClick={placeBid} className={cn("button", styles.button)}>Place a bid</button>  
        <button onClick={()=>{setVisibleModalBid(false)}} className={cn("button-stroke", styles.button)}>Cancel</button>
      </div>
    </div>
  );
};

  export default Bid;
