import React from "react";
import cn from "classnames";
import styles from "./Checkout.module.sass";
import Icon from "../../../../components/Icon";
import LoaderCircle from "../../../../components/LoaderCircle";

// const items = [
//   {
//     title: "0.007",
//     value: "ETH",
//   },
//   {
//     title: "Your balance",
//     value: "8.498 ETH",
//   },
//   {
//     title: "Service fee",
//     value: "0 ETH",
//   },
//   {
//     title: "You will pay",
//     value: "0.007 ETH",
//   },
// ];

const Checkout = ({purchase,setVisibleModalPurchase,purchasing,setPurchasing, className,price,balance,commission,Approval,allowance }) => {

//  console.log("price",commission)

  const items = [
    {
      title: price,
      value: "ETH",
    },
    {
      title: "Your balance",
      value: `${Number(balance).toFixed(2)} ETH`,
    },
    {
      title: "Service fee",
      value: `${Number(commission*price/100).toFixed(2)} ETH`,
    },
    {
      title: "You will pay",
      value: `${(Number(price)+Number(commission*price/100)).toFixed(0)} ETH`,
    },
  ];
  return (
    <div className={cn(className, styles.checkout)}>
      <div className={cn("h4", styles.title)}>Checkout</div>
      <div className={styles.info}>
        You are about to purchase <strong>C O I N Z</strong> from{" "}
        <strong>UI8</strong>
      </div>
      <div className={styles.table}>
        {items.map((x, index) => (
          <div className={styles.row} key={index}>
            <div className={styles.col}>{x.title}</div>
            <div className={styles.col}>{x.value}</div>
          </div>
        ))}
      </div>
      <div className={styles.attention}>
        <div className={styles.preview}>
          <Icon name="info-circle" size="32" />
        </div>
        <div className={styles.details}>
          <div className={styles.subtitle}>This creator is not verified</div>
          <div className={styles.text}>Purchase this item at your own risk</div>
        </div>
      </div>
      <div className={cn("h4", styles.title)}>Follow steps</div>
      {purchasing?
      <div className={styles.line}>
      <div className={styles.icon}>
        <LoaderCircle className={styles.loader} />
      </div>
      <div className={styles.details}>
        <div className={styles.subtitle}>Purchasing</div>
        <div className={styles.text}>
          Sending transaction with your wallet
        </div>
      </div>
    </div>:null
      }
      {/* <div className={styles.attention}>
        <div className={styles.preview}>
          <Icon name="info-circle" size="32" />
        </div>
        <div className={styles.details}>
          <div className={styles.subtitle}>This creator is not verified</div>
          <div className={styles.text}>Purchase this item at your own risk</div>
        </div>
        <div className={styles.avatar}>
          <img src="/images/content/avatar-3.jpg" alt="Avatar" />
        </div>
      </div> */}
      <div className={styles.btns}>
        {allowance>(price+(price*commission/100))?
      <button 
      onClick={purchase}
      className={cn("button", styles.button)}>
        I understand, continue
      </button>: 
      <button 
      onClick={Approval}
      className={cn("button", styles.button)}>
        Approval TVL
      </button>  
      }
        
        <button 
        onClick={()=>{setVisibleModalPurchase(false)}}
        className={cn("button-stroke", styles.button)}>Cancel</button>
      </div>
    </div>
  );
};

export default Checkout;
