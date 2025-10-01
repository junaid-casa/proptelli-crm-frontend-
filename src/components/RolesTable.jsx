import React from "react";
import { Eye, Edit, Trash2 } from "lucide-react";
import { PermissionsGroup } from "./PermissionsGroup";
import { StatusBadge } from "./StatusBadge";

const RolesTable = ({ roles }) => {
  return (
    <div className="w-full px-5 ">
      <div className="bg-white rounded-full   overflow-hidden">
        <table className="w-full">
          <thead className="w-full">
            <tr className="bg-gray-100">
              <th className="px-6 py-4 text-left text-base font-semibold text-black">
                Role Name
              </th>
              <th className="px-6 py-4 text-left text-base font-semibold text-black">
                Permissions
              </th>
              <th className="px-6 py-4 text-left text-base font-semibold text-center text-black">
                Created on
              </th>
              <th className="px-6 py-4 text-left text-base font-semibold  text-black">
                Status
              </th>
              <th className="px-6 py-4 text-left text-base font-semibold  text-black">
                Actions
              </th>
            </tr>
          </thead>
        </table>
      </div>
      <table className="w-full">
        <tbody>
          {roles.map((role, index) => (
            <tr key={index} className="border-t border-gray-200 bg-white">
              <td className="px-6 py-11 text-base font-medium text-gray-900">
                {role.name}
              </td>
              <td className="px-6 py-11">
                <PermissionsGroup
                  permissions={role.permissions}
                  extraCount={role.extraPermissions}
                />
              </td>
              <td className="px-6 py-11 text-base font-normal text-gray-900">
                {role.createdOn}
              </td>
              <td className="px-6 py-11">
                <StatusBadge status={role.status} />
              </td>
              <td className="px-6 py-11">
                <div className="flex items-center gap-3">
                  <button className="text-blue-500 bg-greywhite p-2 w-35 h-35 rounded-full hover:text-blue-600">
                    <img
                      height={20}
                      width={20}
                      src={"src/assets/icons/eye.svg"}
                    />
                  </button>
                  <button className="text-orange-500 bg-greywhite p-2 w-35 h-35 rounded-full hover:text-orange-600">
                    <img
                      height={20}
                      width={20}
                      src={"src/assets/icons/edit.svg"}
                    />
                  </button>
                  <button className="text-red-600 bg-greywhite p-2 w-35 h-35 rounded-full hover:text-red-700">
                    <img
                      height={20}
                      width={20}
                      src={"src/assets/icons/delete.svg"}
                    />
                  </button>
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
