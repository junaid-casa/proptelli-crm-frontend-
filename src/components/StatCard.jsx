import React, { useState } from "react";

const StatCard = ({ src, title, count, iconBg, onClick }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
    if (onClick) onClick();
  };

  return (
    <div
      onClick={handleClick}
      className={`cursor-pointer flex items-center w-261 h-134 gap-4 p-6 rounded-30 bg-greywhite transition-all border
        ${active ? "border-goldgreen shadow-md" : "border-gray-200 hover:border-gray-400"}`}
    >
      {/* Icon circle */}
      <div
        className={`w-75 h-75 flex items-center justify-center rounded-full`}
        style={{ backgroundColor: iconBg }}
      >
        <img width={33} height={31} src={src}/>
      </div>

      {/* Text */}
      <div>
        <p className="text-sm font-medium text-black">{title}</p>
        <p className="text-4.5xl font-semibold text-black">{count}</p>
      </div>
    </div>
  );
};

export default StatCard;
