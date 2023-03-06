import React from "react";
import "./who.css";

const Who = () => {
  return (
    <div className="pl-[2em] pr-[2em] pt-[1.3em]">
      <h1 className="mb-[1em] text-3xl">Who are we ?</h1>
      {/* first */}
      <div>
        <div className=" block md:flex gap-[10px] items-center">
          {/* text side */}
          <div className=" flex-[0.6]">
            <h2 className="text-2xl">Platform built by farmers For Farmers</h2>
            <p>The number on platform for all farmers</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              hic illum sint libero facilis, vitae ipsa incidunt ut beatae sequi
              quae voluptates delectus inventore, temporibus sunt doloremque
              deserunt excepturi dicta doloribus natus animi commodi. Dolor
              animi, maxime exercitationem quidem voluptas nihil? Nostrum,
              veritatis, numquam, quasi atque distinctio dolor quas consequatur
              ratione cum dolorem omnis praesentium aspernatur! Voluptatem
              aperiam ab quod.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              corporis provident harum ipsa assumenda nam, quos eveniet. Iusto,
              repellendus optio. Ratione debitis optio mollitia eius nemo minima
              saepe praesentium non eos totam, fuga est aliquid? Quas architecto
              cupiditate, eligendi, animi placeat eum praesentium provident
              nostrum suscipit corporis perferendis! Consequatur, fuga!
            </p>
          </div>
          {/* img side */}
          <div className=" flex-[0.4]">
            <img
              src="https://images.pexels.com/photos/14348416/pexels-photo-14348416.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="w-full rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Who;
