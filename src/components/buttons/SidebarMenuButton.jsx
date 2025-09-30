import React from "react";
import { ShieldCheck } from "lucide-react";

export const SidebarMenuButton = ({
  icon,
  label,
  active = false,
  onClick,
  href,
}) => {

  const buttonClasses = `flex items-center gap-3 px-2 py-2.5 w-[228px] h-60 transition-all ${
    active
      ? "bg-goldgreen text-white rounded-full"
      : "text-gray-800 hover:bg-goldgreen hover:text-white bg-white rounded-full"
  }`;

  const content = (
    <>
      <div className="p-2 border border-greywhite bg-greywhite w-48 h-48 hover:bg-white flex justify-center items-center rounded-full transition-colors">
        <div className="flex justify-center items-center h-[21px] w-[17px]">
          <img src={icon} />
        </div>
      </div>

      <span className="text-sm font-normal not-italic text-center">
        {label}
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      {content}
    </button>
  );
};
