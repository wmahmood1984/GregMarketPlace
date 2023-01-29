import React, { useState } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import styles from "./Hero.module.sass";
import Icon from "../../../components/Icon";
import Player from "../../../components/Player";
import Modal from "../../../components/Modal";
import Connect from "../../../components/Connect";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { getData } from "../../../state/ui";
import { useWeb3React } from "@web3-react/core";
import Bid from "../../../components/Bid";
import Component from "./Component";
import { Contract, utils } from "ethers";
import { ERC20, IERC20, MarketAdd } from "../../../config";
import { formatEther } from "ethers/lib/utils";
// import Bid from "../../../components/Bid";

// const items = [
//   {
//     title: "the creator network®",
//     creator: "Enrico Cole",
//     currency: "1.00 ETH",
//     price: "$3,618.36",
//     avatar: "/images/content/avatar-creator.jpg",
//     image: "/images/content/video-preview.jpg",
//     image2x: "/images/content/video-preview@2x.jpg",
//   },
//   {
//     title: "Marco carrillo®",
//     creator: "Enrico Cole",
//     currency: "2.00 ETH",
//     price: "$2,477.92",
//     avatar: "/images/content/avatar-creator.jpg",
//     image: "/images/content/video-preview.jpg",
//     image2x: "/images/content/video-preview@2x.jpg",
//   },
//   {
//     title: "the creator network®",
//     creator: "Enrico Cole",
//     currency: "1.00 ETH",
//     price: "$3,618.36",
//     avatar: "/images/content/avatar-creator.jpg",
//     image: "/images/content/video-preview.jpg",
//     image2x: "/images/content/video-preview@2x.jpg",
//   },
//   {
//     title: "Marco carrillo®",
//     creator: "Enrico Cole",
//     currency: "2.00 ETH",
//     price: "$2,477.92",
//     avatar: "/images/content/avatar-creator.jpg",
//     image: "/images/content/video-preview.jpg",
//     image2x: "/images/content/video-preview@2x.jpg",
//   },
// ];

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);


export const getContract = (library, account,add,abi) => {
	const signer = library?.getSigner(account).connectUnchecked();
	var contract = new Contract(add,abi, signer);
	return contract;
};

const Hero = ({ subtitle, title, link }) => {
  const [tokenId,setTokenId] = useState()
  const [tokenAdd,setTokenAdd] = useState()
  const [allowance,setAllowance] = useState()
  const [bid,setBid] = useState()
  const {account,library} = useWeb3React()
  const dispatch = useDispatch()
  const [toggle,setToggle] = useState()

  const TVLContract = getContract(library,account, ERC20,IERC20)


 

  useEffect(()=>{
    const abc = async ()=>{
      const _all = await TVLContract.allowance(account,MarketAdd)
      setAllowance(formatEther(_all))
    }
    abc()
  },[toggle])
    
    
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: (
      <SlickArrow>
        <Icon name="arrow-next" size="14" />
      </SlickArrow>
    ),
    prevArrow: (
      <SlickArrow>
        <Icon name="arrow-prev" size="14" />
      </SlickArrow>
    ),
  };

  const [visibleModalBid, setVisibleModalBid] = useState(false);

  const data = useSelector((state) => {
    return state.adoptReducer.data;
  })  ;

  const items = useSelector((state) => {
    return state.adoptReducer.moralisData;
  });

//  const items = items2 && items2.filter(item=>item.title!=`Server error`)






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
          <div className={styles.head}>
            <div className={styles.stage}>
              {subtitle}
            </div>
            <h2 className={cn("h3", styles.title)}>
              {title}
            </h2>
            {
              link ? (<Link className={cn("button-stroke", styles.button)} to="/search01">
                Start your search
              </Link>) : null
            }

          </div>
          <div className={styles.wrapper}>
            <Slider className="creative-slider" {...settings}>
              {items &&  items.map((x, index) => {
                  
              return (
                <div className={styles.slide} key={index}>
                  <div className={styles.row}>
                    <Player className={styles.player} item={x} />
                    <Component 
                    setTokenId={setTokenId}
                    setTokenAdd={setTokenAdd}
                    setVisibleModalBid={setVisibleModalBid}
                    item={x}/>
                  </div>
                </div>
              )
              
                  }
              
              )}
            </Slider>
          </div>
        </div>
      </div>
      <Modal
        visible={visibleModalBid}
        onClose={() => setVisibleModalBid(false)}
      >
         {!account? 
        <Connect/> 
        :  <Bid 
        tokenId={tokenId}
        AddressOfToken={tokenAdd}
        setVisibleModalBid={setVisibleModalBid}
        toggle={toggle}
        setToggle={setToggle}
        setBid={setBid}
        bid={bid}
        Approval={Approval}
        allowance={allowance}
        />}
        
        
      </Modal>
    </>
  );
};

export default Hero;
