import React from "react";
import cn from "classnames";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import styles from "./Collections.module.sass";
import Icon from "../../../components/Icon";
import { useSelector } from "react-redux";
import { useState } from "react";
import { faTemperatureArrowDown } from "@fortawesome/free-solid-svg-icons";
import Component from "./Component";
import { LowerCase } from "faunadb";

// const items = [
//   {
//     title: "Awesome collection",
//     author: "Kennith Olson",
//     counter: "28",
//     avatar: "/images/content/avatar-1.jpg",
//     gallery: [
//       "/images/content/photo-1.1.jpg",
//       "/images/content/photo-1.2.jpg",
//       "/images/content/photo-1.3.jpg",
//       "/images/content/photo-1.4.jpg",
//     ],
//   },
//   {
//     title: "Awesome collection",
//     author: "Willie Barton",
//     counter: "28",
//     avatar: "/images/content/avatar-3.jpg",
//     gallery: [
//       "/images/content/photo-2.1.jpg",
//       "/images/content/photo-2.2.jpg",
//       "/images/content/photo-2.3.jpg",
//       "/images/content/photo-2.4.jpg",
//     ],
//   },
//   {
//     title: "Awesome collection",
//     author: "Halle Jakubowski",
//     counter: "28",
//     avatar: "/images/content/avatar-4.jpg",
//     gallery: [
//       "/images/content/photo-3.1.jpg",
//       "/images/content/photo-3.2.jpg",
//       "/images/content/photo-3.3.jpg",
//       "/images/content/photo-3.4.jpg",
//     ],
//   },
// ];

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const Collections = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
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
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };


  const bids = useSelector((state) => {
    return state.adoptReducer.moralisData;
  });



//  const bids = bids2 && bids2.filter(item=>item.title!=`Server error`)


var myArray = [[],[],[],[],[],[]]
 

const territories = {"00":"Africa","01":"Americas","02":"Antarctica","03":"Asia","04":"Europe","05":"Oceania"}
const territories2 = {"00":"africa","01":"americas","02":"antarctica","03":"asia","04":"europe","05":"oceania"}
const temArray = []
// bids2 && bids.map((v,e)=>{
//       const ind = temArray.indexOf(v.album.slice(0,2))

//       if(ind===-1){
//         console.log("labhya",ind)
//         myArray[e]=v
//         temArray[e]=v.album.slice(0,2)     
//       }else{
//         console.log("one",myArray.slice(0,ind))
//         console.log("two",myArray[ind])
//         console.log("three",[...myArray[ind],v])

//         myArray = [...myArray.slice(0,ind),[...myArray[ind],v],...myArray.slice(ind)]
//       }
//  })

bids && bids.map((v,e)=>{
    if(v.album.slice(0,2)=="00"){
      myArray[0].push(v)
    }else if(v.album.slice(0,2)=="01"){
      myArray[1].push(v)
    }else if(v.album.slice(0,2)=="02"){
      myArray[2].push(v)
    }else if(v.album.slice(0,2)=="03"){
      myArray[3].push(v)
    }else if(v.album.slice(0,2)=="04"){
      myArray[4].push(v)
    }else if(v.album.slice(0,2)=="05"){
      myArray[5].push(v)
    }
})



//bids2 &&   console.log("myarray",myArray)

  return (
    <div className={cn("section-bg", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrapper}>
          <h3 className={cn("h3", styles.title)}>Hot collections</h3>
          <div className={styles.inner}>
            <Slider className="collection-slider" {...settings}>
              {bids && myArray.map((x, index) => 
              { if(x.length>0){
                return (
                  <Link className={styles.item} to={{pathname: `/region/${(territories2[`0${index}`])}` , state : x[0].album.slice(0,2) } } key={index}>
                      <div className={styles.gallery}>
                        {x.map((i, index) => index < 4 && (
                          <Component item={i} key={index}/>
                          ))}
                      </div>
                    <div className={styles.subtitle}>{`${territories[`0${index}`]}`}</div>
                  
                  </Link>
                )
              }

              }
)}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;




//<div className={styles.line}>
//<div className={styles.user}>
//  <div className={styles.avatar}>
//    {/* <img src={x.avatar} alt="Avatar" /> */}
//  </div>
//  <div className={styles.author}>
//    {/* By <span>{x.author}</span> */}
//  </div>
//</div>
//<div className={cn("status-stroke-black", styles.counter)}>
//  {/* <span>{x.counter}</span> items */}
//</div>
//</div>