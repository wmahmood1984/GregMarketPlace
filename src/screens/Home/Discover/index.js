import React, { useState } from "react";
import cn from "classnames";
import styles from "./Discover.module.sass";
import { Range, getTrackBackground } from "react-range";
import Slider from "react-slick";
import Icon from "../../../components/Icon";
import Card from "../../../components/Card";
import Dropdown from "../../../components/Dropdown";

// data
// import { bids } from "../../../mocks/bids";
import { useDispatch, useSelector } from "react-redux";
import Card4 from "../../../components/Card4";
import { filterBids, filterByPrice, sortBids, sortBidsAsc, sortBidsDes, sortByPrice } from "../../../state/ui";
import { formatEther, formatUnits } from "ethers/lib/utils";

const navLinks = ["All items", "Adventure","Airlines","Art","Cruise","Culture","Ecotourism","Gastronomy","Honeymoon","Hotels","Luxury","Photography","Safaris","Sports","Others"];

const dateOptions = ["Recently added", "Long added"];
const priceOptions = ["Highest price", "The lowest price"];
const likesOptions = ["Most liked", "Least liked"];
const creatorOptions = ["Verified only", "All", "Most liked"];
const sortingOptions = [];
navLinks.map((x) => sortingOptions.push(x));

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const Discover = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [date, setDate] = useState(dateOptions[0]);
  const [category, setCategory] = useState(navLinks[0]);
  const [price, setPrice] = useState(priceOptions[0]);
  const [likes, setLikes] = useState(likesOptions[0]);
  const [creator, setCreator] = useState(creatorOptions[0]);
  const [sorting, setSorting] = useState(sortingOptions[0]);
  const dispatch = useDispatch()
  const [values, setValues] = useState([1]);

  const [visible, setVisible] = useState(false);



  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
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
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 100000,
        settings: "unslick",
      },
    ],
  };


  
  const bids = useSelector((state) => {
    return state.adoptReducer.sortedBids;
  });

  const moralis = useSelector((state) => {
    return state.adoptReducer.moralisData;
  });

function Max (arr){
    var max = 0
    var index = 0
    for(var i in arr){
        if(arr[i]>max){
            max = arr[i]
            index = i;
        }
    }

    return max
}

 //  const bids = bids2 && bids2.filter(item=>item.title!=`Server error`)
   
   const highestAmount = bids && Max(bids.map((v,e)=>Number(formatEther(v.reserve)) ))

   const STEP = 1;
   const MIN = 0;
   const MAX = bids ?  highestAmount : 18;
  // const bids4 = [...bids3]

  console.log("bids in dics",highestAmount)

  const Sort = (num)=>{

      setDate(num)

      dispatch(sortBidsAsc({}))
 

  }

  const Filter = (num)=>{
    setCategory(num)
    dispatch(filterBids({num:navLinks.indexOf(num),data:moralis}))
  }

  const bids7 = useSelector((state) => {
    return state.adoptReducer.bids;
  });

const sortbyPrice = (num)=>{
  setPrice(num)
  dispatch(sortByPrice(num))
}

const filterbyPrice = (num)=>{

  dispatch(filterByPrice(num))
}





  const reduxData = useSelector((state) => {

    return state.adoptReducer.data;
  });






const getName = (add)=>{
//  console.log("addr step 1",add)
  const tx1 = reduxData && reduxData.filter(item=>item[2]===add)
 // console.log("step 2 ",tx1[0][0])
//  return  {name:tx1[0][0],email:tx1[0][1],address:tx1[0][2],image:tx1[0][3]}
}

console.log("bids",bids)

  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <h3 className={cn("h3", styles.title)}>Discover</h3>
        <div className={styles.top}>
          <div className={styles.dropdown}>
            <Dropdown
              className={styles.dropdown}
              value={date}
              setValue={Sort}
              options={dateOptions}
              setInd={()=>{}}
            />
          </div>
          {/* <div className={styles.nav}>
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
          </div> */}
          <div className={styles.dropdown}>
            <Dropdown
              className={styles.dropdown}
              value={category}
              setValue={Filter}
              options={navLinks}
              setInd={()=>{}}
            />
          </div>
          <div className={cn("tablet-show", styles.dropdown)}>
            <Dropdown
              className={styles.dropdown}
              value={sorting}
              setValue={setSorting}
              options={sortingOptions}
              setInd={()=>{}}
            />
          </div>
          <button
            className={cn(styles.filter, { [styles.active]: visible })}
            onClick={() => setVisible(!visible)}
          >
            <div className={styles.text}>Filter</div>
            <div className={styles.toggle}>
              <Icon name="filter" size="18" />
              <Icon name="close" size="10" />
            </div>
          </button>
        </div>
        <div className={cn(styles.filters, { [styles.active]: visible })}>
          <div className={styles.sorting}>
            <div className={styles.cell}>
              <div className={styles.label}>Price</div>
              <Dropdown
                className={styles.dropdown}
                value={price}
                setValue={sortbyPrice}
//                setValue={setPrice}
                options={priceOptions}
                setInd={()=>{}}
              />
            </div>
            {/* <div className={styles.cell}>
              <div className={styles.label}>likes</div>
              <Dropdown
                className={styles.dropdown}
                value={likes}
                setValue={setLikes}
                options={likesOptions}
              />
            </div> */}
            <div className={styles.cell}>
              <div className={styles.label}>creator</div>
              <Dropdown
                className={styles.dropdown}
                value={creator}
                setValue={setCreator}
                options={creatorOptions}
                setInd={()=>{}}
              />
            </div>
            <div className={styles.cell}>
              <div className={styles.label}>Price range</div>
              {/* <Range
                values={values}
                step={STEP}
                min={MIN}
                max={MAX}
                onChange={(values) => 
                  {setValues(values)
                   filterbyPrice(values)
                  
                  }
                }
                renderTrack={({ props, children }) => (
                  <div
                    onMouseDown={props.onMouseDown}
                    onTouchStart={props.onTouchStart}
                    style={{
                      ...props.style,
                      height: "27px",
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
                      {values[0].toFixed(0)}
                    </div>
                  </div>
                )}
              /> */}
              <div className={styles.scale}>
                <div className={styles.number}>{MIN} TVL</div>
                <div className={styles.number}>{MAX} TVL</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.list}>
          <Slider
            className={cn("discover-slider", styles.slider)}
            {...settings}
          >
            {bids && bids.map((x, index) => 
           { 
          
          return(
              
            <Card4 className={styles.card} item={x} key={index} />
          ) 
        }
           )}
          </Slider>
        </div>
        <div className={styles.btns}>
          <button className={cn("button-stroke button-small", styles.button)}>
            <span>Load more</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Discover;
