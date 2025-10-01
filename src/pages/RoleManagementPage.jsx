import React from 'react'
import PermissionSection from '../components/PermissionSection';

const RoleManagementPage = () => {
  const initialPermissions = [
    { label: "VIEW", active: true },
    { label: "CREATE", active: false },
    { label: "EDIT", active: false },
    { label: "DELETE", active: false },
    { label: "ASSIGN", active: false },
  ];
  return (
    <div>
      Role Management 
      <div className="p-6">
      <PermissionSection initialPermissions={initialPermissions}/>
    </div>
    </div>
  )
}

export default RoleManagementPage
