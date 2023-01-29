import React, { useEffect, useState } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Card.module.sass";
import Icon from "../Icon";
import { utils } from "ethers";
import axios from "axios";
import { formatUnits } from "ethers/lib/utils";

const Card2 = ({ className, item,number}) => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState();

  useEffect(()=>{

    const abc = async()=>{
      const _data = await axios.get(
        `https://deep-index.moralis.io/api/v2/nft/${item && item.tokenAdd}/${item && item.tokenId?item.tokenId :0}?chain=bsc%20testnet&format=decimal&normalizeMetadata=true`,
        {headers:{'X-API-Key': 'SXF7SQmSpjNYErW3zHBorgED0PGPVaiH9VlhXol46NY02JNL315MxMdx0CFTglxR', 
        'accept': 'application/json'}}
        )
        setData(_data.data)
       // console.log(_data.data)
      }
    


    setTimeout(() => {
      abc()      
    }, ((number+1)*1100)+2000);

  },[])




  // console.log("item",item)
  // console.log("data",data && data
  // )
  // console.log("unit",utils.formatEther(item.reserve) )


  return (
    <div className={cn(styles.card, className)}>
        <div className={styles.preview}>
          <img srcSet={`${data && data.normalized_metadata.image} 2x`} src={data && data.normalized_metadata.image} alt="Card" />
          <div className={styles.control}>
            <div
              className={cn(
                { "status-green": item.category === "green" },
                styles.category
              )}
            >
                Green
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
        <Link className={styles.link} to={{pathname:`/item/${utils.formatUnits(item.index,0)}`,
          state:data && item && {image:data.normalized_metadata.image,
          AddressOfToken: item.tokenAdd,
          name:data.normalized_metadata.name,
              price:utils.formatEther(item.reserve),
              index:utils.formatUnits(item.tokenId,0),
              highestBid: item.highestBid.length>0? formatUnits(item.highestBid[item.highestBid.length-1],0) : 0,
              users:[{
                name: "Undefined",
                position: "Owner",
                avatar: "/images/content/avatar-2.jpg",
                reward: "/images/content/reward-1.svg",
                address:data.owner_of,
              },
              {
                name: "Undefined",
                position: "Creator",
                avatar: "/images/content/avatar-1.jpg",

                address: `${data.minter_address}`,
              }],
              highestBidder: item.highestBidder.length>0? formatUnits(item.highestBidder[item.highestBidder.length-1],0) : 0,
              owner: item.beneficiary,
 
            }}}
        
        >
          <div className={styles.body}>
            <div className={styles.line}>
              <div className={styles.title}>{data && data.normalized_metadata.name}</div>
              <div className={styles.price}>{item && utils.formatEther(item.reserve)}</div>
            </div>
            <div className={styles.line}>
              <div className={styles.users}>
                {/* {item.users.map((x, index) => (
                  <div className={styles.avatar} key={index}>
                    <img src={x.avatar} alt="Avatar" />
                  </div>
                ))} */}
              </div>
              <div className={styles.counter}>{item && utils.formatUnits(item.index,0)}</div>
            </div>
          </div>
          <div className={styles.foot}>
            <div className={styles.status}>
              <Icon name="candlesticks-up" size="20" />
              Highest bid <span>{item && item.highestBid[item.highestBid-1]==undefined? 0: utils.formatEther(item.highestBid[item.highestBid-1])}</span>
            </div>
            <div
              className={styles.bid}
              dangerouslySetInnerHTML={item && { __html: item.highestBid[item.highestBid-1]==undefined? 0: utils.formatEther(item.highestBid[item.highestBid-1]) }}
            />
          </div>
        </Link>
    </div>
  );
};

export default Card2;
