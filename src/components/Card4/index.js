import React, { useState } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Card.module.sass";
import Icon from "../Icon";
import { toChecksumAddress } from "ethereum-checksum-address";
import { utils } from "ethers";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { formatUnits } from "ethers/lib/utils";

const categoriesOptions = ["Adventure","Airlines","Art","Cruise","Culture","Ecotourism","Gastronomy","Honeymoon","Hotels","Luxury","Photography","Safaris","Sports","Others"];

const Card4 = ({ className, item }) => {
  const [visible, setVisible] = useState(false);
  const [URI,setURI] = useState()

  useEffect(()=>{
    const abc = async ()=>{
      try {
        const meta = await axios.get(item.uri[0],{
          headers: {
            'accept': 'application/json'
          }
        })

         setURI(meta.data)        
      } catch (error) {
        setURI({name:"server error", image:"server errror"})
      }

    }

    abc()
  },[item])


  const reduxData = useSelector((state) => {

    return state.adoptReducer.data;
  });


const getName = (add)=>{
//  console.log("addr step 1",add)
  const tx1 = reduxData && reduxData.filter(item=>item[2]===add)
//  console.log("step 2 ",tx1[0][0])
  return  {name:tx1[0][0],email:tx1[0][1],address:tx1[0][2],image:tx1[0][3]}
}


// console.log("category ",formatUnits(item.category,0))
// console.log("token id ",formatUnits(item.tokenId,0))

  return (
    <div className={cn(styles.card, className)}>
      <div className={styles.preview}>
        <img 
        //srcSet={`${URI && URI.image2}`} 
        src={URI && URI.image} alt="Card" />
        <div className={styles.control}>
          <div
            className={cn(
              { "status-green": item.category === "green" },
              styles.category
            )}
          >
            {item.cate && categoriesOptions[formatUnits(item.category,0)]  }
          </div>
          <button
            className={cn(styles.favorite, { [styles.active]: visible })}
            onClick={() => setVisible(!visible)}
          >
            <Icon name="heart" size="20" />
          </button>
          <button className={cn("button-small", styles.button)}>
            <span>Place a bid</span>
            <Icon name="scatter-up" size="16" />
          </button>
        </div>
      </div>
      <Link className={styles.link} to={{pathname: `/item/${utils.formatUnits(item.index,0)}`, state:{item}} }>
        <div className={styles.body}>
          <div className={styles.line}>
             <div className={styles.title}>{URI && URI.name}</div>
           <div className={styles.price}>{item.reserve &&  utils.formatEther(item.reserve) }{" "}TVL </div>
          </div>
          <div className={styles.line}>
            <div className={styles.users}>
              {item.highestBidder.map((x, index) => (
                <div className={styles.avatar} key={index}>
                  <img src={getName(x).image} alt="Avatar" />
                </div>
              ))}
            </div>
            <div className={styles.counter}>{utils.formatUnits(item.index,0) }</div>
          </div>
        </div>
        <div className={styles.foot}>
          <div className={styles.status}>
            <Icon name="candlesticks-up" size="20" />
            Highest bid <span>{item.highestBid.length>0? utils.formatEther(item.highestBid[item.highestBid.length-1]):0}</span>
          </div>
          <div
            className={styles.bid}
            dangerouslySetInnerHTML={{ __html: "5" }}
          />
        </div>
      </Link> 
    </div>
  );
};

export default Card4;
