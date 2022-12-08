import axios from 'axios'
import { ethers } from 'ethers'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import styles from "./Selection.module.sass";

export default function Card4({item,index}) {

    const [data,setData] = useState()


    useEffect(()=>{

        const abc = async()=>{
          const _data = await axios.get(
            `https://deep-index.moralis.io/api/v2/nft/${item && item.tokenAdd}/${item && ethers.utils.formatUnits(item.tokenId,0)}?chain=bsc%20testnet&format=decimal&normalizeMetadata=true`,
            {headers:{'X-API-Key': 'SXF7SQmSpjNYErW3zHBorgED0PGPVaiH9VlhXol46NY02JNL315MxMdx0CFTglxR', 
            'accept': 'application/json'}}
            )
            setData(_data.data.normalized_metadata)
           }
        
    
    
        setTimeout(() => {
          abc()      
        }, ((index+1)*1000));
    
      },[])

  data &&     console.log("index",data)


    return (
    <div>
            <div>
    <div className={styles.preview}>
        <img
        srcSet={data && `${data.image} 2x`}
        src={data && data.image}
        alt="Selection"
        />
    </div>
    <div className={styles.head}>
        <div className={styles.line}>
        <div className={styles.avatar}>
            <img src={"abc"} alt="Avatar" />
        </div>
        <div className={styles.description}>
            <div className={styles.title}>{data && data.name}</div>
            <div className={styles.counter}>{item && ethers.utils.formatUnits(item.tokenId,0)}</div>
        </div>
        </div>
        <div className={styles.box}>
        <div className={styles.content}>{data && data.description}</div>
        <div className={styles.price}>{item && ethers.utils.formatEther(item.reserve)}</div>
        </div>
    </div>
    </div>

    </div>
  )
}
