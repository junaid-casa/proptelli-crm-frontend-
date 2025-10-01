import React from "react";
import PrimaryButton from "../components/buttons/PrimaryButton";
import SearchInput from "../components/SearchInput ";
import RolesTable from "../components/RolesTable";
import StatCard from "../components/StatCard";
import { Briefcase, Users } from "lucide-react";
const RoleManagementPage = () => {

  return (
    <div className="bg-white">
      <div className="">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Role Management</h1>
          <PrimaryButton
            label="Create Role"
            onClick={() => alert("Create Role Clicked!")}
          />
        </div>

        {/* Stats Cards */}
        <div className="flex gap-4 mb-6">
          <StatCard
            icon={<Briefcase className="text-white" size={40} />}
            title="Roles"
            count={3}
            iconBg="#E6A100"
            onClick={() => console.log("Roles clicked")}
          />
          <StatCard
            icon={<Users className="text-white" size={40} />}
            title="Users"
            count={15}
            iconBg="#4A90E2"
            onClick={() => console.log("Users clicked")}
          />
        </div>

        {/* Showing text */}

        {/* Search Input */}
        <div className="flex justify-between items-center pb-3">
          <div className=" pl-5">
            <p className="text-md font-semibold text-black">Showing 3 out 3</p>
          </div>

          <div className="">
            <SearchInput
              placeholder="Search Roles..."
              onChange={(val) => console.log("Typing:", val)}
              onSubmit={(val) => console.log("Submitted:", val)}
            />
          </div>
        </div>

     
      </div>
    </div>
  );
};

export default RoleManagementPage;
