import React, { useState } from "react";
import cn from "classnames";
import styles from "./Control.module.sass";
import Checkout from "./Checkout";
import Connect from "../../../components/Connect";
import Bid from "../../../components/Bid";
import Accept from "./Accept";
import PutSale from "./PutSale";
import SuccessfullyPurchased from "./SuccessfullyPurchased";
import Modal from "../../../components/Modal";
import { useWeb3React } from "@web3-react/core";
import { utils } from "ethers";
import Timer from "../../../Timer";
import Loader from "../../../components/Loader";

const Control = ({
  purchase,
  purchasing,
  setPurchasing,
  balance,price,
  setForSale, 
  className,
  highestBid,
  highestBidder,
  owner,
  tokenId,
  AddressOfToken,
  toggle,
  setToggle,
  commission,
  biArray,
  bidderArray,
  auctionEnd,
  cancelAuction,
  cancleAndSale,
  cancelDone,
  setcancelDone,
  cancelandSaleDone,
  setcancelAndSaleDone,
  visibleModalPurchase, setVisibleModalPurchase,
  visibleModalBid, setVisibleModalBid,
  visibleModalViewAll, setVisibleModalViewAll,
  visibleModalAccept, setVisibleModalAccept,
  visibleModalSale, setVisibleModalSale,
  open,highestBidderAV 
}) => {
  

  const {account} = useWeb3React()

  
console.log("bidder",highestBidder)
  const now = new Date().getTime()/1000




  return (
    <>
      <div className={cn(styles.control, className)}>
        <div className={styles.head}>
          <div className={styles.avatar}>
            <img src={highestBidderAV} alt="Avatar" />
          </div>
          <div className={styles.details}>
            <div className={styles.info}>
              Highest bid by <span>
                {highestBidder}
                {/* {highestBidder && `${highestBidder.slice(0,5)}...${highestBidder.slice(-4)}`} */}
                </span>
            </div>
            <div className={styles.cost}>
              <div className={styles.price}>{highestBid} BNB</div>
              <div className={styles.price}>${highestBid*200}</div>
            </div>
            <div className={styles.cost}>
                 
            </div>
            
          </div>
         
        </div>
        {owner!=account?
            <div className={styles.btns}>
            {setForSale?
          <button
          className={cn("button", styles.button)}
          onClick={() => setVisibleModalPurchase(true)}
        >
          Purchase now
        </button>:null  
          }
            
            <button
              className={cn(`${auctionEnd<now ? "button done":"button"}`, styles.button)}
              disabled={auctionEnd<now}
              onClick={() => setVisibleModalBid(true)}
            >
              Place a bid
            </button>
            </div>:

            <div className={styles.btns}>
            <button 
             onClick={() => setVisibleModalViewAll(true)}
            className={cn("button-stroke", styles.button)}>
              View all
            </button>
            <button
              className={cn(`${auctionEnd>now || highestBidder===undefined? "button done":"button"}`, styles.button)}
              disabled={auctionEnd>now || highestBidder===undefined}
              onClick={() => setVisibleModalAccept(true)}
            >
              {!highestBidder===undefined? "Accept" : "No Bids To Accept"}
            </button>
          </div>  
        }<br/>
        <Timer
              className={styles.price}
              start={auctionEnd}
              ></Timer>

        <div className={styles.text}>
          Service fee <span className={styles.percent}>{commission}%</span>{" "}
          <span>{highestBid * commission /100} BNB</span> <span>${highestBid * commission /100 *200}</span>
        </div>
        {
          owner==account ?
          <div className={styles.foot}>
            <div className={styles.btns}>
            <button
            className={cn(`${auctionEnd>now || !open? "button done":"button-stroke"}`, styles.button)}
            disabled={auctionEnd>now || !open}
              onClick={() => setVisibleModalSale(true)}
           >
            Cancel Auction & Put on sale
            </button>
            <button
            className={cn(`${cancelDone? "button loading": auctionEnd>now || !open? "button done": "button"}`, styles.button)}
            disabled={auctionEnd>now || !open}
            onClick={cancelAuction}
           >{cancelDone?  <Loader className={styles.loader} color="white" /> : "Cancel Auction"}

            </button>
            </div>
 
            <div className={styles.note}>
            Yo  u can sell this token on Virtual Travel MarketPlace
            </div>
          </div>
          :null
        }
        
        
      </div>
      <Modal
        visible={visibleModalPurchase}
        onClose={() => setVisibleModalPurchase(false)}
      >
        <Checkout 
        price={price}
        balance={balance}
        commission={commission}
        purchasing={purchasing}
        setPurchasing={setPurchasing}
        setVisibleModalPurchase={setVisibleModalPurchase}
        purchase={purchase}
        />
        <SuccessfullyPurchased />
      </Modal>
      <Modal
        visible={visibleModalBid}
        onClose={() => setVisibleModalBid(false)}
      >
        {!account? 
        <Connect/> 
        :  null}
        
        <Bid 
        tokenId={tokenId}
        AddressOfToken={AddressOfToken}
        setVisibleModalBid={setVisibleModalBid}
        toggle={toggle}
        setToggle={setToggle}
        />
      </Modal>
      <Modal
        visible={visibleModalAccept}
        onClose={() => setVisibleModalAccept(false)}
      >
        <Accept 
        tokenId={tokenId}        
        setVisibleModalAccept={setVisibleModalAccept} />
      </Modal>
      <Modal
        visible={visibleModalSale}
        onClose={() => setVisibleModalSale(false)}
      >
        <PutSale 
        setVisibleModalSale={setVisibleModalSale}
        cancelandSaleDone={cancelandSaleDone}
        setcancelAndSaleDone={setcancelAndSaleDone}
        cancleAndSale={cancleAndSale}
        />
      </Modal>
      <Modal
        visible={visibleModalViewAll}
        onClose={() => setVisibleModalViewAll(false)}
      >
        <div>
          {bidderArray &&  bidderArray.map((v,e)=><div>
            <div>
            <span>Bidder</span>
            <span>{`${v.slice(0,5)}...${v.slice(-4)}`}</span>
            </div>
            <div>
            <span>Bid amount</span>
            <span>{utils.formatEther(biArray[e])}</span>
            </div>
            
          </div>)}
        </div>
      </Modal>
    </>
  );
};

export default Control;
