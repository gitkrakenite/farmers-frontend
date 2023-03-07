import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="relative mt-[1.3em]">
      <div className="w-full">
        {/* <video
        className="w-full h-[100vh] object-cover"
        src={bgVideo}
        autoPlay
        muted
      /> */}
        <img
          src="https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="w-full h-[78vh] sm:h-[30vh] object-cover"
        />
        {/* overlay div */}
        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.7)]" />
        <div className="absolute w-full h-full top-0 flex flex-col  pl-[2em] pr-[2em] pt-[2em] text-white">
          <div className=" block  sm:text-start sm:flex justify-evenly">
            <div className="flex flex-col justify-start items-start">
              <div>
                <h2 className="text-lg">Quick Links</h2>
              </div>

              <ul className=" p-0">
                <li className="mb-[8px]">
                  <a
                    href="#"
                    className="text-slate-400 hover:text-slate-50"
                    target="_blank"
                  >
                    Shop Now
                  </a>
                </li>
                <li className="mb-[8px]">
                  <a
                    href="#"
                    className="text-slate-400 hover:text-slate-50"
                    target="_blank"
                  >
                    Chat Now
                  </a>
                </li>
                <li className="mb-[8px]">
                  <a
                    href="#"
                    className="text-slate-400 hover:text-slate-50"
                    target="_blank"
                  >
                    Careers
                  </a>
                </li>
                <li className="mb-[8px]">
                  <a
                    href="#"
                    className="text-slate-400 hover:text-slate-50"
                    target="_blank"
                  >
                    SOAP
                  </a>
                </li>
                <li className="mb-[8px]">
                  <a
                    href="#"
                    className="text-slate-400 hover:text-slate-50"
                    target="_blank"
                  >
                    Invest Today
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-lg">Useful Links</h1>
              <ul className=" p-0">
                <li className="mb-[8px]">
                  <a
                    href="#"
                    className="text-slate-400 hover:text-slate-50"
                    target="_blank"
                  >
                    How To
                  </a>
                </li>
                <li className="mb-[8px]">
                  <a
                    href="#"
                    className="text-slate-400 hover:text-slate-50"
                    target="_blank"
                  >
                    Decor
                  </a>
                </li>
                <li className="mb-[8px]">
                  <a
                    href="#"
                    className="text-slate-400 hover:text-slate-50"
                    target="_blank"
                  >
                    Create Account
                  </a>
                </li>
                <li className="mb-[8px]">
                  <a
                    href="#"
                    className="text-slate-400 hover:text-slate-50"
                    target="_blank"
                  >
                    Covid News
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg">Partners</h2>
              <ul className=" p-0">
                <li className="mb-[8px]">
                  <a
                    href="#"
                    className="text-slate-400 hover:text-slate-50"
                    target="_blank"
                  >
                    Davis & Shirtliff
                  </a>
                </li>
                <li className="mb-[8px]">
                  <a
                    href="#"
                    className="text-slate-400 hover:text-slate-50"
                    target="_blank"
                  >
                    Toyota
                  </a>
                </li>
                <li className="mb-[8px]">
                  <a
                    href="#"
                    className="text-slate-400 hover:text-slate-50"
                    target="_blank"
                  >
                    Safaricom
                  </a>
                </li>
                <li className="mb-[8px]">
                  <a
                    href="#"
                    className="text-slate-400 hover:text-slate-50"
                    target="_blank"
                  >
                    ABSA Bank
                  </a>
                </li>
                <li className="mb-[8px]">
                  <a
                    href="#"
                    className="text-slate-400 hover:text-slate-50"
                    target="_blank"
                  >
                    NCBA Bank
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg">Contracts</h2>
              <ul className=" p-0">
                <li className="mb-[8px]">
                  <a
                    href="#"
                    className="text-slate-400 hover:text-slate-50"
                    target="_blank"
                  >
                    Chandaria Poultry
                  </a>
                </li>
                <li className="mb-[8px]">
                  <a
                    href="#"
                    className="text-slate-400 hover:text-slate-50"
                    target="_blank"
                  >
                    Turkana Cattle
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
