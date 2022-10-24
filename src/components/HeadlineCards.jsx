import React from "react";
import ImgCards from "./SubComponents/ImgCards";

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* Cards */}
      <ImgCards />
      <ImgCards />
      <ImgCards />
    </div>
  );
};

export default HeadlineCards;
