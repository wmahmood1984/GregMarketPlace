import React, { useState } from "react";
import cn from "classnames";
import styles from "./Transfer.module.sass";

const Transfer = ({ className,changePrice }) => {
  const [amount,setAmount] = useState()
  return (
    <div className={cn(className, styles.transfer)}>
      <div className={cn("h4", styles.title)}>Transfer token</div>
      <div className={styles.text}>
        You can transfer tokens from your address to another
      </div>
      <div className={styles.info}>Receiver address</div>
      <div className={styles.field}>
        <input
          className={styles.input}
          onChange={(e)=>{setAmount(e.target.value)}}
          type="number"

          placeholder="Enter Price"
        />
      </div>
      <div className={styles.btns}>
        <button onClick={()=>{changePrice(amount)}} className={cn("button", styles.button)}>Continue</button>
        <button className={cn("button-stroke", styles.button)}>Cancel</button>
      </div>
    </div>
  );
};

export default Transfer;
