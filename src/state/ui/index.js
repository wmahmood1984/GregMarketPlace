import { client, MarketAbi, MarketAdd, network, networkhex, q } from "../../config.js";
import {Contract, ethers, providers, utils} from "ethers"
import axios from "axios";
import { formatEther, formatUnits } from "ethers/lib/utils.js";
import Web3 from "web3"
const { toChecksumAddress } = require('ethereum-checksum-address')
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

//const web3 = new Web3(new Web3.providers.HttpProvider("https://data-seed-prebsc-1-s1.binance.org:8545"))
const web3 = new Web3(Web3.givenProvider)





const marketContract2 = new web3.eth.Contract(MarketAbi,MarketAdd)


export const dataBase = createAsyncThunk(
  "dataBase",
  async ({  }) => {
    try {

      const tx1 = await client.query(
    
        q.Paginate(
        q.Match(q.Index('Address5'))
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

        // const tx2 = await client.query(
      
        //   q.Paginate(
        //   q.Match(q.Index('Address5'))
        //   )) 
       console.log("tx1",tx1)
      //  console.log("tx2",tx2)        
  
        // const functionX = async (v,e)=>{
        //   setTimeout(() => {
        //     thunkApi.dispatch(
        //       getMoralis({
                
        //         item: v,
        //         data:tx2.data
        //       })
        //     );
            
  
        //   }, 200);
        // }
  
  
        // tx1 && tx1.map((v,e)=>{
        //   functionX(v,e)
        // })
        return {tx1}
  



   




    } catch (error) {
      console.log("Error in get Data", error);
    }
  }
);



export const getMoralis = createAsyncThunk(
  "getMoralis",
  async ({ item,data }) => {
    
    const getName = (add)=>{

      const tx1 = data.filter(item=> toChecksumAddress(item[2])===toChecksumAddress(add))
//      console.log("getName",tx1)  
      return  {name:tx1[0][0],email:tx1[0][1],address:tx1[0][2],image:tx1[0][3]}
    }
    try {

 
          // const _data = await axios.get(
          //   `https://deep-index.moralis.io/api/v2/nft/${item.tokenAdd}/${utils.formatUnits(item.tokenId,0)}?chain=bsc%20testnet&format=decimal&normalizeMetadata=true`,
          //   {headers:{'X-API-Key': 'SXF7SQmSpjNYErW3zHBorgED0PGPVaiH9VlhXol46NY02JNL315MxMdx0CFTglxR', 
          //   'accept': 'application/json'}}
          //   )



            console.log("redux",item)



            return  {
              title: `${item[14][2]===null? "not found" : item[14][2]}`,
              address: item.beneficiary,
              creator: `${getName(item.beneficiary).name}`,
              currency: `${Number(utils.formatEther(item.reserve)).toFixed(0)} TVL` ,
              price: `${Number(utils.formatEther(item.reserve)).toFixed(0) }`,
              priceA: Number(utils.formatEther(item.reserve)).toFixed(0),
              avatar: `${getName(item.beneficiary).image }`,
              image: `${item[14][1]===null? "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png" : Number(item.category_album_collectible[2])==1? `${item[14][1]}?stream=true`:`${item[14][1]}`}`,
              image2x: `${item[14][1]===null? "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png" : Number(item.category_album_collectible[2])==1? `${item[14][1]}?stream=true`:`${item[14][1]}`}`,
              auctionEnd : utils.formatUnits(item.auctionEnd,0),
              index:utils.formatUnits(item.index,0),
              tokenId:utils.formatUnits(item.tokenId,0)
              ,catetory : formatUnits(item.category_album_collectible[0],0)
              ,tokenAdd: item.tokenAdd
              ,highestBid:item.highestBid
              ,highestBidder:item.highestBidder
              ,album:item.album
              ,playAble:Number(item.category_album_collectible[2])==1?true:false
              ,travelOffer:Number(item.category_album_collectible[1])==1?true:false
              ,amount:10
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


const initData =       [    {tokenId:"57",
tokenAdd:"0x87abD078e4d05d2D0179B41Bb14fE49f41910E91",
beneficiary: "0xfef5f69FA76f35638Aa3ed77a0644Fa79d31A554",
auctionEnd:"1675073040",highestBidder:[],highestBid:[],open:true,
reserve:"1000000000000000000",index:0,
soldTo:"0x0000000000000000000000000000000000000000",soldFor:0,UpForSale:false,
royaltyHolder: "0xfef5f69FA76f35638Aa3ed77a0644Fa79d31A554",
category_album_collectible:[0,1,0]
,uri:["Kulfi delicious","https://gateway.pinata.cloud/ipfs/QmRpuWFLpjcp77fSqfxeZtG29RmrBeiwRMZrQCc4x6a1yC","Kulfi"]
,album:"000101"
},
{tokenId:"59",
tokenAdd:"0x87abD078e4d05d2D0179B41Bb14fE49f41910E91",
beneficiary: "0xfef5f69FA76f35638Aa3ed77a0644Fa79d31A554",
auctionEnd:"1675073040",highestBidder:[],highestBid:[],open:true,
reserve:"1000000000000000000",index:0,
soldTo:"0x0000000000000000000000000000000000000000",soldFor:0,UpForSale:false,
royaltyHolder: "0xfef5f69FA76f35638Aa3ed77a0644Fa79d31A554",
category_album_collectible:[0,1,0]
,uri:["Jin Description",    "https://gateway.pinata.cloud/ipfs/QmTmjVwe1xqctRYQBSK37zRY3WSAffKYsTYMeo6qdjYJUt","Jin"]
,album:"010101"
},   {tokenId:"61",
tokenAdd:"0x87abD078e4d05d2D0179B41Bb14fE49f41910E91",
beneficiary: "0xfef5f69FA76f35638Aa3ed77a0644Fa79d31A554",
auctionEnd:"1675073040",highestBidder:[],highestBid:[],open:true,
reserve:"1000000000000000000",index:0,
soldTo:"0x0000000000000000000000000000000000000000",soldFor:0,UpForSale:false,
royaltyHolder: "0xfef5f69FA76f35638Aa3ed77a0644Fa79d31A554",
category_album_collectible:[0,1,0]
,uri:["Activity",    "https://gateway.pinata.cloud/ipfs/QmNd4eZEVbH3te38ShsDodXxz5Wrg1EvVJtUwXdVGcwxXY"
,"Activity"]
,album:"020101"
},   {tokenId:"62",
tokenAdd:"0x87abD078e4d05d2D0179B41Bb14fE49f41910E91",
beneficiary: "0xfef5f69FA76f35638Aa3ed77a0644Fa79d31A554",
auctionEnd:"1675073040",highestBidder:[],highestBid:[],open:true,
reserve:"15000000000000000000",index:0,
soldTo:"0x0000000000000000000000000000000000000000",soldFor:0,UpForSale:false,
royaltyHolder: "0xfef5f69FA76f35638Aa3ed77a0644Fa79d31A554",
category_album_collectible:[0,1,0]
,uri:["Billi Activity",    "https://gateway.pinata.cloud/ipfs/QmUgjGT3HRwXir362ZGSLGrTHRp5YkJvVXF42Ucudou8gP"
,"Billi"]
,album:"030202"
},   {tokenId:"63",
tokenAdd:"0x87abD078e4d05d2D0179B41Bb14fE49f41910E91",
beneficiary: "0xfef5f69FA76f35638Aa3ed77a0644Fa79d31A554",
auctionEnd:"1675073040",highestBidder:[],highestBid:[],open:true,
reserve:"15000000000000000000",index:0,
soldTo:"0x0000000000000000000000000000000000000000",soldFor:0,UpForSale:false,
royaltyHolder: "0xfef5f69FA76f35638Aa3ed77a0644Fa79d31A554",
category_album_collectible:[0,1,0]
,uri:["Piegeon Description",    "https://gateway.pinata.cloud/ipfs/QmSLsmx3jjn9hFx1Gdk8aj5xcGNjHrZAV9VQwPSbQ2Yq5k"
,"Piegeon"]
,album:"000101"
},   {tokenId:"65",
tokenAdd:"0x87abD078e4d05d2D0179B41Bb14fE49f41910E91",
beneficiary: "0xfef5f69FA76f35638Aa3ed77a0644Fa79d31A554",
auctionEnd:"1675073040",highestBidder:[],highestBid:[],open:true,
reserve:"15000000000000000000",index:0,
soldTo:"0x0000000000000000000000000000000000000000",soldFor:0,UpForSale:false,
royaltyHolder: "0xfef5f69FA76f35638Aa3ed77a0644Fa79d31A554",
category_album_collectible:[0,1,0]
,uri:["Gizza pyramix",    "https://gateway.pinata.cloud/ipfs/QmP1WE4H9kreQrx4JXjS5EzUziQFv3LpjTDkTqsGXqsEvZ"

,"Gizza"]
,album:"001401"
},   {tokenId:"66",
tokenAdd:"0x87abD078e4d05d2D0179B41Bb14fE49f41910E91",
beneficiary: "0xfef5f69FA76f35638Aa3ed77a0644Fa79d31A554",
auctionEnd:"1675073040",highestBidder:[],highestBid:[],open:true,
reserve:"20000000000000000000",index:0,
soldTo:"0x0000000000000000000000000000000000000000",soldFor:0,UpForSale:false,
royaltyHolder: "0xfef5f69FA76f35638Aa3ed77a0644Fa79d31A554",
category_album_collectible:[0,1,0]
,uri:["ACCC Conductor",    "https://gateway.pinata.cloud/ipfs/Qme9LzAZQud44qGmeaP9xXQLvihQumCs5AkHdjPrcmPnNJ"
,"ACCC"]
,album:"010101"
}
,   {tokenId:"67",
tokenAdd:"0x87abD078e4d05d2D0179B41Bb14fE49f41910E91",
beneficiary: "0xfef5f69FA76f35638Aa3ed77a0644Fa79d31A554",
auctionEnd:"1675073040",highestBidder:[],highestBid:[],open:true,
reserve:"14000000000000000000",index:0,
soldTo:"0x0000000000000000000000000000000000000000",soldFor:0,UpForSale:false,
royaltyHolder: "0xfef5f69FA76f35638Aa3ed77a0644Fa79d31A554",
category_album_collectible:[0,1,0]
,uri:["Kingdom Tower",    "https://gateway.pinata.cloud/ipfs/QmPejqhSVpcsiY4ujjAugAUuBxQf8F8jEDH52CTPWmYdko"

,"Kingdom"]
,album:"030301"
}




]




const adoptSlice = createSlice({
  name: "AdopSlice",
  initialState: {
    web3: null,
    ethBalance: null,
    data:null,
    bids:null,
    sortedBids:initData,
    moralisData:initData,
    moralisData1:[],
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
    setInitialMoralis: (state,actions)=>{
      state.moralisData = actions.payload
    },
    filterBids: (state,actions) =>{
      console.log("sort bids called",actions.payload)
      if(actions.payload.num===0){
        state.sortedBids = actions.payload.data
      } else {
        
        state.sortedBids = actions.payload.data.filter((item,i)=> 
          {
            console.log("first",i,item.catetory,actions.payload.num-1)
            return(item.category_album_collectible[0]==actions.payload.num-1)
          }  

          );
      }

    },

    sortByPrice: (state,actions) =>{

      const asc = state.moralisData.sort((a,b)=>(Number(formatEther(a.reserve)) - Number(formatEther(b.reserve))) )
      

      if(actions.payload==="Highest price"){
        state.sortedBids = asc.reverse()
      }else{
        state.sortedBids = asc
      }


    },
    filterByPrice: (state,actions) =>{

      state.sortedBids = state.moralisData.filter(item=> 
        {      console.log("sort bids called",formatEther(item.reserve),actions.payload[0])
          return (        Number(formatEther(item.reserve)) <= Number(actions.payload[0]))
        }

        
        );


    },
    filterByCountry: (state,actions) =>{
 //     console.log("sort bids called",actions.payload)
      state.sortedBids = actions.payload.data.filter(item=> item.album===actions.payload.code)}
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
      console.log("tx1 with moralis",action.payload)
      state.moralisData = action.payload.tx1;
      state.sortedBids = action.payload.tx1;

    },


    [getMoralis.pending]: (state, action) => {
      state.toggle = !state.toggle;
      state.error = null;
    },
    [getMoralis.fulfilled]: (state, action) => {
      state.toggle = !state.toggle;

      state.moralisData1.push(action.payload);
      
      state.highestBid.push(action.payload.highestBid);
      state.highestBidder.push(action.payload.highestBidder);
      state.sortedBids.push(action.payload);
    },




    //
  },
});

export const adopreducer = adoptSlice.reducer;
export const { toggle, setTest,setBids,sortBidsAsc,filterBids,sortByPrice,filterByPrice,filterByCountry,setInitialMoralis } = adoptSlice.actions;