import React from "react";
import tokenomicsImageRing from "../assets/images/svg/tokenomics-img.svg";
import movementTextLine from "../assets/images/svg/movement-line-img.svg";
import movementChineseText from "../assets/images/svg/tokenomics-chinese-img.svg";
import movementHashImage from "../assets/images/svg/tokenomics-hash.svg";
import movementCartoonImage from "../assets/images/svg/tokenomics-cartoon.svg";

const Tokenomics = () => {
  return (
    <>
      <div className="bg-papayaWhip py-12 md:py-24 relative">
        <img
          src={movementChineseText}
          alt="tokenomics-chinese-img"
          className="absolute top-[3%] sm:top-[6%] left-[3%] max-w-[100px] sm:max-w-[150px] xl:max-w-[239px]"
        />
        <img
          src={movementHashImage}
          alt="tokenomics-hash"
          className="absolute bottom-[14%] left-[4%] hidden md:block"
        />
        <img
          src={movementCartoonImage}
          alt="tokenomics-cartoon"
          className="absolute end-0 top-[7%] max-w-[200px] xl:max-w-[310px] hidden md:block"
        />
        <div className="container max-w-[1140px] mx-auto px-3 sm:px-5 xl:px-0">
          <div className="md:flex justify-between">
            <div className="w-1/2 md:w-[40%] flex justify-center items-center mx-auto">
              <img
                src={tokenomicsImageRing}
                alt="tokenomics-img"
                className="w-[374px] sm:h-[374px]"
              />
            </div>
            <div className="sm:w-[80%] md:w-[50%] mx-auto text-center md:text-start pt-4 md:pt-0">
              <h2 className="text-lg md:text-xl lg:text-2xl font-indieFlower font-normal text-saffron text_stroke_orange">
                Tokenomics
              </h2>
              <h3 className="text-2xl md:text-[35px] lg:text-5xl font-indieFlower font-normal text-lightBlack text_stroke text_stroke_black">
                Token{" "}
                <span className="relative inline-block">
                  <img
                    src={movementTextLine}
                    alt="movement-line-img"
                    className="absolute start-0 bottom-[-8px] w-full"
                  />
                  Metrics
                </span>
              </h3>
              <div className="sm:flex justify-center md:block gap-7 pt-7">
                <div className="flex justify-center sm:justify-start gap-4">
                  <div className="w-[41px] h-[30px] bg-pastedOrange rounded"></div>
                  <p className="text-2xl font-indieFlower font-normal text-lightBlack">
                    10% CEX Liquidity
                  </p>
                </div>
                <div className="flex justify-center sm:justify-start gap-4 pt-2 sm:pt-0 md:pt-3 ps-1 sm:ps-0">
                  <div className="w-[41px] h-[30px] bg-racingRed rounded"></div>
                  <p className="text-2xl font-indieFlower font-normal text-lightBlack">
                    90% DEX Liquidity
                  </p>
                </div>
              </div>
              <p className="text-base font-normal font-poppins text-lightBlack opacity-60 pt-5">
                Welcome to the heart of our Meme Coin ecosystem, where
                creativity meets innovation. Our tokenomics is designed to bring
                a wave of excitement to the world of cryptocurrency, reshaping
                the landscape of how memes are not only shared, but valued.
              </p>
              <div className="bg-darkOrange border-[2px] border-black rounded-[14px] py-[14px] px-3 sm:px-[22px] xl:w-[602px] mt-5">
                <p className="text-lg sm:text-xl font-semibold font-poppins text-lightBlack">
                  Ecosystem
                </p>
                <p className="text-base sm:text-lg font-medium font-poppins text-lightBlack pt-2 leading-6">
                  Tax Buy 1%/Sell 1%, Contract Renounced / LP Locked
                </p>
                <p className="text-sm sm:text-base font-normal font-poppins text-lightBlack pt-2">
                  All taxes deposited in community directed DAO where anyone can
                  submit proposals and DAO token holders can vote on
                  allocations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tokenomics;
