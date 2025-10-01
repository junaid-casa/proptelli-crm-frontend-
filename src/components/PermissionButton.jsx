import React from "react";

const PermissionButton = ({ label, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition 
        ${active ? "bg-[#B18C2E] text-white border-[#B18C2E]" : "bg-white text-black border-black"}`}
    >
      {label}
    </button>
  );
};

export default PermissionButton;