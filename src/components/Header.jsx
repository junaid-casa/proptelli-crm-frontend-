import React from "react";
import UserProfile from "./UserProfile";
import Notifications from "./Notifications";
import HeaderSearch from "./HeaderSearch";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-greywhite shadow-sm w-full flex justify-between">
      <div className="flex items-center pl-60">
        <button onClick={() => navigate("/")} className="pt-12">
          <img width={131} height={45} src={"src/assets/Proptelli_Logo.svg"} />
        </button>
      </div>
      <div className="flex items-center justify-between pt-28 pb-20 pr-74">
        <div className="flex items-center gap-4">
          <HeaderSearch
             placeholder="Search leads, users ..."
            onChange={(val) => console.log("Typing:", val)}
            onSubmit={(val) => console.log("Search submitted:", val)}
          />
          <div className="relative">
            <Notifications onClick={() => alert("notification clicked!")} count={5} />
          </div>

          <div className="relative">
            <UserProfile onClick={() => alert("Profile clicked!")} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
