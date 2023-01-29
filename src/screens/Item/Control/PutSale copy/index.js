import React, { useState } from "react";
import cn from "classnames";
import styles from "./PutSale.module.sass";
import Icon from "../../../../components/Icon";
import Switch from "../../../../components/Switch";
import Loader from "../../../../components/Loader";
import { useWeb3React } from "@web3-react/core";
import { Contract, ethers } from "ethers";
import { Cdata, MarketAbi, MarketAdd } from "../../../../config";
import Dropdown from "../../../../components/Dropdown";


const categoriesOptions = ["Adventure","Airlines","Art","Cruise","Culture","Ecotourism","Gastronomy","Honeymoon","Hotels","Luxury","Photography","Safaris","Sports","Others"];
const Continents = Cdata.map((v,e)=>v.title)

const PutSale2 = ({saleAuction,Approval,Sale, className,setVisibleModalSale,cancelandSaleDone,commission,id,add,approvalDone,SaleDone,description,setDescription }) => {
  const [categories, setCategories] = useState(categoriesOptions[0]);

  const [price,setPrice] = useState(0)
  const [time,setTime] = useState(0)
  const [continent, setcontinent] = useState(Continents[0]);
  const [continentInd, setcontinentInd] = useState(0);
  const [subCon, setsubCon] = useState(Cdata[continentInd].subMenu[0].title);
  const [subConInd, setsubConInd] = useState(0);
  const [country, setCountry] = useState(0);
  const [countryInd, setCountryInd] = useState(0);
  const [travelOffer, settravelOffer] = useState(false);
//  console.log("obje",{Sale, className,setVisibleModalSale,cancelandSaleDone,price,setPrice,commission,id,add })

  const subConArray = Cdata[continentInd].subMenu!=null ? Cdata[continentInd].subMenu.map((v,e)=>v.title) : []

  const countryArray = Cdata[continentInd].subMenu ? Cdata[continentInd].subMenu[subConInd].subMenu?.map((v,e)=>v.title) : []



  const items = [

    {
      title: "Service fee",
      value: `${commission}%`,
    },
    {
      title: "Total amount",
      value: `${price - Number(price)* commission/100} TVL`,
    },
    ];


    function indexGenerator(a,b,c){
      const x = a<10? `0${a}` : a
      const y = b+1<10? `0${b+1}` : b
      const z = c+1<10? `0${c+1}` : c
    //  console.log("index",x+y+z)
      return x+y+z
    }

    console.log("contry array",subConArray)

  return (
    <div className={cn(className, styles.sale)}>
      <div className={cn("h4", styles.title)}>Put on {`${saleAuction}`}</div>
      <div className={styles.line}>
        <div className={styles.icon}>
          <Icon name="coin" size="24" />
        </div>
        {saleAuction=="Sale"? 
                <div className={styles.details}>
                <div className={styles.info}>Instant sale price</div>
                <div className={styles.text}>
                  Enter the price for which the item will be instanly sold
                </div>
              </div>
        : null}

        {/* <input className={styles.switch} value={price} onChange={(e)=>{setPrice(e.target.value)}} /> */}
      </div>
      <div className={styles.table}>
          <div className={styles.row} >
            <div className={styles.col}>Enter your Price TVL - BUSD</div>
            <input type="number" value={price} onChange={(e)=>{setPrice(e.target.value)}} className={styles.col}></input>
          </div>
          <div className={styles.row} >
            <div className={styles.col}>Enter Description</div>
            <input type="text" value={description} onChange={(e)=>{setDescription(e.target.value)}} className={styles.col}></input>
          </div>
          {saleAuction=="Auction"? 
            <div className={styles.row} >
            <div className={styles.col}>Enter end Date</div>
            <input type="date" value={time} onChange={(e)=>{setTime(e.target.value)}} className={styles.col}></input>
          </div>
          : null}

        {items.map((x, index) => (
          <div className={styles.row} key={index}>
            <div className={styles.col}>{x.title}</div>
            <div className={styles.col}>{x.value}</div>
          </div>
        ))}
      </div>
      <div className={styles.col}>
                        <div className={styles.field}>
                          <div className={styles.label}>Categories</div>
                          <Dropdown
                            className={styles.dropdown}
                            value={categories}
                            setValue={setCategories}
                            options={categoriesOptions}
                            setInd={()=>{}}
                          />
                        </div>
                      </div>
                      <div className={styles.col}>
                        <div className={styles.field}>
                          <div className={styles.label}>Continents</div>
                          <Dropdown
                            className={styles.dropdown}
                            value={continent}
                            setValue={setcontinent}
                            options={Continents}
                            setInd={setcontinentInd}
                          />
                        </div>
                      </div>
                      <div className={styles.col}>
                      <div className={styles.field}>
                        <div className={styles.label}>Sub-Continent / Countries</div>
                        <Dropdown
                          className={styles.dropdown}
                          value={subCon}
                          setValue={setsubCon}
                          options={subConArray}
                          setInd={setsubConInd}
                        />
                        </div>
                      </div>
                      {Cdata[continentInd].subMenu && Cdata[continentInd].subMenu[subConInd].subMenu !=undefined ?
                      <div className={styles.col}>
                      <div className={styles.field}>
                        <div className={styles.label}>Countries</div>
                        <Dropdown
                          className={styles.dropdown}
                          value={country}
                          setValue={setCountry}
                          options={countryArray}
                          setInd={setCountryInd}
                        />
                        </div>
                      </div> :  null
                      }
                      <div className={styles.option}>
                  <div className={styles.box}>
                    <div className={styles.category}>Select as Travel Offer</div>
                    <div className={styles.text}>
                      Select if you want to make this as travel offer
                    </div>
                  </div>
                  <Switch value={travelOffer} setValue={settravelOffer} />
                </div>
      <div className={styles.btns}>
      <button 
        onClick={()=>{Approval(id,add)}}
        className={cn(`${approvalDone ? "button loading" : "button"}` , styles.button)}>{
          approvalDone? <Loader></Loader> : "Approve"
        }</button>
        
        <button 
        onClick={()=>{Sale(id,time,price,add,categoriesOptions.indexOf(categories),travelOffer,indexGenerator(continentInd,subConInd,countryInd))}}
        className={cn(`${SaleDone ? "button loading" : "button"}` , styles.button)}>{
          SaleDone? <Loader></Loader> : "Continue"
        }</button>
        <button 
        onClick={()=>{setVisibleModalSale(false)}}
        className={cn("button-stroke", styles.button)}>Cancel</button>
      </div>
    </div>
  );
};

export default PutSale2;
