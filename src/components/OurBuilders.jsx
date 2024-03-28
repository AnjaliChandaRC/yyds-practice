import React from "react";
import builderGroupImage from "../assets/images/png/builder-img.png";
import builderCartoon from "../assets/images/png/builder-cartoon.png";
import movementTextLine from "../assets/images/svg/movement-line-img.svg";
import movementLineIcon from "../assets/images/svg/movement-line-icon.svg";
const OurBuilders = () => {
  return (
    <>
      <div className="bg-papayaWhip py-6 md:pt-16 md:pb-7 relative">
        <img
          src={builderCartoon}
          alt="builder-cartoon"
          className="absolute start-[6%] top-[4%]"
        />
        <img
          src={movementLineIcon}
          alt="movement-line-icon"
          className="absolute end-[9%] top-[7%]"
        />
        <div className="container max-w-[1140px] mx-auto px-5 xl:px-0">
          <h2 className="text-lg md:text-xl lg:text-2xl font-indieFlower font-normal text-saffron text-center text_stroke_orange">
            Our Buidlers
          </h2>
          <h3 className="text-2xl md:text-[35px] lg:text-5xl font-indieFlower font-normal text-lightBlack text_stroke text-center text_stroke_black">
            Community Driven{" "}
            <span className="relative inline-block">
              <img
                src={movementTextLine}
                alt="movement-line-img"
                className="absolute start-0 bottom-[-8px] w-full"
              />
              Movement
            </span>
          </h3>
          <img src={builderGroupImage} alt="builder-img" className="pt-7" />
        </div>
      </div>
    </>
  );
};

export default OurBuilders;
