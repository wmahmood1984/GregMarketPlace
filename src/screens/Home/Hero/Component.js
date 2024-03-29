import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import styles from "./Hero.module.sass";
import cn from "classnames";
import Icon from "../../../components/Icon";
import Timer2 from "./Timer2";
import { Link } from "react-router-dom";
import { formatEther, formatUnits } from 'ethers/lib/utils';
import { useWeb3React } from '@web3-react/core';
import { toChecksumAddress } from 'ethereum-checksum-address';




export default function Component({item,setTokenId,setTokenAdd,setVisibleModalBid}) {

    const [URI,setURI] = useState()
    const [TVLPrice,setTVLPrice] = useState()
    const {account} = useWeb3React()

    useEffect(()=>{
      const abc = async ()=>{
        try {
          const meta = await axios.get(item.uri[1]
            )
          setURI(meta.data)
          
          const eth = await axios.get(
            "https://api.coingecko.com/api/v3/coins/binancecoin/market_chart?vs_currency=usd&days=7"
          )
            setTVLPrice(eth.data.prices[eth.data.prices.length-1][1])

        } catch (error) {
          setURI({name:"server error", image:"server errror"})
        }
  
      }
  
      abc()
    },[item])

    const reduxData = useSelector((state) => {

        return state.adoptReducer.data;
      });

      const web3 = useSelector((state) => {

        return state.adoptReducer.data;
      });
    
    
      const getName = (add)=>{

        const tx1 = reduxData.filter(item=> toChecksumAddress(item[2])===toChecksumAddress(add))
      //      console.log("getName",tx1)  
        return  {name:tx1[0][0],email:tx1[0][1],address:tx1[0][2],image:tx1[0][3]}
      }

//    console.log("item",item)
    const now = new Date().getTime()/1000

  return (reduxData&&  item && 
    <div>
        <div className={styles.details}>
                      <div className={cn("h1", styles.subtitle)}>{item.uri[2]}</div>
                      <div className={styles.line}>
                        <div className={styles.item}>
                          <div className={styles.avatar}>
                            <img src={getName(item.beneficiary).image} alt="Avatar" />
                          </div>
                          <div className={styles.description}>
                            <div className={styles.category}>Creator</div>
                            <div className={styles.text}>{getName(item.beneficiary).name}</div>
                          </div>
                        </div>
                        <div className={styles.item}>
                          <div className={styles.icon}>
                            <Icon name="stop" size="24" />
                          </div>
                          <div className={styles.description}>
                            <div className={styles.category}>Instant price</div>
                            <div className={styles.text}>{`${formatEther(item.reserve)}`}</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.wrap}>
                        <div className={styles.info}>Current Bid</div>
                        <div className={styles.currency}>{`${formatEther(item.reserve)}`}</div>
                        <div className={styles.price}>{TVLPrice &&  `$${formatEther(item.reserve) }`}</div>
                        
                        <Timer2
                        start={item.auctionEnd }
                        styles={styles}
                        ></Timer2>
                      </div>
                      <div className={styles.btns}>
                        {item.address!=account && item.auctionEnd>now ?
                        <button
                        className={cn("button", styles.button)}
                        onClick={() => {
                          setTokenId(item.tokenId )
                          setTokenAdd(item.tokenAdd)
                          setVisibleModalBid(true)
                        }}
                      >
                        Place a bid
                      </button>: null
                        }

                        <Link
                          className={cn("button-stroke", styles.button)}
                          to={`/item/${item.index}`}
                        >
                          View item
                        </Link>
                      </div>
                    </div>
    </div>
  )
}
