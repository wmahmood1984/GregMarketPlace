import { client, MarketAbi, MarketAdd, q } from "../../config.js";
import {Contract, providers, utils} from "ethers"
import axios from "axios";
const { toChecksumAddress } = require('ethereum-checksum-address')
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const provider = new providers.Web3Provider(window.ethereum)


const marketContract = new Contract(MarketAdd,MarketAbi,provider);


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

      const tx1 = await marketContract.getArray()

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
              price: `$${(utils.formatEther(item.reserve) *ethprice).toFixed(3) }`,
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
export const { toggle, setTest,setBids } = adoptSlice.actions;
