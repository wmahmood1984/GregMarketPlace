import React, { useState } from "react";
import cn from "classnames";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { formatUnits } from "ethers/lib/utils";
import styles from "./Collections.module.sass";

export default function Component({item}) {
    const [URI,setURI] = useState()

    useEffect(()=>{
      const abc = async ()=>{
        try {
          const meta = await axios.get(item.uri,{
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

//URI &&   console.log("item in com",URI )


    return (
        <div className={styles.preview} >
        <img src={URI && URI.image} alt="Collection" />
            </div>
  )
}
