import React from "react";
import PermissionButton from "./PermissionButton";

const PermissionCard = ({ title, permissions, onPermissionToggle, onToggleAll, isAllActive }) => {
  return (
    <div className=" bg-greywhite rounded-30 w-399 h-147 p-4">
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold text-md text-black">{title}</span>

        <PermissionButton
          label="ALL"
          active={isAllActive}
          onClick={onToggleAll}
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {permissions.map((perm, index) => (
          <PermissionButton
            key={index}
            label={perm.label}
            active={perm.active}
            onClick={() => onPermissionToggle(perm.label)}
          />
        ))}
      </div>
    </div>
  );
};

export default PermissionCard;