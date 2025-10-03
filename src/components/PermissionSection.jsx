import React, { useState } from "react";
import PermissionCard from "../components/PermissionCard";

const PermissionSection = ({initialPermissions}) => {
  

  const [leadPermissions, setLeadPermissions] = useState(initialPermissions);

  const togglePermission = (label) => {
    setLeadPermissions((prev) =>
      prev.map((perm) =>
        perm.label === label ? { ...perm, active: !perm.active } : perm
      )
    );
  };

  const areAllActive = leadPermissions.every((perm) => perm.active);

  const toggleAllPermissions = () => {
    const newState = leadPermissions.map((perm) => ({
      ...perm,
      active: !areAllActive,
    }));
    setLeadPermissions(newState);
  };

  return (
    <div className="p-6">
      <PermissionCard
        title="Leads"
        permissions={leadPermissions}
        onPermissionToggle={togglePermission}
        onToggleAll={toggleAllPermissions}
        isAllActive={areAllActive}
      />
    </div>
  );
};

export default PermissionSection;