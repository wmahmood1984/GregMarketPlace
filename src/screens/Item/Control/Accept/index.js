import React from "react";
import cn from "classnames";
import styles from "./Accept.module.sass";
import { MarketAbi, MarketAdd } from "../../../../config";
import { Contract } from "ethers";
import { useWeb3React } from "@web3-react/core";


const items = [
  {
    title: "Service fee",
    value: "0 ETH",
  },
  {
    title: "Total bid amount",
    value: "1.46 ETH",
  },
];


export const getContract = (library, account,add,abi) => {
	const signer = library?.getSigner(account).connectUnchecked();
	var contract = new Contract(add,abi, signer);
	return contract;
};



const Accept = ({ className,setVisibleModalAccept,tokenId }) => {
  const {account,library} = useWeb3React()
  const marketContract = getContract(library, account,MarketAdd,MarketAbi);



  const setAccept = async ()=>{
    try {
      const tx = await marketContract.auctionFinalize(tokenId,{gasLimit:3000000})
      await tx.wait()

      if(tx){
        setVisibleModalAccept(false)
      }

    } catch (error) {
      console.log(error)
      setVisibleModalAccept(false)
    }
  }
  
  
  return (
    <div className={cn(className, styles.accept)}>
      <div className={styles.line}>
        <div className={styles.icon}></div>
        <div className={styles.text}>
          You are about to accept a bid for <strong>C O I N Z</strong> from{" "}
          <strong>UI8</strong>
        </div>
      </div>
      <div className={styles.stage}>1.46 ETH for 1 edition</div>
      <div className={styles.table}>
        {items.map((x, index) => (
          <div className={styles.row} key={index}>
            <div className={styles.col}>{x.title}</div>
            <div className={styles.col}>{x.value}</div>
          </div>
        ))}
      </div>
      <div className={styles.btns}>
        <button 
        onClick={setAccept}
        className={cn("button", styles.button)}>Accept bid</button>
        <button 
        onClick={()=>{setVisibleModalAccept(false)}}
        className={cn("button-stroke", styles.button)}>Cancel</button>
      </div>
    </div>
  );
};

export default Accept;
