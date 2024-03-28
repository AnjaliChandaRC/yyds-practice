import React from "react";
import footerLogo from "../assets/images/svg/footer-logo.svg";
import { footerList } from "../common/Helper";
const Footer = () => {
  return (
    <>
      <div className="bg-darkCharcoal py-9">
        <div className="container max-w-[1140px] mx-auto md:flex justify-between items-center px-3 sm:px-5 xl:px-0">
          <div className="md:flex items-end">
            <a href="/">
              <img
                src={footerLogo}
                alt="footer-logo"
                className="mx-auto md:mx-0 max-w-[80px] lg:max-w-[103px]"
              />
            </a>
            <p className="text-sm font-normal font-poppins text-lightWhite text-center md:text-start max-w-[300px] mx-auto md:mx-0 md:max-w-[256px] pt-3 md:pt-0 opacity-80">
              $YYDS is a memecoin with no intrinsic value or expectation of
              financial return.
            </p>
          </div>
          <div className="pt-4 md:pt-8 text-center">
            {footerList.map((obj, index) => {
              return (
                <a
                  href={obj.link}
                  key={index}
                  className={`${
                    index === 0 ? "" : "ms-4 sm:ms-8 lg:ms-10"
                  } text-sm font-semibold font-poppins text-lightWhite opacity-80 transition-all duration-300 ease-in-out hover:text-skyBlue`}
                >
                  {obj.title}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
