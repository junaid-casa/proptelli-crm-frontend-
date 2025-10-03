import React from "react";
import { PermissionsGroup } from "./PermissionsGroup";
import { StatusBadge } from "./StatusBadge";
import IconButton from "./buttons/IconButton";

const RolesTable = ({ roles, headings }) => {
  return (
    <div className="w-full px-5">
      {/* Table Header */}
      <div className="bg-white rounded-full overflow-hidden">
        <table className="w-full">
          <thead className="w-full">
            <tr className="bg-gray-100">
              {headings.map((heading, index) => (
                <th
                  key={index}
                  className={`px-6 py-4 text-left text-base font-semibold text-black ${
                    heading === "Created on" ? "text-center" : ""
                  }`}
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
        </table>
      </div>

      {/* Table Body */}
      <table className="w-full">
        <tbody>
          {roles.map((role, index) => (
            <tr key={index} className="border-t border-gray-200 bg-white">
              <td className="px-6 py-11 text-base font-medium text-gray-900">
                {role.name}
              </td>
              <td className="px-6 py-11">
                <PermissionsGroup permissions={role.permissions} />
              </td>
              <td className="px-6 py-11 text-base font-normal text-gray-900">
                {role.createdOn}
              </td>
              <td className="px-6 py-11">
                <StatusBadge status={role.status} />
              </td>
              <td className="px-6 py-11">
                <div className="flex items-center gap-3">
                  <IconButton
                    icon={"src/assets/icons/eye.svg"}
                    alt="View"
                    onClick={() => alert("view clicked...")}
                  />
                  <IconButton
                    icon={"src/assets/icons/edit.svg"}
                    alt="Edit"
                    onClick={() => alert("edit clicked...")}
                  />
                  <IconButton
                    icon={"src/assets/icons/delete.svg"}
                    alt="Delete"
                    onClick={() => alert("Delete clicked...")}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RolesTable;
