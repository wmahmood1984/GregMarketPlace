import React, { useState,useEffect } from "react";
import cn from "classnames";
import styles from "./Player.module.sass";
import Icon from "../Icon";
import axios from "axios";

const Player = ({ className, item }) => {
//  const [URI,setURI] = useState()
  const [bnbPrice,setBnbPrice] = useState()

  console.log("items in hero",item)

//   useEffect(()=>{
//     const abc = async ()=>{
//       try {
// //        console.log("first",item.uri[0])        
//         const meta = await axios.get(item.uri[0],{
//           headers: {
//             'accept': 'application/json'
//           }
//         })

//         setURI(meta.data)
        
//         const eth = await axios.get(
//           "https://api.coingecko.com/api/v3/coins/binancecoin/market_chart?vs_currency=usd&days=7"
//         )
//           setBnbPrice(eth)

//       } catch (error) {
//         setURI({name:"server error", image:"server errror"})
//       }

//     }

//     abc()
//   },[item])

//console.log("item playable",item.playAble,item.title)
  return (
    <div className={cn(styles.player, className)}>
      <div className={styles.preview}>
        {item.category_album_collectible[2]==0 ?
        <img
         
        srcSet={`${item.uri[1]} 2x`}
        src={item.uri[1]}
        alt="image preview"
      /> : 
      <video 
      src={item.image}
      controls
      alt="video preview"
      />
        }
        

        {false?
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
        </div>: null

        }
        
      </div>
    </div>
  );
};

export default Player;
