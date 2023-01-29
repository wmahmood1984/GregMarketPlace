import React from "react";
import Hero from "./Hero";
import Selection from "./Selection";
import Popular from "./Popular";
import HotBid from "../../components/HotBid";
import Collections from "./Collections";
import Discover from "./Discover";
import Description from "./Description";
import { useSelector } from "react-redux";
import { Dialog, DialogTitle } from "@mui/material";
import gif from "../../Img/spinner.gif"

const Home = () => {










  return (
    <>{true?
      
      
      //|| moralis.length>=2
      
      <div>
      <Hero title={"The new creative economy."} subtitle={"Create, explore, & collect digital art NFTs."} link={true} />
      <Selection />
      <Popular />
      <HotBid classSection="section" title={"Hot bid"} />
      <Collections />
      <Discover />
      {/* <Description /> */}
    </div>:
    <Dialog 
    
    open={true} 
    PaperProps={{
      style: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        color: "white"
      },
    }}
    >
      <DialogTitle>Loading NFTs...</DialogTitle>
      <img style={{marginLeft:"30%"}} width={"80px"} src={gif}></img>
    </Dialog>
    }
    
      
    </>
  );
};

export default Home;
