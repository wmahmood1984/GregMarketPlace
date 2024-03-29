import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Selection.module.sass";
import Icon from "../../../components/Icon";
import { useEffect } from "react";
import { Contract } from "ethers";
import { useWeb3React } from "@web3-react/core";
import { MarketAbi, MarketAdd } from "../../../config";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBids } from "../../../state/ui";
import { formatEther } from "ethers/lib/utils";
import { toChecksumAddress } from "ethereum-checksum-address";

// const items = [
//   {
//     title: "The future of ETH®",
//     content: "Highest bid",
//     counter: "18 in stock",
//     price: "1.125 ETH",
//     url: "/item",
//     avatar: "/images/content/avatar-1.jpg",
//     image: "/images/content/selection-pic-1.jpg",
//     image2x: "/images/content/selection-pic-1@2x.jpg",
//   },
//   {
//     title: "ETH never die",
//     content: "1 of 12",
//     price: "0.27 ETH",
//     url: "/item",
//     avatar: "/images/content/avatar-4.jpg",
//     image: "/images/content/selection-pic-2.jpg",
//     image2x: "/images/content/selection-pic-2@2x.jpg",
//   },
//   {
//     title: "Future coming soon",
//     content: "1 of 3",
//     price: "0.27 ETH",
//     url: "/item",
//     avatar: "/images/content/avatar-3.jpg",
//     image: "/images/content/selection-pic-1.jpg",
//     image2x: "/images/content/selection-pic-1@2x.jpg",
//   },
//   {
//     title: "Elon Musk silver coin 3d print",
//     content: "1 of 4",
//     price: "0.27 ETH",
//     url: "/item",
//     avatar: "/images/content/avatar-4.jpg",
//     image: "/images/content/selection-pic-3.jpg",
//     image2x: "/images/content/selection-pic-3@2x.jpg",
//   },
// ];

const users = [
  {
    name: "Payton Harris",
    price: "<span>2.456</span> ETH",
    counter: "6",
    avatar: "/images/content/avatar-1.jpg",
  },
  {
    name: "Anita Bins",
    price: "<span>2.456</span> ETH",
    counter: "2",
    avatar: "/images/content/avatar-2.jpg",
  },
  {
    name: "Joana Wuckert",
    price: "<span>2.456</span> ETH",
    counter: "3",
    avatar: "/images/content/avatar-3.jpg",
  },
  {
    name: "Lorena Ledner",
    price: "<span>2.456</span> ETH",
    counter: "4",
    avatar: "/images/content/avatar-4.jpg",
  },
];




const Selection = () => {

  const items = useSelector((state) => {
    return state.adoptReducer.moralisData;
  });

//  const items = items2 && items2.filter(item=>item.title!=`Server error`)


  const items4 = items && items.slice(1,4)

  const data = useSelector((state) => {
    return state.adoptReducer.data;
  });

  const getName = (add)=>{

    const tx1 = data.filter(item=> toChecksumAddress(item[2])===toChecksumAddress(add))
  //      console.log("getName",tx1)  
    return  {name:tx1[0][0],email:tx1[0][1],address:tx1[0][2],image:tx1[0][3]}
  }



// console.log("items",items)
  return (data && 
    <div className={cn("section-pb", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.row}>
          <div className={styles.col}>
            {items && items.map(
              (x, index) =>
                index === 0 && (
                  <Link className={styles.card} to={`/item/${x.index}`} key={index}>
                    <div className={styles.preview}>
                      <img
                        srcSet={`${x.uri[1]} 2x`}
                        src={x.uri[1]}
                        alt="Selection"
                      />
                    </div>
                    <div className={styles.head}>
                      <div className={styles.line}>
                        <div className={styles.avatar}>
                          <img src={getName(x.beneficiary).image} alt="Avatar" />
                        </div>
                        <div className={styles.description}>
                          <div className={styles.title}>{x.uri[2]}</div>
                          <div className={styles.counter}>{x.tokenId}</div>
                        </div>
                      </div>
                      <div className={styles.box}>
                        <div className={styles.content}>{x.category_album_collectible[3]?x.category_album_collectible[3]:1} in stock</div>
                        <div className={styles.price}>{formatEther(x.reserve)}{" "}TVL {" "} / <span>{formatEther(x.reserve)}{" "}BUSD</span></div>
                      </div>
                    </div>
                  </Link>
                )
            )}
          </div>
          <div className={styles.col}>
            {items && items.map(
              (x, index) =>
                index > 0 && index < 4 && (
                  <Link className={styles.item} to={`/item/${x.index}`} key={index}>
                    <div className={styles.preview}>
                      <img
                        srcSet={`${x.uri[1]} 2x`}
                        src={x.uri[1]}
                        alt="Selection"
                      />
                    </div>
                    <div className={styles.description}>
                      <div className={styles.title}>{x.uri[2]}</div>
                      <div className={styles.line}>
                        <div className={styles.avatar}>
                          <img src={getName(x.beneficiary).image} alt="Avatar" />
                        </div>
                        <div className={styles.price}>{formatEther(x.reserve)}{" "}TVL {" "} / <span>{formatEther(x.reserve)}{" "}BUSD</span></div>
                        <div className={styles.content}>{x.category_album_collectible[3]?x.category_album_collectible[3]:1} in stock</div>
                      </div>
                      <button
                        className={cn(
                          "button-stroke button-small",
                          styles.button
                        )}
                      >
                        Place a bid
                      </button>
                    </div>
                  </Link>
                )
            )}
          </div>
        </div>
        <div className={styles.sidebar}>
          <div className={styles.info}>
            Latest upload from creators{" "}
            <span className={styles.smile} role="img" aria-label="fire">
              🔥
            </span>
          </div>
          {/* <div className={styles.list}>
            {users.map((x, index) => (
              <div className={styles.user} key={index}>
                <div className={styles.avatar}>
                  <img src={x.avatar} alt="Avatar" />
                  <div className={styles.number}>{x.counter}</div>
                </div>
                <div className={styles.description}>
                  <div className={styles.name}>{x.name}</div>
                  <div
                    className={styles.money}
                    dangerouslySetInnerHTML={{ __html: x.price }}
                  />
                </div>
              </div>
            ))}
          </div> */}
          <Link
            className={cn("button-stroke button-small", styles.button)}
            to="/search01"
          >
            <span>Discover more</span>
            <Icon name="arrow-next" size="10" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Selection;
