import React, { useState } from "react";
// import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineMail,
} from "react-icons/ai";

const Login = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="pl-[1em] pr-[1em] mt-[4em] ">
      <div className="flex justify-center items-center bg-slate-100 pt-[50px] pb-[50px]">
        {/* img side */}
        <div className="flex-[0.4] ">
          <div className="relative group">
            <img
              src="https://images.pexels.com/photos/4198222/pexels-photo-4198222.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="rounded-lg"
            />

            <div className=" transition-[all]">
              {/* overlayDiV */}
              <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.5)] rounded-lg" />
              <div className="absolute w-full h-full bottom-[8px] left-[16px]  pl-[1em] pr-[1em] flex flex-col justify-end text-white">
                {/* content */}
                <p className="text-lg">
                  Welcome back. We value your contribution to our platform. We
                  hope that you are enjoying what we have to offer. For any
                  complaint, feel free to reach out to us. We value you.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* form side */}
        <div className="flex-[0.5]">
          <h3 className="text-xl  ml-[20px]">PICK UP WHERE YOU LEFT OFF</h3>
          <h4 className="text-lg mb-[20px]  ml-[20px]">SIGN IN NOW</h4>
          <div>
            <form className="flex flex-col gap-[20px]">
              {/* email */}
              <div className="flex p-[10px] ml-[20px] items-center justify-between bg-slate-200 rounded-xl">
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
              <div className="flex p-[10px]  ml-[20px] items-center justify-between bg-slate-200 rounded-xl">
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
                className="bg-green-700  ml-[20px] p-[10px] text-slate-200 rounded-lg"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
