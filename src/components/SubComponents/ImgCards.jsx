import React from "react";

const ImgCards = () => {
  return (
    <div className="rounded-xl relative">
      {/* Overlay */}
      <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
        <p className="font-bold text-2xl px-2 pt-4">Sun's out, BOGO's Cut</p>
        <p className="px-2">Through 8/26</p>
        <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
      </div>
      <img
        className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
        src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 "
        alt=""
      />
    </div>
  );
};

export default ImgCards;
