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
import { formatUnits } from "ethers/lib/utils";
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

const Hero4 = ({ subtitle, title, link,code }) => {
  const [tokenId,setTokenId] = useState()
  const [tokenAdd,setTokenAdd] = useState()
  const {account} = useWeb3React()
  const dispatch = useDispatch()


  var toggle = false;
  const setToggle = (bool)=>{
    dispatch(getData({}))
  }
    
    
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

  const items2 = useSelector((state) => {
    return state.adoptReducer.bids;
  });

  const items3 = items2 && items2.filter(item=>item.title!=`Server error`)

  const items = items2 && items3.filter(item=> item.album===code)

//  console.log("item",items3[3].album,code)


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
        :  null}
        
        <Bid 
        tokenId={tokenId}
        AddressOfToken={tokenAdd}
        setVisibleModalBid={setVisibleModalBid}
        toggle={toggle}
        setToggle={setToggle}
        />
      </Modal>
    </>
  );
};

export default Hero4;
