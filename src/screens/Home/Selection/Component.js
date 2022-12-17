import axios from 'axios'
import { formatEther, formatUnits } from 'ethers/lib/utils'
import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Selection.module.sass";
import { useEffect } from 'react'

export default function Component({x}) {
    const [URI,setURI] = useState()
    const [bnbPrice,setBnbPrice] = useState()

    useEffect(()=>{
      const abc = async ()=>{
        try {
          const meta = await axios.get(x.uri[0],{
            headers: {
              'accept': 'application/json'
            }
          })
          setURI(meta.data)
          
          const eth = await axios.get(
            "https://api.coingecko.com/api/v3/coins/binancecoin/market_chart?vs_currency=usd&days=7"
          )
            setBnbPrice(eth.data.prices[eth.data.prices.length-1][1])

        } catch (error) {
          setURI({name:"server error", image:"server errror"})
        }
  
      }
  
      abc()
    },[x])

    const reduxData = useSelector((state) => {

        return state.adoptReducer.data;
      });
    
    
    const getName = (add)=>{
    //   console.log("addr step 1",reduxData)
      const tx1 = reduxData && reduxData.filter(item=>item[2]===add)
    //  console.log("step 2 ",tx1)
      return  {name:tx1[0][0],email:tx1[0][1],address:tx1[0][2],image:tx1[0][3]}
    }


  return (
    <div>
         <div className={styles.col}>
         <Link className={styles.card} to={`/item/${formatUnits(x.index,0)}`} >
                    <div className={styles.preview}>
                      <img
//                        srcSet={`${x.image2x} 2x`}
                        src={URI && URI.image}
                        alt="Selection"
                      />
                    </div>
                    <div className={styles.head}>
                      <div className={styles.line}>
                        <div className={styles.avatar}>
                          <img src={getName(x.beneficiary).name} alt="Avatar" />
                        </div>
                        <div className={styles.description}>
                          <div className={styles.title}>{URI && URI.name}</div>
                          <div className={styles.counter}>{formatUnits(x.tokenId,0)}</div>
                        </div>
                      </div>
                      <div className={styles.box}>
                        <div className={styles.content}>Content upSupported</div>
                        <div className={styles.price}>{`${formatEther(x.reserve)} BNB`}</div>
                      </div>
                    </div>
                  </Link>
         </div>
        
    </div>
  )
}
