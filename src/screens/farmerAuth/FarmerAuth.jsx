import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../../components/farmers/login";
import Register from "../../components/farmers/Register";

const FarmerAuth = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div>
        <div>
          {/* form */}
          <div>{show ? <Login /> : <Register />}</div>

          {/* options */}
          <div className="w-[90%] m-auto">
            {show ? (
              <div className="flex gap-[1em] mt-[1em] items-center justify-end">
                <div className=" p-[10px]">
                  <p>
                    New Here ?{" "}
                    <span
                      className="text-green-700"
                      style={{
                        fontWeight: 700,
                        letterSpacing: "1px",
                        cursor: "pointer",
                      }}
                      onClick={() => setShow(!show)}
                    >
                      Create Account
                    </span>{" "}
                  </p>
                </div>
                <div>
                  <p>
                    Go back to{" "}
                    <Link to="/">
                      <span
                        className="text-green-700"
                        style={{
                          fontWeight: 700,
                          letterSpacing: "1px",
                          cursor: "pointer",
                        }}
                      >
                        home screen ?
                      </span>
                    </Link>
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex gap-[1em] mt-[1em] items-center justify-start">
                <div className=" p-[10px]">
                  <p>
                    Already a member ?{" "}
                    <span
                      className="text-green-700"
                      style={{
                        fontWeight: 700,
                        letterSpacing: "1px",
                        cursor: "pointer",
                      }}
                      onClick={() => setShow(!show)}
                    >
                      Log in
                    </span>{" "}
                  </p>
                </div>
                <div>
                  <p>
                    Go back to{" "}
                    <Link to="/">
                      <span
                        className="text-green-700"
                        style={{
                          fontWeight: 700,
                          letterSpacing: "1px",
                          cursor: "pointer",
                        }}
                      >
                        home screen ?
                      </span>
                    </Link>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerAuth;
