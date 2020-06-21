import React from "react";
import LayoutTwo from "../../layouts/LayoutTwo";
import HeroSlider from "../../wrappers/hero-slider/HeroSlider";
import CategorySlider from "../../wrappers/category/CategorySlider";
import TabProduct from "../../wrappers/product/TabProduct";

const HomeShop = () => {

  return (
    <LayoutTwo>
      {/* hero slider */}
      <HeroSlider />
      {/* category */}
      <CategorySlider spaceTopClass="pt-100" spaceBottomClass="pb-95" />
      {/* tab product */}
      <TabProduct spaceBottomClass="pb-70" category="Smartphone" /> {/*Starting value*/}
    </LayoutTwo>
  );
};

export default HomeShop;
