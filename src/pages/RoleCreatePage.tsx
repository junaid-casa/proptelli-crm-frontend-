import React, { useState } from "react";
import PrimaryButton from "../components/buttons/PrimaryButton";
import PermissionSection from "../components/PermissionSection";
import InformationCreateTable from "../components/InformationCreateTable";

const RoleCreatePage = () => {
  const leadsPermissions = [
    { label: "VIEW", active: false },
    { label: "CREATE", active: true },
    { label: "EDIT", active: true },
    { label: "DELETE", active: false },
    { label: "ASSIGN", active: true },
  ];

  const [formData, setFormData] = useState({
    status: true,
    editable: true,
    deletable: true,
  });

  const handleFieldChange = (fieldName, value) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const fields = [
    { label: "Role Name", value: "Sales Agent", type: "text" },
    { label: "Status", name: "status", value: formData.status, type: "toggle" },
    {
      label: "Editable",
      name: "editable",
      value: formData.editable,
      type: "toggle",
    },
    {
      label: "Deletable",
      name: "deletable",
      value: formData.deletable,
      type: "toggle",
    },
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
            <h1 className="text-2.5xl font-semibold text-black">Create Role</h1>
          </div>
          <div className="flex items-center gap-3">
            <PrimaryButton
              label="Submit"
              onClick={() => alert("Deactivate Clicked!")}
              bgcolor={"black"}
              src={null}
              iconheight={24}
              iconwidth={24}
            />
          </div>
        </div>
      </div>

      {/* Information Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div>
          <h3 className="text-xl pl-4 font-semibold text-black mb-10">
            Role Information
          </h3>
          <InformationCreateTable
            fields={fields}
            onFieldChange={handleFieldChange}
          />
        </div>
        <div></div>
      </div>

      {/* Permissions Section */}
      <div>
        <h3 className="text-xl font-semibold text-black pl-4 mb-10">
          Permissions
        </h3>
        <PermissionSection
          titles={titles}
          initialPermissions={leadsPermissions}
        />
      </div>
    </div>
  );
};

export default RoleCreatePage;
