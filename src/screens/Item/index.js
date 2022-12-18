import React, { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./Item.module.sass";
import Users from "./Users";
import Control from "./Control";
import Options from "./Options";
import {useLocation, useParams} from 'react-router-dom';
import { useWeb3React } from "@web3-react/core";
import { ERC20, IERC20, MarketAbi, MarketAdd } from "../../config";
import { Contract, providers, utils } from "ethers";
import axios from "axios";
import { formatEther, formatUnits } from "ethers/lib/utils";
import { useSelector } from "react-redux";
import { client, q } from "../../config.js";
import { style } from "@mui/system";
const navLinks = ["Info", "Owners", "History", "Bids"];

// const categories = [
//   {
//     category: "black",
//     content: "art",
//   },
//   {
//     category: "purple",
//     content: "unlockable",
//   },
// ];

const categories = ["Adventure","Airlines","Art","Cruise","Culture","Ecotourism","Gastronomy","Honeymoon","Hotels","Luxury","Photography","Safaris","Sports","Others"];

const users = [
  {
    name: "Raquel Will",
    position: "Owner",
    avatar: "/images/content/avatar-2.jpg",
    reward: "/images/content/reward-1.svg",
  },
  {
    name: "Selina Mayert",
    position: "Creator",
    avatar: "/images/content/avatar-1.jpg",
  },
];

const provider = new providers.Web3Provider(window.ethereum)


export const getContract = (library, account,add,abi) => {
	const signer = library?.getSigner(account).connectUnchecked();
	var contract = new Contract(add,abi, signer);
	return contract;
};



const Item = () => {
//  const location = useLocation()
  const [auctions, setAuctions] = useState("");
  const [data, setData] = useState("");
  const [toggle, setToggle] = useState(false);
  const {account,library} = useWeb3React()
  const marketContract = getContract(library, account,MarketAdd,MarketAbi); 
  const marketContractR = new Contract(MarketAdd,MarketAbi,provider);
  const [commission,setCommission] = useState(0)
  const [cancelDone,setcancelDone] = useState(false)
  const [purchasing,setPurchasing] = useState(false)
  const [cancelandSaleDone,setcancelAndSaleDone] = useState(false)
  const [balance,setBalance] = useState()
  const [visibleModalPurchase, setVisibleModalPurchase] = useState(false);
  const [visibleModalBid, setVisibleModalBid] = useState(false);
  const [visibleModalViewAll, setVisibleModalViewAll] = useState(false);
  const [allowance, setAllowance] = useState();
  const [visibleModalAccept, setVisibleModalAccept] = useState(false);
  const [visibleModalSale, setVisibleModalSale] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const TVLContract = getContract(library,account, ERC20,IERC20)
  const [bid,setBid] = useState()
  const {index} = useParams()


  useEffect(()=>{
    const abc = async()=>{

        const item = await marketContractR.getArray()
     //   console.log("original item",item)
        setAuctions(item[index])
        setBid(formatEther(item[index].reserve))
        
        const _data = await axios.get(
          `https://deep-index.moralis.io/api/v2/nft/${item[index].tokenAdd}/${item[index].tokenId}?chain=bsc%20testnet&format=decimal&normalizeMetadata=true`,
          {headers:{'X-API-Key': 'SXF7SQmSpjNYErW3zHBorgED0PGPVaiH9VlhXol46NY02JNL315MxMdx0CFTglxR', 
          'accept': 'application/json'}}
          )
          setData(_data.data)


          // const _com = await marketContract.bidfee()
          // setCommission(_com)
      if(account){
          const _balance = await library.getSigner(account).getBalance()
          setBalance(utils.formatEther(_balance))

          const _allowance = await TVLContract.allowance(account,MarketAdd)
          setAllowance(utils.formatEther(_allowance))
      
      }

      



      }
    abc()
  },[toggle,account])



//   console.log("index",data)
// console.log("auctions",auctions)
// console.log("data",data)

const reduxData = useSelector((state) => {

  return state.adoptReducer.data;
});



const setDataBase = async (account)=>{

  try {
    const tx1 = await client.query(

        q.Get(
        q.Match(q.Index('Account1'), `${account}`)
        )).then((ret) => console.log("ret",ret))
       // console.log(tx1)
    return tx1      

  } catch (err) {
    if(account){

    }

    console.error(
      'Error: [%s] %s: %s',
      err,
      err.name,
      err.message,
      err.errors()[0].description,
      )
  }

}


const getName = (add)=>{
  console.log("addr step 1",add)
  const tx1 = reduxData && reduxData.filter(item=>item[2]===add)
//  console.log("step 2 ",tx1[0][0])
  return  {name:tx1[0][0],email:tx1[0][1],address:tx1[0][2],image:tx1[0][3]}
}






  const cancelAuction = async ()=>{
    setcancelDone(true)
    
    try {
      const tx = await marketContract.auctionCancel(utils.formatUnits(auctions.tokenId,0),auctions.tokenAdd,
      {gasLimit:3000000})
      await tx.wait()

      if(tx){
        console.log(tx)
        setcancelDone(false)
        setToggle(!toggle)
      }


    } catch (error) {
      console.log(error)
      setcancelDone(false)
    }
  }



  const cancleAndSale = async ()=>{
    setcancelAndSaleDone(true)
    
    try {
      const tx = await marketContract.cancelAuctionAndSale(auctions.tokenAdd,utils.formatUnits(auctions.tokenId,0),
      utils.formatUnits(auctions.reserve,0),
      {gasLimit:3000000})
      await tx.wait()

      if(tx){
        console.log(tx)
        setcancelAndSaleDone(false)
        setToggle(!toggle)
      }


    } catch (error) {
      console.log(error)
      setcancelAndSaleDone(false)
    }
  }

  const purchase = async ()=>{
    setPurchasing(true)
    console.log("data purchase",[utils.formatUnits(auctions.tokenId,0),auctions.tokenAdd,
      {gasLimit:3000000,value:utils.parseEther(utils.formatUnits(auctions.reserve)) }])
    
    try {
      const tx = await marketContract.purchase(utils.formatUnits(auctions.tokenId,0),auctions.tokenAdd,
      {gasLimit:3000000,value:utils.parseEther(utils.formatUnits(auctions.reserve))})
      await tx.wait()

      if(tx){
        console.log(tx)
        setPurchasing(false)
        setToggle(!toggle)
        setVisibleModalPurchase(false)
      }


    } catch (error) {
      console.log(error)
      setPurchasing(false)
    }
  }

  const Approval = async ()=>{
    try {
      const tx1 = await TVLContract.approve(MarketAdd,utils.parseEther(bid),{gasLimit:3000000})
      await tx1.wait()

      if(tx1){
        setToggle(!toggle)
      }
      
    } catch (error) {
      console.log(error)
    }
  }

  


  return (
    <>
      <div className={cn("section", styles.section)}>
         <div className={cn("container", styles.container)}>
          <div className={styles.bg}>
            <div className={styles.preview}>
              <div className={styles.categories}>
              <div
                    className={cn("status-black",styles.category )}

                  >
                    {auctions &&  categories[auctions.category_album_collectible[0]]}
                  </div>
                {/* {categories.map((x, index) => (
                  <div
                    className={cn(
                      { "status-black": x.category === "black" },
                      { "status-purple": x.category === "purple" },
                      styles.category
                    )}
                    key={index}
                  >
                    {x.content}
                  </div>
                ))} */}
              </div>
              <img
                srcSet={data && data.normalized_metadata.image}
                src={data && data.normalized_metadata.image}
                alt="Item"
              />
            </div>
            <Options className={styles.options} />
          </div>
          <div className={styles.details}>
            <h1 className={cn("h3", styles.title)}>{data && data.normalized_metadata.name}</h1>
            <div className={styles.cost}>
              <div className={cn("status-stroke-green", styles.price)}>
                {auctions && utils.formatEther(auctions.reserve) } TVL
              </div>
              <div className={cn("status-stroke-black", styles.price)}>
                ${auctions && utils.formatEther(auctions.reserve)}
              </div>
              <div className={styles.counter}>{data && data.amount} in stock</div>
            </div>
            <div className={styles.info}>
              {/* This NFT Card will give you Access to Special Airdrops. To learn
              more about UI8 please visit{" "} */}
              {auctions && auctions.uri[1]}
              {/* <a
                href="https://ui8.net"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://ui8.net
              </a> */}
            </div>
            <div className={styles.nav}>
              {navLinks.map((x, index) => (
                <button
                  className={cn(
                    { [styles.active]: index === activeIndex },
                    styles.link
                  )}
                  onClick={() => setActiveIndex(index)}
                  key={index}
                >
                  {x}
                </button>
              ))}
            </div>
            {activeIndex ==1?            
            <Users className={styles.users} items={[{
                name: auctions && `${getName(auctions.beneficiary).name}`,
                position: "Owner",
                avatar: auctions && `${getName(auctions.beneficiary).image}`,
                reward: "/images/content/reward-1.svg",
                address:auctions && auctions.beneficiary,
              },
              {
                name: auctions && `${getName(auctions.beneficiary).name }`,
                position: "Creator",
                avatar: auctions && `${getName(auctions.beneficiary).image}`,

                address: data && `${data.minter_address}`,
              }]} />: 

              activeIndex ==3 ? 
              <div>
              {auctions &&  auctions.highestBidder.map((v,e)=><div>
                <div>
                <span>Bidder</span>
                <span>{`${v.slice(0,5)}...${v.slice(-4)}`}</span>
                </div>
                <div>
                <span>Bid amount</span>
                <span>{utils.formatEther(auctions && auctions.highestBid[e])}</span>
                </div>
            
            </div>)}
          </div> : 
           activeIndex ==2 ? <div>No History</div>: null

            }

            {auctions && 
            true 
            //&& auctions.open
            ?<Control className={styles.control}
            biArray={auctions && auctions.highestBid}
            bidderArray={auctions && auctions.highestBidder}
             highestBid={auctions && auctions.highestBid[auctions.highestBid.length-1]? utils.formatEther(auctions.highestBid[auctions.highestBid.length-1]):0}
             highestBidder={auctions && auctions.highestBidder.length>0? getName(auctions.highestBidder[auctions.highestBidder.length-1]).name : "none"}
             highestBidderAV={auctions && auctions.highestBidder.length>0? getName(auctions.highestBidder[auctions.highestBidder.length-1]).image : "https://img.freepik.com/free-vector/question-mark-symbol-with-blue-lights-background_1017-25229.jpg?w=2000"}
             owner={auctions && auctions.beneficiary} 
             tokenId={auctions && utils.formatUnits(auctions.tokenId,0)}
             AddressOfToken={auctions && auctions.tokenAdd}
             setToggle={setToggle}
             toggle={toggle}
             commission={commission && utils.formatUnits(commission,0)}
             auctionEnd={auctions && utils.formatUnits(auctions.auctionEnd,0) }
             cancelAuction={cancelAuction}
             cancleAndSale={cancleAndSale}
             cancelDone={cancelDone}
             setcancelDone={setcancelDone}
             cancelandSaleDone={cancelandSaleDone}
             setcancelAndSaleDone={setcancelAndSaleDone}
             open={auctions && auctions.open}
             setForSale = {auctions && auctions.UpForSale}
             price={auctions && utils.formatEther(auctions.reserve)}
             balance={balance}
             purchasing={purchasing}
             setPurchasing={setPurchasing}
             purchase={purchase}
             visibleModalPurchase={visibleModalPurchase} 
             setVisibleModalPurchase={setVisibleModalPurchase}
             visibleModalBid={visibleModalBid} 
             setVisibleModalBid={setVisibleModalBid}
             visibleModalViewAll={visibleModalViewAll}
             setVisibleModalViewAll={setVisibleModalViewAll}

             visibleModalAccept={visibleModalAccept} 
             setVisibleModalAccept={setVisibleModalAccept}

             visibleModalSale={visibleModalSale} 
             setVisibleModalSale={setVisibleModalSale}
             bid={bid}
             setBid={setBid}
             Approval={Approval}
             allowance={allowance}
             />:null
            }  
            
          </div>
        </div> 
      </div>
    </>
  );
};

export default Item;
