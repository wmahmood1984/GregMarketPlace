import React from "react";
import cn from "classnames";
import Slider from "react-slick";
import styles from "./HotBid.module.sass";
import Icon from "../Icon";
import Card from "../Card";

// data
import { bids } from "../../mocks/bids";
import { useSelector } from "react-redux";
import Card4 from "../Card4";

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const Hot3 = ({ classSection, title,code }) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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
    responsive: [
      {
        breakpoint: 1179,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          infinite: true,
        },
      },
    ],
  };

  // const bids2 = useSelector((state) => {
  //   return state.adoptReducer.moralisData;
  // });

  const bids2 = useSelector((state) => {
    return state.adoptReducer.bids;
  });

const bids3 = bids2 && bids2.filter(item=>item.title!=`Server error`)  

const bids4 = bids2 &&  [...bids3]

const refindArray = bids2 && bids4.sort((a, b) => a.highestBidder.length - b.highestBidder.length );

const bids5 = bids3 && refindArray.reverse()

const bids6 = bids2 && bids5.filter(item=> item.album.slice(0,4)===code)

const travelOffer = title == "Travel Offers" ? true : false

const bids = bids2 && travelOffer?  bids6.filter(item=>item.category_album_collectible[1]==1) : bids6.filter(item=>item.category_album_collectible[1]==0)
//console.log("refine in hot",bids)



  const reduxData = useSelector((state) => {

    return state.adoptReducer.data;
  });


const getName = (add)=>{
//  console.log("addr step 1",add)
  const tx1 = reduxData && reduxData.filter(item=>item[2]===add)
//  console.log("step 2 ",tx1[0][0])
  return  {name:tx1[0][0],email:tx1[0][1],address:tx1[0][2],image:tx1[0][3]}
}

  return (
    <div className={cn(classSection, styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrapper}>
          <h3 className={cn("h3", styles.title)}>{title}</h3>
          <div className={styles.inner}>
            <Slider className="bid-slider" {...settings}>
              {bids &&  bids.map((x, index) => (
                <Card4 key={index} className={styles.card} item={x} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hot3;
