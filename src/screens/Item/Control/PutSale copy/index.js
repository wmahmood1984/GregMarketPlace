import React, { useState } from "react";
import cn from "classnames";
import styles from "./PutSale.module.sass";
import Icon from "../../../../components/Icon";
import Switch from "../../../../components/Switch";
import Loader from "../../../../components/Loader";
import { useWeb3React } from "@web3-react/core";
import { Contract, ethers } from "ethers";
import { MarketAbi, MarketAdd } from "../../../../config";





const PutSale2 = ({saleAuction,Approval,Sale, className,setVisibleModalSale,cancelandSaleDone,commission,id,add,approvalDone,SaleDone }) => {


  const [price,setPrice] = useState(0)
  const [time,setTime] = useState(0)
  console.log("obje",{Sale, className,setVisibleModalSale,cancelandSaleDone,price,setPrice,commission,id,add })

  const items = [

    {
      title: "Service fee",
      value: `${commission}%`,
    },
    {
      title: "Total amount",
      value: `${price - Number(price)* commission/100} BNB`,
    },
    ];

  return (
    <div className={cn(className, styles.sale)}>
      <div className={cn("h4", styles.title)}>Put on {`${saleAuction}`}</div>
      <div className={styles.line}>
        <div className={styles.icon}>
          <Icon name="coin" size="24" />
        </div>
        {saleAuction=="Sale"? 
                <div className={styles.details}>
                <div className={styles.info}>Instant sale price</div>
                <div className={styles.text}>
                  Enter the price for which the item will be instanly sold
                </div>
              </div>
        : null}

        {/* <input className={styles.switch} value={price} onChange={(e)=>{setPrice(e.target.value)}} /> */}
      </div>
      <div className={styles.table}>
          <div className={styles.row} >
            <div className={styles.col}>Enter your Price</div>
            <input type="number" value={price} onChange={(e)=>{setPrice(e.target.value)}} className={styles.col}></input>
          </div>
          {saleAuction=="Auction"? 
            <div className={styles.row} >
            <div className={styles.col}>Enter end Date</div>
            <input type="date" value={time} onChange={(e)=>{setTime(e.target.value)}} className={styles.col}></input>
          </div>
          : null}

        {items.map((x, index) => (
          <div className={styles.row} key={index}>
            <div className={styles.col}>{x.title}</div>
            <div className={styles.col}>{x.value}</div>
          </div>
        ))}
      </div>
      <div className={styles.btns}>
      <button 
        onClick={()=>{Approval(id,add)}}
        className={cn(`${approvalDone ? "button loading" : "button"}` , styles.button)}>{
          approvalDone? <Loader></Loader> : "Approve"
        }</button>
        
        <button 
        onClick={()=>{Sale(id,time,price,add)}}
        className={cn(`${SaleDone ? "button loading" : "button"}` , styles.button)}>{
          SaleDone? <Loader></Loader> : "Continue"
        }</button>
        <button 
        onClick={()=>{setVisibleModalSale(false)}}
        className={cn("button-stroke", styles.button)}>Cancel</button>
      </div>
    </div>
  );
};

export default PutSale2;
