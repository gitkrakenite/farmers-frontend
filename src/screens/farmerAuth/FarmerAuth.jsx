import React, { useState } from "react";
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
              <div>
                <div className="mt-[1em] text-right p-[10px]">
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
              </div>
            ) : (
              <div>
                <div className="mt-[2em] p-[10px]">
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
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerAuth;
