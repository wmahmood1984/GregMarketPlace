import React from "react";
import Hero from "./Hero";
import Selection from "./Selection";
import Popular from "./Popular";
import HotBid from "../../components/HotBid";
import Collections from "./Collections";
import Discover from "./Discover";
import Description from "./Description";

const Home = () => {
  return (
    <>
      <Hero title={"The new creative economy."} subtitle={"Create, explore, & collect digital art NFTs."} link={true} />
      <Selection />
      <Popular />
      <HotBid classSection="section" title={"Hot bid"} />
      <Collections />
      <Discover />
      {/* <Description /> */}
    </>
  );
};

export default Home;
