import React, { useState,useEffect } from "react";
import cn from "classnames";
import styles from "./Player.module.sass";
import Icon from "../Icon";
import axios from "axios";

const Player = ({ className, item }) => {
  const [URI,setURI] = useState()
  const [bnbPrice,setBnbPrice] = useState()



  useEffect(()=>{
    const abc = async ()=>{
      try {
//        console.log("first",item.uri[0])        
        const meta = await axios.get(item.uri[0],{
          headers: {
            'accept': 'application/json'
          }
        })

        setURI(meta.data)
        
        const eth = await axios.get(
          "https://api.coingecko.com/api/v3/coins/binancecoin/market_chart?vs_currency=usd&days=7"
        )
          setBnbPrice(eth)

      } catch (error) {
        setURI({name:"server error", image:"server errror"})
      }

    }

    abc()
  },[item])


  return (
    <div className={cn(styles.player, className)}>
      <div className={styles.preview}>
        <img
//          srcSet={`${item.image2x} 2x`}
          src={URI && URI.image}
          alt="Video preview"
        />
        <div className={styles.control}>
          <button className={cn(styles.button, styles.play)}>
            <Icon name="play" size="24" />
          </button>
          <div className={styles.line}>
            <div className={styles.progress} style={{ width: "20%" }}></div>
          </div>
          <div className={styles.time}>2:20</div>
          <button className={styles.button}>
            <Icon name="volume" size="24" />
          </button>
          <button className={styles.button}>
            <Icon name="full-screen" size="24" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;
