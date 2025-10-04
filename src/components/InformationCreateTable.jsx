import React from "react";
import ToggleButton from "./buttons/ToggleButton";

const InformationCreateTable = ({ fields, onFieldChange }) => {
  return (
    <div className="w-full max-w-2xl">
      <div className="border border-gray-200 bg-white rounded-3xl p-4">
        {fields.map((field, index) => (
          <React.Fragment key={index}>
            <div className="flex justify-between items-center py-3">
              <span className="text-black text-base font-medium">
                {field.label}
              </span>
              
              {field.type === "toggle" ? (
                <ToggleButton
                  isActive={field.value}
                  onToggle={(value) => onFieldChange(field.name, value)}
                />
              ) : (
                <span className="font-normal text-base text-black">
                  {field.value}
                </span>
              )}
            </div>
            
            {index !== fields.length - 1 && (
              <hr className="border-gray-200" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default InformationCreateTable
