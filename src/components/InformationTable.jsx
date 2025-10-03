import React from "react";

const InformationTable = ({ fields}) => {
  return (
    <div className="w-[661px]">
      {/* Card box */}
      <div className="min-h-[167] border border-gray-200 bg-white rounded-30 p-4">
        {fields.map((field, index) => (
          <React.Fragment key={index}>
            <div className="flex justify-between py-3">
              <span className="text-black text-md font-medium">{field.label}</span>
              <span className="font-normal text-md text-black">
                {typeof field.value === "boolean"
                  ? field.value
                    ? "YES"
                    : "NO"
                  : field.value}
              </span>
            </div>

            {/* Divider: show only between rows, not after last */}
            {index !== fields.length - 1 && (
              <hr className="border-gray-200" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default InformationTable;