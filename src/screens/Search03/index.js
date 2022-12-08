import React, { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./Search02.module.sass";
import { Range, getTrackBackground } from "react-range";
import Icon from "../../components/Icon";

import Dropdown from "../../components/Dropdown";
import axios from "axios"
// data
//import { bids } from "../../mocks/bids";
import { Contract, utils } from "ethers";
import { MarketAbi, MarketAdd, TokenAbi } from "../../config";
import { useWeb3React } from "@web3-react/core";

import Card3 from "../../components/Card3";

const navLinks = ["All items", "Art", "Game", "Photography", "Music", "Video"];

const dateOptions = ["Newest", "Oldest"];
const likesOptions = ["Most liked", "Least liked"];
const colorOptions = ["All colors", "Black", "Green", "Pink", "Purple"];
const creatorOptions = ["Verified only", "All", "Most liked"];


export const getContract = (library, account,add,abi) => {
	const signer = library?.getSigner(account).connectUnchecked();
	var contract = new Contract(add,abi, signer);
	return contract;
};



const Auction = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [date, setDate] = useState(dateOptions[0]);
  const [likes, setLikes] = useState(likesOptions[0]);
  const [color, setColor] = useState(colorOptions[0]);
  const [creator, setCreator] = useState(creatorOptions[0]);
  const { account,library,chainId } = useWeb3React();
  const [search, setSearch] = useState("");
  const [bids, setAuctions] = useState("");
  const [values, setValues] = useState([5]);
  const [approvalDone,setApprovalDone]=useState(false)
  const [SaleDone,setSaleDone]=useState(false)
  

  const [commission,setCommission] = useState()

  const marketContract = getContract(library, account,MarketAdd,MarketAbi);

  const [toggle,setToggle] = useState()

  useEffect(()=>{
    const abc = async()=>{
      if(account){
        const _data = await axios.get(
          `https://deep-index.moralis.io/api/v2/${account}/nft?chain=bsc%20testnet&format=decimal&normalizeMetadata=true`,
  
          {  
           // params: {chain: 'bsc%20testnet', format: 'decimal', normalizeMetadata: 'true'},
            
            headers:{'X-API-Key': 'SXF7SQmSpjNYErW3zHBorgED0PGPVaiH9VlhXol46NY02JNL315MxMdx0CFTglxR', 
          'accept': 'application/json'}}
          )
          setAuctions(_data.data.result)
        
          const _comm = await marketContract.commissionRate()
          setCommission(_comm)
      }
      

      
      }
    abc()
  },[account,toggle])


console.log("array",commission)


const Sale = async (id,time,_price,add)=>{
  setSaleDone(true)
  try {
    const tx = await marketContract.createSale(id,utils.parseEther(_price),add,{gasLimit:3000000})

    await tx.wait()
    
    if(tx){
      setToggle(!toggle)
      setSaleDone(false)
    }
  } catch (error) {
    console.log(error)
    setSaleDone(false)
  }
}


const Auction = async (id,time,_price,add)=>{
  setSaleDone(true)
  try {
    const tx = await marketContract.createAuction(id,Date.parse(time)/1000, utils.parseEther(_price),add,{gasLimit:3000000})

    await tx.wait()
    
    if(tx){
      setToggle(!toggle)
      setSaleDone(false)
    }
  } catch (error) {
    console.log(error)
    setSaleDone(false)
  }
}


const Approval = async (id,add)=>{
  setApprovalDone(true)
  const TokenContract = getContract(library,account,add,TokenAbi)


  try {
    const tx = await TokenContract.approve(MarketAdd,id,{gasLimit:3000000})

    await tx.wait()
    
    if(tx){
      setToggle(!toggle)
      setApprovalDone(false)
    }
  } catch (error) {
    console.log(error)
    setApprovalDone(false)
  }
}

  const handleSubmit = (e) => {
    alert();
  };

  const STEP = 0.1;
  const MIN = 0.01;
  const MAX = 10;

  return (
    <div className={cn("section-pt80", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.top}>
          <div className={styles.title}>Type your keywords</div>
          <form
            className={styles.search}
            action=""
            onSubmit={() => handleSubmit()}
          >
            <input
              className={styles.input}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              name="search"
              placeholder="Search ..."
              required
            />
            <button className={styles.result}>
              <Icon name="search" size="16" />
            </button>
          </form>
        </div>
        <div className={styles.sorting}>
          <div className={styles.dropdown}>
            <Dropdown
              className={styles.dropdown}
              value={date}
              setValue={setDate}
              options={dateOptions}
            />
          </div>
          <div className={styles.nav}>
            {navLinks.map((x, index) => (
              <button
                className={cn(styles.link, {
                  [styles.active]: index === activeIndex,
                })}
                onClick={() => setActiveIndex(index)}
                key={index}
              >
                {x}
              </button>
            ))}
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.filters}>
            <div className={styles.range}>
              <div className={styles.label}>Price range</div>
              <Range
                values={values}
                step={STEP}
                min={MIN}
                max={MAX}
                onChange={(values) => setValues(values)}
                renderTrack={({ props, children }) => (
                  <div
                    onMouseDown={props.onMouseDown}
                    onTouchStart={props.onTouchStart}
                    style={{
                      ...props.style,
                      height: "36px",
                      display: "flex",
                      width: "100%",
                    }}
                  >
                    <div
                      ref={props.ref}
                      style={{
                        height: "8px",
                        width: "100%",
                        borderRadius: "4px",
                        background: getTrackBackground({
                          values,
                          colors: ["#3772FF", "#E6E8EC"],
                          min: MIN,
                          max: MAX,
                        }),
                        alignSelf: "center",
                      }}
                    >
                      {children}
                    </div>
                  </div>
                )}
                renderThumb={({ props, isDragged }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: "24px",
                      width: "24px",
                      borderRadius: "50%",
                      backgroundColor: "#3772FF",
                      border: "4px solid #FCFCFD",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "-33px",
                        color: "#fff",
                        fontWeight: "600",
                        fontSize: "14px",
                        lineHeight: "18px",
                        fontFamily: "Poppins",
                        padding: "4px 8px",
                        borderRadius: "8px",
                        backgroundColor: "#141416",
                      }}
                    >
                      {values[0].toFixed(1)}
                    </div>
                  </div>
                )}
              />
              <div className={styles.scale}>
                <div className={styles.number}>0.01 ETH</div>
                <div className={styles.number}>10 ETH</div>
              </div>
            </div>
            <div className={styles.group}>
              <div className={styles.item}>
                <div className={styles.label}>Price</div>
                <Dropdown
                  className={styles.dropdown}
                  value={likes}
                  setValue={setLikes}
                  options={likesOptions}
                />
              </div>
              <div className={styles.item}>
                <div className={styles.label}>Color</div>
                <Dropdown
                  className={styles.dropdown}
                  value={color}
                  setValue={setColor}
                  options={colorOptions}
                />
              </div>
              <div className={styles.item}>
                <div className={styles.label}>Creator</div>
                <Dropdown
                  className={styles.dropdown}
                  value={creator}
                  setValue={setCreator}
                  options={creatorOptions}
                />
              </div>
            </div>
            <div className={styles.reset}>
              <Icon name="close-circle-fill" size="24" />
              <span>Reset filter</span>
            </div>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.list}>
              {bids && bids.map((x, index) => (
                <Card3 
                className={styles.card} 
                item={x} 
                key={index}
                Approval={Approval}  
                Sale={Sale}
                commission={commission && commission}
                approvalDone={approvalDone}
                SaleDone={SaleDone} 
                Auction={Auction}
                />
              ))}
            </div>
            <div className={styles.btns}>
              <button className={cn("button-stroke", styles.button)}>
                <span>Load more</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auction;
