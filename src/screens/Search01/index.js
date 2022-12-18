import React, { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./Search01.module.sass";
import { Range, getTrackBackground } from "react-range";
import Icon from "../../components/Icon";
import Card from "../../components/Card";
import Dropdown from "../../components/Dropdown";
import { filterBids, filterByCountry, filterByPrice, sortBids, sortBidsAsc, sortBidsDes, sortByPrice } from "../../state/ui";
// data
//import { bids } from "../../mocks/bids";
import { Contract } from "ethers";
import { combinedCountries, MarketAbi, MarketAdd } from "../../config";
import { useWeb3React } from "@web3-react/core";
import Card2 from "../../components/Card2";
import { useDispatch, useSelector } from "react-redux";
import Card4 from "../../components/Card4";

const navLinks = ["All items", "Adventure","Airlines","Art","Cruise","Culture","Ecotourism","Gastronomy","Honeymoon","Hotels","Luxury","Photography","Safaris","Sports","Others"];

const dateOptions = ["Newest", "Oldest"];
const likesOptions = ["Most liked", "Least liked"];
const colorOptions = combinedCountries.map((v,e)=>v.country);
const creatorOptions = ["Verified only", "All", "Most liked"];


export const getContract = (library, account,add,abi) => {
	const signer = library?.getSigner(account).connectUnchecked();
	var contract = new Contract(add,abi, signer);
	return contract;
};



const Search = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [category, setCategory] = useState(navLinks[0]);
  const [date, setDate] = useState(dateOptions[0]);
  const [likes, setLikes] = useState(likesOptions[0]);
  const [color, setColor] = useState(colorOptions[0]);
  const [creator, setCreator] = useState(creatorOptions[0]);
  const { account,library,chainId } = useWeb3React();
  const [search, setSearch] = useState("");
 // const [bids, setAuctions] = useState("");
  const [values, setValues] = useState([0.0001]);
  const dispatch = useDispatch()
  const marketContract = getContract(library, account,MarketAdd,MarketAbi);

  // useEffect(()=>{
  //   const abc = async ()=>{
  //     if(account){
  //       const _auctions = await marketContract.getArray()
  //       setAuctions(_auctions)
  //     }
  
  
  //   }
  //   abc()
  // },[account])


  const bids2 = useSelector((state) => {
    return state.adoptReducer.sortedBids;
  });



   const bids = bids2 && bids2.filter(item=>item.title!=`Server error`) 


   const Sort = (num)=>{

    setDate(num)

    dispatch(sortBidsAsc({}))


}

const Filter = (num)=>{
  setCategory(num)
  dispatch(filterBids(navLinks.indexOf(num)))
}


const FilterbyCountry = (num)=>{
  setColor(num)
  dispatch(filterByCountry(combinedCountries[colorOptions.indexOf(num)].code))
}

const bids7 = useSelector((state) => {
  return state.adoptReducer.bids;
});

// const sortbyPrice = (num)=>{
// setPrice(num)
// dispatch(sortByPrice(num))
// }

const filterbyPrice = (num)=>{

dispatch(filterByPrice(num))
}





const reduxData = useSelector((state) => {

  return state.adoptReducer.data;
});






const getName = (add)=>{
//  console.log("addr step 1",add)
const tx1 = reduxData && reduxData.filter(item=>item[2]===add)
console.log("step 2 ",tx1[0][0])
//  return  {name:tx1[0][0],email:tx1[0][1],address:tx1[0][2],image:tx1[0][3]}
}



//console.log("array",bids)


  const handleSubmit = (e) => {
    alert();
  };

  const STEP = 0.0001;
  const MIN = 0.0001;
  const MAX = 0.0005;

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
                      {values[0].toFixed(0)}
                    </div>
                  </div>
                )}
              />
              <div className={styles.scale}>
              <div className={styles.number}>{MIN} TVL</div>
                <div className={styles.number}>{MAX} TVL</div>
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
                  setInd={()=>{}}
                />
              </div>
              <div className={styles.item}>
                <div className={styles.label}>Country</div>
                <Dropdown
                  className={styles.dropdown}
                  value={color}
                  setValue={FilterbyCountry}
                  options={colorOptions}
                  setInd={()=>{}}
                />
              </div>
              <div className={styles.item}>
                <div className={styles.label}>Creator</div>
                <Dropdown
                  className={styles.dropdown}
                  value={creator}
                  setValue={setCreator}
                  options={creatorOptions}
                  setInd={()=>{}}
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
                <Card4 className={styles.card} item={x} number={index} key={index}/>
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

export default Search;
