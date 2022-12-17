import React, { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./UploadDetails.module.sass";
import Dropdown from "../../components/Dropdown";
import Icon from "../../components/Icon";
import TextInput from "../../components/TextInput";
import Switch from "../../components/Switch";
import Loader from "../../components/Loader";
import Modal from "../../components/Modal";
import Preview from "./Preview";
import Cards from "./Cards";
import FolowSteps from "./FolowSteps";
import { Contract, utils } from "ethers";
import { Cdata, ERC20, IERC20, MarketAbi, MarketAdd, TokenAbi, TokenAdd } from "../../config";
import { useWeb3React } from "@web3-react/core";
import { useDispatch } from "react-redux";
import { getData } from "../../state/ui";
import { formatUnits } from "ethers/lib/utils";



const ipfsClient = require('ipfs-http-client');
const projectId = '2HdKrtd8GBGyqmO0u1BW2Re1hSK';
const projectSecret = '624bcf5bf92747f385771188371089f4';
const auth =
    'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');


const royaltiesOptions = ["10%", "20%", "30%"];
const categoriesOptions = ["Adventure","Airlines","Art","Cruise","Culture","Ecotourism","Gastronomy","Honeymoon","Hotels","Luxury","Photography","Safaris","Sports","Others"];

const items = [
  {
    title: "Create collection",
    color: "#4BC9F0",
  },
  {
    title: "Crypto Legend - Professor",
    color: "#45B26B",
  },
  {
    title: "Crypto Legend - Professor",
    color: "#EF466F",
  },
  {
    title: "Legend Photography",
    color: "#9757D7",
  },
];
const Continents = Cdata.map((v,e)=>v.title)


export const getContract = (library, account,add,abi) => {
	const signer = library?.getSigner(account).connectUnchecked();
	var contract = new Contract(add,abi, signer);
	return contract;
};



const Upload = () => {
  const [royalties, setRoyalties] = useState(royaltiesOptions[0]);
  const [categories, setCategories] = useState(categoriesOptions[0]);
  const [sale, setSale] = useState(true);
  const [price, setPrice] = useState(false);
  const [travelOffer, settravelOffer] = useState(false);
  const [image,setimage] = useState()
  const [name,setname] = useState()
  const [description,setdescription] = useState()
  const [size,setSize] = useState()
  const [Properties,setProperties] = useState()
  const [album,setAlbum] = useState(0)
  const [mintingDone,setMintingdone] = useState(false)
  const [approvalDone,setApprovalDone] = useState(false)
  const [lockDone,setLockdone] = useState(false)
  const [Counter,setCounter] = useState(0)
  const [approvalLoader,setApprovalLoader] = useState(false)
  const [mintingLoader,setMintingLoader] = useState(false)
  const [lockLoader,setLockLoader] = useState(false)
  const { account,library,chainId } = useWeb3React();
  const tokenContract = getContract(library, account,TokenAdd,TokenAbi);
  const TVLContract = getContract(library, account,ERC20,IERC20);
  const marketContract = getContract(library, account,MarketAdd,MarketAbi);
  const [visibleModal, setVisibleModal] = useState(false);
  const [PriceinEth, setPriceEth] = useState(0);
  const [AuctionEnd, setAuctionEnd] = useState(0);
  const [continent, setcontinent] = useState(Continents[0]);
  const [continentInd, setcontinentInd] = useState(0);
  const [subCon, setsubCon] = useState(0);
  const [subConInd, setsubConInd] = useState(0);
  const [country, setCountry] = useState();
  const [countryInd, setCountryInd] = useState(0);
  const [play, setPlay] = useState(false);
  const dispatch = useDispatch()


  const [visiblePreview, setVisiblePreview] = useState(false);




const subConArray = Cdata[continentInd].subMenu!=null ? Cdata[continentInd].subMenu.map((v,e)=>v.title) : []

const countryArray = Cdata[continentInd].subMenu ? Cdata[continentInd].subMenu[subConInd].subMenu?.map((v,e)=>v.title) : []


function indexGenerator(a,b,c){
  const x = a<10? `0${a}` : a
  const y = b+1<10? `0${b+1}` : b
  const z = c+1<10? `0${c+1}` : c
  console.log("index",x+y+z)
  return x+y+z
}

useEffect(()=>{
  const abc = async ()=>{
    if(account){
      const _counter = await tokenContract.tokenCounter()

      setCounter(formatUnits(_counter,0))
      
    }


  }
  abc()
},[account])

useEffect(()=>{
  if(Cdata[continentInd].subMenu!=null){
    setsubCon(Cdata[continentInd].subMenu[0].title)
  }else{
    setsubCon(Cdata[continentInd].title)
  }

},[continentInd,subConInd])



  var imageBugger;


  const client = ipfsClient.create({
   host: 'ipfs.infura.io',
   port: 5001,
   protocol: 'https',
   headers: {
       authorization: auth,
   },
});

const captureFile = async(e)=>{
     e.preventDefault()
   const file = e.target.files[0]
   const reader = new window.FileReader()
   reader.readAsArrayBuffer(file)
   reader.onloadend = async ()=>{
    imageBugger = Buffer(reader.result)
     console.log("buffer",imageBugger)
 client.add(imageBugger).then((res) => {
   setimage(`https://gateway.pinata.cloud/ipfs/${res.path}`)

});}
}

Counter && console.log("video",Counter)




const upLoadNFT = async ()=>{
  setMintingLoader(true)
 
  const obj = {image:image,name,description,PriceinEth,royalties,size,sale,price,travelOffer,album:items[album].title,minter_address:account}
  console.log("obe",obj)
  const jsonObj = JSON.stringify(obj)
  const jsonIPFS = await client.add(jsonObj)
  const tx = await tokenContract.Mint(account,jsonIPFS.path,

    {gasLimit:3000000})
  await tx.wait()

  if(tx){
    console.log("obj",jsonIPFS)
    setMintingdone(true)
    setMintingLoader(false)
  }
}



const clearAll = ()=>{
  setimage("")
  setname("")
  setdescription("")
  setPriceEth("")
  setVisiblePreview(false)

}


const approval = async ()=>{
  setApprovalLoader(true)

  const count = Counter && Counter
  console.log("Counter",count)
  try {
    const tx = await tokenContract.approve(MarketAdd,count)
    await tx.wait()
    
    if(tx){
      console.log("tx",tx)
      setApprovalLoader(false)
      setApprovalDone(true)
    }
  } catch (error) {
    console.log(error)
  }
}


const TVLapproval = async ()=>{
  setApprovalLoader(true)
  try {
    const tx = await TVLContract.approve(MarketAdd,0)
    await tx.wait()
    
    if(tx){
      console.log("tx",tx)
      setApprovalLoader(false)
      setApprovalDone(true)
    }
  } catch (error) {
    console.log(error)
  }
}



const Lock2 = async ()=>{
setLockLoader(true)
  try {
    const ind = indexGenerator(continentInd,subConInd,countryInd)
    console.log("first",ind)
    const trvOff = travelOffer ? 1 : 0
    const playAble = play ? 1 : 0
    
    const tx = await marketContract.createAuction(
        Counter,Date.parse(AuctionEnd)/1000,utils.parseUnits(PriceinEth.toString(),"ether") ,TokenAdd
    ,    [
      categoriesOptions.indexOf(categories),
       
      trvOff,playAble
    ],ind,description,
    
    {gasLimit:3000000}
        )
    await tx.wait()
    
    if(tx){
      console.log("tx",tx)
      setLockdone(true)
      setLockLoader(false)
      setVisibleModal(false)
      dispatch(getData({}))
    }
  } catch (error) {
    console.log(error)
  }
}




const Lock3 = async ()=>{
  setLockLoader(true)
    try {
      const ind = indexGenerator(continentInd,subConInd,countryInd)
      const trvOff = travelOffer ? 1 : 0
      const playAble = play? 1: 0
      const tx = await marketContract.createSale(
          Counter,utils.parseUnits(PriceinEth.toString(),"ether") ,TokenAdd
          ,    [
            categoriesOptions.indexOf(categories),
           
            trvOff,playAble
          ],  ind,description,
      
      {gasLimit:3000000}
          )
      await tx.wait()
      
      if(tx){
        console.log("tx",tx)
        setLockdone(true)
        setLockLoader(false)
        setVisibleModal(false)
        dispatch(getData({}))
      }
    } catch (error) {
      console.log(error)
    }
  }


const Lock = async ()=>{
  if(!price){
    Lock2()
  }else{
    Lock3()
  }
}




  return (
    <>
      <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
          <div className={styles.wrapper}>
            <div className={styles.head}>
              <div className={cn("h2", styles.title)}>
                Create single collectible
              </div>
              <button
                className={cn("button-stroke button-small", styles.button)}
              >
                Switch to Multiple
              </button>
            </div>
            <form className={styles.form} action="">
              <div className={styles.list}>
                <div className={styles.item}>
                  <div className={styles.category}>Upload file</div>
                  <div className={styles.note}>
                    Drag or choose your file to upload
                  </div>
                  <div className={styles.file}>
                    <input onChange={captureFile} className={styles.load} type="file" />
                    <div className={styles.icon}>
                      <Icon name="upload-file" size="24" />
                    </div>
                    <div className={styles.format}>
                      PNG, GIF, WEBP, MP4 or MP3. Max 1Gb.
                    </div>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.category}>Item Details</div>
                  <div className={styles.fieldset}>
                    <TextInput
                      className={styles.field}
                      label="Item name"
                      name="Item"
                      type="text"
                      value={name}
                      onChange={(e)=>{setname(e.target.value)}}
                      placeholder='e. g. Redeemable Bitcoin Card with logo"'
                      required
                    />
                    <TextInput
                      className={styles.field}
                      label="description"
                      name="description"
                      type="text"
                      value={description}
                      onChange={(e)=>{setdescription(e.target.value)}}
                      placeholder="e. g. “After purchasing you will able to recived the logo...”"
                      required
                    />
                    <div 
                    style={{display:"flex",flexWrap:"wrap"}}
                    //className={styles.row}
                    >
                      <div className={styles.col}>
                        <div className={styles.field}>
                          <div className={styles.label}>Royalties</div>
                          <Dropdown
                            
                            className={styles.dropdown}
                            value={royalties}
                            setValue={setRoyalties}
                            options={royaltiesOptions}
                            setInd={()=>{}}
                          />
                        </div>
                      </div>
                      <div className={styles.col}>
                        <div className={styles.field}>
                          <div className={styles.label}>Categories</div>
                          <Dropdown
                            className={styles.dropdown}
                            value={categories}
                            setValue={setCategories}
                            options={categoriesOptions}
                            setInd={()=>{}}
                          />
                        </div>
                      </div>
                      <div className={styles.col}>
                        <div className={styles.field}>
                          <div className={styles.label}>Continents</div>
                          <Dropdown
                            className={styles.dropdown}
                            value={continent}
                            setValue={setcontinent}
                            options={Continents}
                            setInd={setcontinentInd}
                          />
                        </div>
                      </div>
                      <div className={styles.col}>
                      <div className={styles.field}>
                        <div className={styles.label}>Sub-Cont / Count</div>
                        <Dropdown
                          className={styles.dropdown}
                          value={subCon}
                          setValue={setsubCon}
                          options={subConArray}
                          setInd={setsubConInd}
                        />
                        </div>
                      </div>
                      {Cdata[continentInd].subMenu && Cdata[continentInd].subMenu[subConInd].subMenu !=undefined ?
                      <div className={styles.col}>
                      <div className={styles.field}>
                        <div className={styles.label}>Countries</div>
                        <Dropdown
                          className={styles.dropdown}
                          value={country}
                          setValue={setCountry}
                          options={countryArray}
                          setInd={setCountryInd}
                        />
                        </div>
                      </div> :  null
                      }
                      
                      {/* <div className={styles.col}>
                        <TextInput
                          className={styles.field}
                          label="Size"
                          name="Size"
                          value={size}
                          onChange={(e)=>{setSize(e.target.value)}}
                          type="text"
                          placeholder="e. g. Size"
                          required
                        />
                      </div> */}
                      <div className={styles.col}>
                        <TextInput
                          className={styles.field}
                          label="TVL Price"
                          name="TVL Price"
                          value={PriceinEth}
                          onChange={(e)=>{setPriceEth(e.target.value)}}
                          type="number"
                          placeholder="2 TVL"
                          required
                        />
                      </div>
                      {/* <div className={styles.col}>
                        <TextInput
                          className={styles.field}
                          label="Properties"
                          name="Properties"
                          value={Properties}
                          onChange={(e)=>{setProperties(e.target.value)}}
                          type="text"
                          placeholder="e. g. Properties"
                          required
                        />
                      </div> */}
                      
                      <div className={styles.col}>
                        <TextInput
                          className={styles.field}
                          label="Auction End"
                          name="Auction End"
                          value={AuctionEnd}
                          onChange={(e)=>{setAuctionEnd(e.target.value)}}
                          type="datetime-local"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.options}>
                {/* <div className={styles.option}>
                  <div className={styles.box}>
                    <div className={styles.category}>Put on sale</div>
                    <div className={styles.text}>
                      You’ll receive bids on this item
                    </div>
                  </div>
                  <Switch value={sale} setValue={setSale} />
                </div>   */}
                <div className={styles.option}>
                  <div className={styles.box}>
                    <div className={styles.category}>Instant sale price</div>
                    <div className={styles.text}>
                      Your NFT will be sold instantly
                    </div>
                  </div>
                  <Switch value={price} setValue={setPrice} />
                </div>
                <div className={styles.option}>
                  <div className={styles.box}>
                    <div className={styles.category}>Select as Travel Offer</div>
                    <div className={styles.text}>
                      Select if you want to make this as travel offer
                    </div>
                  </div>
                  <Switch value={travelOffer} setValue={settravelOffer} />
                </div>
                <div className={styles.option}>
                  <div className={styles.box}>
                    <div className={styles.category}>Playable NFT</div>
                    <div className={styles.text}>
                      Select if the NFT is playable
                    </div>
                  </div>
                  <Switch value={play} setValue={setPlay} />
                </div>
                {/* <div className={styles.category}>Choose collection</div>
                <div className={styles.text}>
                  Choose an exiting collection or create a new one
                </div>
                <Cards className={styles.cards} items={items} setAlbum={setAlbum}/> */}
              </div>
              <div className={styles.foot}>
                <button
                 className={cn("button", styles.button)}
                  //onClick={Lock}
                  onClick={()=>{setVisiblePreview(true)}}
                  type="button"
                >
                  Preview
                </button>
                <button
                 className={cn("button", styles.button)}
                  onClick={() => setVisibleModal(true)}
                  // type="button" hide after form customization
                  type="button"
                >
                  <span>Create item</span>
                  <Icon name="arrow-next" size="10" />
                </button>
                <div className={styles.saving}>
                  {/* <span>Auto saving</span>
                  <Loader className={styles.loader} /> */}
                </div>
              </div>
            </form>
          </div>
          {visiblePreview?
          <Preview

          clearAll={clearAll}
          obj={{image,name,description,PriceinEth,royalties,size,sale,price,travelOffer,album:items[album].title,play}}
          className={cn(styles.preview, { [styles.active]: visiblePreview })}
          onClose={() => setVisiblePreview(false)}
        />: null 
          }
          
        </div>
      </div>
      <Modal visible={visibleModal} onClose={() => setVisibleModal(false)}>
          <FolowSteps className={styles.steps} 
          upLoadNFT={upLoadNFT}
          approval={approval}
          approvalLoader={approvalLoader}
          mintingDone={mintingDone}
          approvalDone={approvalDone}
          lockDone={lockDone}
          Lock={Lock}
          mintingLoader={mintingLoader}
          lockLoader={lockLoader}
          />
      </Modal>
    </>
  );
};

export default Upload;
