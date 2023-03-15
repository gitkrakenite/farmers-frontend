import React from "react";
import "./problems.css";
import { DummyProblems } from "../../data";

const Problems = () => {
  return (
    <div className=" w-[100%]">
      <div>
        <p className="text-md" style={{ fontWeight: "800" }}>
          Latest Issues
        </p>
      </div>
      {DummyProblems.map((problem) => (
        <div key={problem.id} className="probItem">
          <div className="">
            <p className="pb-[10px] " style={{ wordBreak: "break-all" }}>
              {problem.description}
            </p>
            <div
              className="flex justify-between pt-[10px]"
              style={{ borderTop: "1px solid gray" }}
            >
              <p>{problem.user}</p>
              <p>{problem.createdAt}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Problems;
