import React from "react";
import movementTextLine from "../assets/images/svg/movement-line-img.svg";
import aboutUsCartoon from "../assets/images/png/about-us-cartoon.png";
import aboutUsPanda from "../assets/images/png/about-us-panda.png";

const AboutUs = () => {
  return (
    <>
      <div className="py-12 md:py-24 relative">
        <img
          src={aboutUsCartoon}
          alt="about-us-cartoon"
          className="absolute blend_img max-w-[200px] xl:max-w-[400px] hidden md:block"
        />
        <img
          src={aboutUsPanda}
          alt="about-us-panda"
          className="absolute blend_img end-[2%] bottom-[10%] max-w-[200px] xl:max-w-[310px] hidden md:block"
        />
        <div className="container max-w-[1140px] mx-auto px-3 sm:px-5 xl:px-0">
          <div className="md:w-[60%] mx-auto text-center">
            <h2 className="text-lg md:text-xl lg:text-2xl font-indieFlower font-normal text-saffron text_stroke_orange">
              About Us
            </h2>
            <h3 className="text-2xl md:text-[35px] lg:text-5xl font-indieFlower font-normal text-lightBlack text_stroke text_stroke_black">
              Introducing $
              <span className="relative inline-block">
                <img
                  src={movementTextLine}
                  alt="movement-line-img"
                  className="absolute start-0 bottom-0 w-full"
                />
                YYDS
              </span>
            </h3>
            <p className="text-base font-normal font-poppins text-lightBlack opacity-60 pt-6">
              In the meme universe, 财神YYDS, born from "永远的神" and
              traditional 财神, wielded his 富贵宝鼎 to spread enduring humor
              and positivity, undeterred by Trolls, championing the eternal
              value of joy. 
            </p>
            <p className="text-base font-normal font-poppins text-lightBlack opacity-60 px-6 pt-1">
              This meme deity was no ordinary figure; he symbolized not just
              material affluence, but also a treasure trove of positivity,
              humor, and good vibes. The birth of 财神YYDS marked a rare event.
              While most memes experienced fleeting popularity, 财神YYDS,
              drawing from the essence of "永远的神" or "forever god-like",
              merged with the time-honored 财神 to stand eternal, continuously
              cherished by meme aficionados.
            </p>
            <div className="relative pt-6 md:pt-10">
              <button className="common_btn text-xl font-normal font-indieFlower">
                Learn More
              </button>
            </div>
            <div className="w-full max-w-[606px] h-[1px] bg-black mx-auto mt-6"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
