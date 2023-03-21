import React, { useState } from "react";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineMail,
} from "react-icons/ai";

const Register = () => {
  const [show, setShow] = useState(false);
  return (
    <div className=" pl-[10px] md:pl-[1em] pr-[10px] md:pr-[1em] mt-[10px] md:mt-[4em] ">
      <div className="flex justify-center items-center bg-slate-100 pt-[50px] pb-[50px]">
        <div className=" flex-[1] lg:flex-[0.5]">
          <h3 className="text-xl">GET STARTED FOR FREE</h3>
          <h4 className="text-lg mb-[20px]">Create new account</h4>
          <div>
            <form className="flex flex-col gap-[20px]">
              {/* name */}
              <div className="flex p-[10px] mr-[20px]  items-center justify-between bg-slate-200 rounded-xl">
                <div className=" flex-[0.9] flex flex-col gap-[6px] ">
                  <label
                    htmlFor="name"
                    className=""
                    style={{ letterSpacing: "1px" }}
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    required
                    className="bg-transparent outline-none"
                  />
                </div>
                <div>
                  <MdOutlineAccountBalanceWallet className="text-2xl" />
                </div>
              </div>
              {/* email */}
              <div className="flex p-[10px] mr-[20px] items-center justify-between bg-slate-200 rounded-xl">
                <div className="flex flex-col gap-[6px]">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="bg-transparent outline-none"
                  />
                </div>
                <div>
                  <AiOutlineMail className="text-2xl" />
                </div>
              </div>
              {/* password */}
              <div className="flex p-[10px] mr-[20px] items-center justify-between bg-slate-200 rounded-xl">
                <div className="flex flex-col gap-[6px]">
                  <label htmlFor="password">Password</label>
                  <input
                    type={show ? "text" : "password"}
                    placeholder="Create password"
                    required
                    id="password"
                    className="bg-transparent outline-none"
                  />
                </div>
                <div>
                  {show ? (
                    <AiOutlineEyeInvisible
                      className="text-2xl cursor-pointer"
                      onClick={() => setShow(!show)}
                    />
                  ) : (
                    <AiOutlineEye
                      className="text-2xl cursor-pointer"
                      onClick={() => setShow(!show)}
                    />
                  )}

                  {/* < /> */}
                </div>
              </div>
              <button
                type="submit"
                className="bg-green-700 mr-[20px] p-[10px] text-slate-200 rounded-lg"
              >
                Create Account
              </button>
            </form>
          </div>
        </div>
        <div className=" hidden lg:flex flex-[0.4] ">
          <div className="relative group">
            <img
              src="https://images.pexels.com/photos/39479/fresh-peppers-farmers-market-open-air-green-39479.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="rounded-lg"
            />

            <div className=" transition-[all]">
              {/* overlayDiV */}
              <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.5)] rounded-lg" />
              <div className="absolute w-full h-full bottom-[8px] left-[16px]  pl-[1em] pr-[1em] flex flex-col justify-end text-white">
                {/* content */}
                <p className="text-lg">
                  The number one platform for farmers. Join our community for
                  all your needs. Learn from the experts, sell your products
                  directly to customers and so much more
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
