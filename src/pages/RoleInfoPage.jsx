import React from "react";
import InformationTable from "../components/InformationTable";
import PermissionSection from "../components/PermissionSection";
import { StatusBadge } from "../components/StatusBadge";
import PrimaryButton from "../components/buttons/PrimaryButton";
import PermissionDisplay from "../components/PermissionDisplay";

const RoleInfoPage = () => {
  const basicFields = [
    { label: "Role Name", value: "Sales Agent" },
    { label: "Created on", value: "Aug 2, 2025" },
    { label: "Editable", value: "YES" },
    { label: "Deletable", value: "YES" },
  ];

  const hierarchyFields = [
    { label: "Parent Role", value: "Super Admin" },
    { label: "Parent Role ID", value: "18864" },
  ];

  const leadsPermissions = [
    { label: "VIEW", active: false },
    { label: "CREATE", active: true },
    { label: "EDIT", active: true },
    { label: "DELETE", active: false },
    { label: "ASSIGN", active: true },
  ];

  const titles = ["Leads", "Tasks", "Clients", "Reports"];

  return (
    <div className="pt-25 px-39  bg-white pb-25 ">
      {/* Header Section */}
      <div className="mb-28">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="text-gray-600 hover:text-gray-900">
              <img
                width={12}
                height={20}
                src="src/assets/icons/back-arrow.svg"
              />
            </button>
            <h1 className="text-2.5xl font-semibold text-black">Role Info</h1>
          </div>
          <div className="flex items-center gap-3">
            <PrimaryButton
              label="Deactivate"
              onClick={() => alert("Deactivate Clicked!")}
              src={"src/assets/icons/close-icon.svg"}
              bgcolor={"brickred"}
              iconheight={24}
              iconwidth={24}
            />
            <div className="">
              <PrimaryButton
                label="Edit Role"
                onClick={() => alert("Edit Role Clicked!")}
                src={"src/assets/icons/edit-w-icon.svg"}
                bgcolor={"black"}
                iconheight={24}
                iconwidth={24}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Role Name and Status Badge */}
      <div className="mb-6 flex items-center gap-27">
        <h2 className="text-3.5xl font-semibold text-gray-900">Sales Agent</h2>
        <div className=" pt-2">
          <StatusBadge
            status="Active"
            icon="src/assets/icons/active-icon.svg"
            iconWidth={24}
            iconHeight={24}
          />
        </div>
      </div>

      {/* Information Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div>
          <h3 className="text-xl pl-4 font-semibold text-black mb-10">
            Basic Information
          </h3>
          <InformationTable fields={basicFields} />
        </div>
        <div>
          <h3 className="text-xl font-semibold pl-4 text-black mb-10">
            Hierarchy Information
          </h3>
          <InformationTable fields={hierarchyFields} />
        </div>
      </div>

      {/* Permissions Section */}
      <div>
        <h3 className="text-xl font-semibold text-black pl-4 mb-10">
          Permissions
        </h3>
        <div className="grid grid-cols-3 gap-18 pr-134 ">
          {titles?.map((item, index) => (
            <div key={index}>
              <PermissionDisplay title={item} permissions={leadsPermissions} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoleInfoPage;
