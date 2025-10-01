import React from 'react'
import InformationTable from '../components/InformationTable'

const RoleManagementPage = () => {
   const fields = [
  { label: "Role Name", value: "Sales Agent" },
  { label: "Created on", value: "Aug 2, 2025" },
  { label: "Editable", value: true },
  { label: "Deletable", value: false }
]
  return (
    <>
    <div>
      Role Management 
    </div>
     <div className="">
      <InformationTable
        fields={fields}
      />
    </div>
    </>
  )
}

export default RoleManagementPage
