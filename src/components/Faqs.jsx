import React, { useState } from "react";
import movementTextLine from "../assets/images/svg/movement-line-img.svg";
import faqCartoon from "../assets/images/png/faq-cartoon.png";
import faqMonkey from "../assets/images/png/faq-monkey-image.png";
import { faqsList } from "../common/Helper";
const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
      <div className="common_bg_img relative pt-[138px] pb-48">
        <img
          src={faqCartoon}
          alt="faq-cartoon"
          className="absolute blend_img max-w-[200px] xl:max-w-[400px] hidden md:block top-[5%]"
        />
        <img
          src={faqMonkey}
          alt="faq-monkey-image"
          className="absolute blend_img end-0 bottom-[10%] max-w-[200px] xl:max-w-[310px] hidden md:block"
        />
        <div className="container max-w-[1140px] mx-auto px-3 sm:px-5 xl:px-0">
          <h3 className="text-center text-2xl md:text-[35px] lg:text-5xl font-indieFlower font-normal text-lightBlack text_stroke text_stroke_black">
            How to Buy
            <span className="relative inline-block">
              <img
                src={movementTextLine}
                alt="movement-line-img"
                className="absolute start-0 bottom-0 w-full"
              />
              $YYDS
            </span>
          </h3>
          <div className="w-[75%] mx-auto mt-16">
            {faqsList.map((faq, index) => (
              <div
                key={index}
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index
                    ? " border border-red-500 shadow_border"
                    : " border border-black"
                } mt-3`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-4 focus:outline-none hover:bg-gray-100 transition duration-300 ease-in-out"
                >
                  <span className="text-lg font-medium">{faq.question}</span>
                  <span className="float-right">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-6 w-6 ${
                        activeIndex === index ? "transform rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? "max-h-[130px]" : "max-h-0"
                  }`}
                >
                  <div className="text-gray-700 p-4">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Faqs;
