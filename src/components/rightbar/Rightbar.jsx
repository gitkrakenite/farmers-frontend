import React from "react";
import { dummyNews } from "../../data";
import "./rightbar.css";
import { AiOutlineClockCircle } from "react-icons/ai";

const Rightbar = () => {
  return (
    <div
      className="h-[100vh] overflow-y-scroll p-[5px] hide-scrollbar"
      style={{
        position: "sticky",
        backgroundColor: "#f7efef",
        top: "60px",
        zIndex: 999,
      }}
    >
      <div>
        {/* news */}
        <p>What is happening ?</p>

        {dummyNews?.map((news) => (
          <div key={news.id} className="rightNews p-[7px]">
            <p style={{ wordBreak: "break-all" }} className="text-zinc-600">
              Title : {news.title}
            </p>
            <p style={{ wordBreak: "break-all" }} className="text-zinc-600">
              {news.description}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex gap-[5px] items-center">
                <div>
                  <p>
                    <AiOutlineClockCircle />
                  </p>
                </div>
                <div>
                  <p>{news.createdAt}</p>
                </div>
              </div>
              <div>
                <p className="text-green-600">Verified</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* widgets */}
      <div className="mt-[20px]">
        <p>Trending widgets</p>

        <img
          src="https://images.pexels.com/photos/95425/pexels-photo-95425.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="mb-[10px] rounded-md"
          style={{ maxHeight: "250px", width: "100%", objectFit: "cover" }}
        />
        <img
          src="https://images.pexels.com/photos/5910955/pexels-photo-5910955.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="rounded-md"
          style={{ maxHeight: "250px", width: "100%", objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default Rightbar;
