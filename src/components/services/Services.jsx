import React from "react";
import "./services.css";

const Services = () => {
  return (
    <div className="pl-[2em] pr-[2em] pt-[1.3em] ">
      <h1 className="mb-[1em] text-3xl">What We Offer</h1>
      <div className="servicesItemWrapper">
        <div>
          <div className="relative group">
            <img
              src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />

            <div className=" hidden group-hover:flex transition-[all]">
              {/* overlayDiV */}
              <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.6)] rounded-lg" />
              <div className="absolute w-full h-full top-0 flex flex-col justify-center pl-[1em] pr-[1em] text-white">
                {/* content */}
                <p className="text-lg">
                  Your success relies heavily on credible information. We offer
                  advice, success stories, latest innovation and much more
                  information. Join us
                </p>
              </div>
            </div>
          </div>
          <p className="mt-[10px]">Credible Information</p>
        </div>
        {/*  */}
        <div>
          <div className="relative group">
            <img
              src="https://images.pexels.com/photos/9811474/pexels-photo-9811474.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />

            <div className=" hidden group-hover:flex transition-[all]">
              {/* overlayDiV */}
              <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.6)] rounded-lg" />
              <div className="absolute w-full h-full top-0 flex flex-col justify-center pl-[1em] pr-[1em] text-white">
                {/* content */}
                <p className="text-lg">
                  We are aware of how frustrating middlemen can be. On this
                  platform you have the opportunity to sell direcly to customers
                  and make profits
                </p>
              </div>
            </div>
          </div>
          <p className="mt-[10px]">Farmer-Market Connection</p>
        </div>
        {/*  */}
        <div>
          <div className="relative group">
            <img
              src="https://images.pexels.com/photos/6770609/pexels-photo-6770609.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />

            <div className=" hidden group-hover:flex transition-[all]">
              {/* overlayDiV */}
              <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.6)] rounded-lg" />
              <div className="absolute w-full h-full top-0 flex flex-col justify-center pl-[1em] pr-[1em] text-white">
                {/* content */}
                <p className="text-lg">
                  Are you looking for long term investment opportunities ? Are
                  you willing to give shares or buy shares in agriculture ? We
                  have got you covered
                </p>
              </div>
            </div>
          </div>
          <p className="mt-[10px]">Investment Opportunity</p>
        </div>
        {/*  */}
        <div>
          <div className="relative group">
            <img
              src="https://images.pexels.com/photos/3669735/pexels-photo-3669735.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />

            <div className=" hidden group-hover:flex transition-[all]">
              {/* overlayDiV */}
              <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.6)] rounded-lg" />
              <div className="absolute w-full h-full top-0 flex flex-col justify-center pl-[1em] pr-[1em] text-white">
                {/* content */}
                <p className="text-lg">
                  Sometimes it's hard to filter the noise and find credible
                  latest news on farming. We give you all the important news and
                  notification in the Agri sector
                </p>
              </div>
            </div>
          </div>
          <p className="mt-[10px]">Hot News & Trending</p>
        </div>
        {/*  */}
        <div>
          <div className="relative group">
            <img
              src="https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />

            <div className=" hidden group-hover:flex transition-[all]">
              {/* overlayDiV */}
              <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.6)] rounded-lg " />
              <div className="absolute w-full h-full top-0 flex flex-col justify-center pl-[1em] pr-[1em] text-white">
                {/* content */}
                <p className="text-lg">
                  Our platform allows you to express your opinion on any subject
                  matter related to agriculture
                </p>
              </div>
            </div>
          </div>
          <p className="mt-[10px]">Express Yourself</p>
        </div>

        {/*  */}
        <div>
          <div className="relative group">
            <img
              src="https://images.pexels.com/photos/3756345/pexels-photo-3756345.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />

            <div className=" hidden group-hover:flex transition-[all]">
              {/* overlayDiV */}
              <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.6)] rounded-lg " />
              <div className="absolute w-full h-full top-0 flex flex-col justify-center pl-[1em] pr-[1em] text-white">
                {/* content */}
                <p className="text-lg">
                  Order fresh products from the farm. Flash delivery and hotline
                  support at your convinience.
                </p>
              </div>
            </div>
          </div>
          <p className="mt-[10px]">Buy Fresh Products</p>
        </div>
        {/*  */}
        <div>
          <div className="relative group">
            <img
              src="https://images.pexels.com/photos/4099096/pexels-photo-4099096.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />

            <div className=" hidden group-hover:flex transition-[all]">
              {/* overlayDiV */}
              <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.6)] rounded-lg " />
              <div className="absolute w-full h-full top-0 flex flex-col justify-center pl-[1em] pr-[1em] text-white">
                {/* content */}
                <p className="text-lg">
                  We offer a platform for farmers, customers and investors to
                  have one on one interaction. Create community channels or one
                  to one chatting.
                </p>
              </div>
            </div>
          </div>
          <p className="mt-[10px]">Chat Directly With Others</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
