import { client, MarketAbi, MarketAdd, network, networkhex, q } from "../../config.js";
import {Contract, ethers, providers, utils} from "ethers"
import axios from "axios";
import { formatEther, formatUnits } from "ethers/lib/utils.js";
import Web3 from "web3"
const { toChecksumAddress } = require('ethereum-checksum-address')
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const web3 = new Web3(Web3.givenProvider)

const provider = new providers.Web3Provider(window.ethereum)


const marketContract = new Contract(MarketAdd,MarketAbi,provider);
const marketContract2 = new web3.eth.Contract(MarketAbi,MarketAdd)


export const dataBase = createAsyncThunk(
  "dataBase",
  async ({  }) => {
    try {

      const tx1 = await client.query(
    
        q.Paginate(
        q.Match(q.Index('Address3'))
        ))        
        
   
          
      return { data:tx1.data };
    } catch (error) {
      console.log("Error in ArrayThunk", error);
    }
  }
);



export const getData = createAsyncThunk(
  "getData",
  async (a, thunkApi) => {

    try {
      // console.log("condition met1",window.ethereum.networkVersion===network)
      // console.log("condition met2",window)
      // console.log("condition met3",window.ethereum)
      // console.log("condition met4",window.ethereum.networkVersion)
      // if(window.ethereum.networkVersion===network){

        const tx1 = await marketContract2.methods.getArray().call()
        console.log("get Data ran",tx1)
        const tx2 = await client.query(
      
          q.Paginate(
          q.Match(q.Index('Address3'))
          )) 
        
  
        const functionX = async (v,e)=>{
          setTimeout(() => {
            thunkApi.dispatch(
              getMoralis({
                
                item: v,
                data:tx2.data
              })
            );
            
  
          }, e*1200);
        }
  
  
        tx1 && tx1.map((v,e)=>{
          functionX(v,e)
        })
        return {tx1}
  

      // }else {

        try {
          window.ethereum.request({
           method: 'wallet_switchEthereumChain',
           params: [{ chainId: networkhex }]
         });
       } catch (err) {
        console.log(err)
 //          This error code indicates that the chain has not been added to MetaMask
         if (err.code === 4902) {
           window.ethereum.request({
             method: 'wallet_addEthereumChain',
             params: [
               {
                 chainName: 'BSC Mainnet',
                 chainId: networkhex,
                 nativeCurrency: { name: 'TBNB', decimals: 18, symbol: 'BNB' },
                 rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545']
               }
             ]
           });
           window.alert("This chain is not configured in your metamask"
           // ,{
           //   type: "failure",
           //   position: toast.POSITION.BOTTOM_CENTER,
           //   closeOnClick: true,
           //   }
             )
         }
       }
        return {tx1:null}
//      }


    } catch (error) {
      console.log("Error in ArrayThunk", error);
    }
  }
);



export const getMoralis = createAsyncThunk(
  "getMoralis",
  async ({ item,data }) => {
    
    const getName = (add)=>{

      const tx1 = data.filter(item=> toChecksumAddress(item[2])===toChecksumAddress(add))

      return  {name:tx1[0][0],email:tx1[0][1],address:tx1[0][2],image:tx1[0][3]}
    }
    try {

 
          const _data = await axios.get(
            `https://deep-index.moralis.io/api/v2/nft/${item.tokenAdd}/${utils.formatUnits(item.tokenId,0)}?chain=bsc%20testnet&format=decimal&normalizeMetadata=true`,
            {headers:{'X-API-Key': 'SXF7SQmSpjNYErW3zHBorgED0PGPVaiH9VlhXol46NY02JNL315MxMdx0CFTglxR', 
            'accept': 'application/json'}}
            )

            const eth = await axios.get(
              "https://api.coingecko.com/api/v3/coins/binancecoin/market_chart?vs_currency=usd&days=7"
            )

//            console.log("etjh",eth.data.prices[eth.data.prices.length-1][1])
            const ethprice = eth.data.prices[eth.data.prices.length-1][1]


            return  {
              title: `${_data.data.normalized_metadata.name===null? "not found" : _data.data.normalized_metadata.name}`,
              address: item.beneficiary,
              creator: `${getName(item.beneficiary).name}`,
              currency: `${utils.formatEther(item.reserve)} BNB` ,
              price: `$${(utils.formatEther(item.reserve) *ethprice).toFixed(0) }`,
              avatar: `${getName(item.beneficiary).image }`,
              image: `${_data.data.normalized_metadata.image===null? "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png" : _data.data.normalized_metadata.image}`,
              image2x: `${_data.data.normalized_metadata.image===null? "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png" : _data.data.normalized_metadata.image}`,
              auctionEnd : utils.formatUnits(item.auctionEnd,0),
              index:utils.formatUnits(item.index,0),
              tokenId:utils.formatUnits(item.tokenId,0)
              ,tokenAdd: item.tokenAdd
              ,highestBid:item.highestBid
              ,highestBidder:item.highestBidder
            }
  
      }
       catch (error) {
      console.log("Error in ArrayThunk", error);
      return  {
        title: `Server error`,
        creator: `Server error`,
        currency: `Server error` ,
        price: `Server error`,
        avatar: `Server error`,
        image: `Server error`,
        image2x: `Server error`,
        auctionEnd : `Server error`,
        index:`Server error`,
        tokenId:`Server error`
        ,tokenAdd: `Server error`
      }
    }
  }
);





export const Buy = createAsyncThunk(
  "Buy",
  async ({ quantity, value, usdCon }) => {
    try {
      // var LQuantity = web3.utils.toWei(quantity.toString(), "ether");
      // var lValue = web3.utils.toWei(value.toString(), "ether");
      // const result = await LoanContract.methods
      //   .buyTFT(LQuantity, usdCon)
      //   .send({ from: address, value: lValue });
    } catch (error) {
      console.log("Error in Buy Function", error);
    }
  }
);





const adoptSlice = createSlice({
  name: "AdopSlice",
  initialState: {
    web3: null,
    ethBalance: null,
    data:null,
    bids:null,
    sortedBids:[],
    moralisData:[
      // {
      //   title: "the creator network®",
      //   creator: "Enrico Cole",
      //   currency: "1.00 ETH",
      //   price: "$3,618.36",
      //   avatar: "/images/content/avatar-creator.jpg",
      //   image: "/images/content/video-preview.jpg",
      //   image2x: "/images/content/video-preview@2x.jpg",
      // }
    ],
    highestBid : [],
    highestBidder : [],


  },
  reducers: {
    toggle: (state, actions) => {
      state.toggle = !state.toggle;
    },
    setAccount: (state, actions) => {
      state.address = actions.payload;
    },
    setBids: (state, actions) => {

      state.bids = actions.payload._auctions;
    },
    sortBidsAsc: (state,actions) =>{
      
      state.sortedBids = state.sortedBids.reverse()
           
       ;
    },
    filterBids: (state,actions) =>{
//      console.log("sort bids called",actions.payload)
      if(actions.payload===0){
        state.sortedBids = state.bids
      } else {
        state.sortedBids = state.bids.filter(item=> Number(formatUnits(item.category,0))===actions.payload-1);
      }

    },

    sortByPrice: (state,actions) =>{

      const asc = state.bids.sort((a,b)=>(Number(formatEther(a.reserve)) - Number(formatEther(b.reserve))) )
      

      if(actions.payload==="Highest price"){
        state.sortedBids = asc.reverse()
      }else{
        state.sortedBids = asc
      }


    },
    filterByPrice: (state,actions) =>{
//      console.log("sort bids called",actions.payload)
      state.sortedBids = state.bids.filter(item=> Number(formatEther(item.reserve))<=Number(actions.payload[0]));


    },
    filterByCountry: (state,actions) =>{
 //     console.log("sort bids called",actions.payload)
      state.sortedBids = state.bids.filter(item=> item.album===actions.payload)}
  },
  extraReducers: {
    [dataBase.pending]: (state, action) => {
      state.toggle = !state.toggle;
    },
    [dataBase.fulfilled]: (state, action) => {
      state.data = action.payload.data;
    },




    [Buy.pending]: (state, action) => {
      state.toggle = !state.toggle;
      state.error = null;
    },
    [Buy.fulfilled]: (state, action) => {
      state.toggle = !state.toggle;
      state.error = action.payload;
    },


    [getData.pending]: (state, action) => {
      state.toggle = !state.toggle;
      state.error = null;
    },
    [getData.fulfilled]: (state, action) => {
      state.toggle = !state.toggle;
   //   console.log("tx1",action.payload)
      state.bids = action.payload.tx1;
      state.sortedBids = action.payload.tx1;
    },


    [getMoralis.pending]: (state, action) => {
      state.toggle = !state.toggle;
      state.error = null;
    },
    [getMoralis.fulfilled]: (state, action) => {
      state.toggle = !state.toggle;

      state.moralisData.push(action.payload);

      state.highestBid.push(action.payload.highestBid);
      state.highestBidder.push(action.payload.highestBidder);
    },




    //
  },
});

export const adopreducer = adoptSlice.reducer;
export const { toggle, setTest,setBids,sortBidsAsc,filterBids,sortByPrice,filterByPrice,filterByCountry } = adoptSlice.actions;
