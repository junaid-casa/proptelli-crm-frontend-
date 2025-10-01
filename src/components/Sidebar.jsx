
import { SidebarMenuButton } from "./buttons/SidebarMenuButton";
import { SidebarDropdownButton } from "./buttons/SidebarDropdownButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
 const [activeIndex, setActiveIndex] = useState(0);
   const navigate = useNavigate();

  const menuItems = [
    { icon: "src/assets/icons/dashboard.svg", label: "Dashboard", path: "/" },
    { icon: "src/assets/icons/channel.svg", label: "Channel Partners", path: "/channel-partners" },
    { icon: "src/assets/icons/users.svg", label: "Leads", path: "/leads" },
    { icon: "src/assets/icons/bdm.svg", label: "BDM", path: "/bdm" },
    { icon: "src/assets/icons/roles.svg", label: "Roles", path: "/roles", active: true },
  ];

  const appSubmenu = [
    { icon: "src/assets/icons/tutorial.svg", label: "Tutorials", path: "/tutorials" },
    { icon: "src/assets/icons/list.svg", label: "Requirement List", path: "/requirement-list" },
    { icon: "src/assets/icons/analytics.svg", label: "Video Analytics", path: "/video-analytics" },
    { icon: "src/assets/icons/help.svg", label: "Help Requests", path: "/help-requests" },
    { icon: "src/assets/icons/bug.svg", label: "Bugs & Features", path: "/bugs-features" },
    { icon: "src/assets/icons/faq.svg", label: "FAQ's", path: "/faqs" },
  ];

  function onNavigate(path,index){

    setActiveIndex(index)
    navigate(path)
  }

  return (
    <aside className="w-[258px] bg-greywhite border-r border-gray-200 flex flex-col h-full">
      {/* Main Menu */}
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-10">
          {menuItems.map((item, index) => (
            <li key={index}>
              <SidebarMenuButton  active={activeIndex === index} onClick={()=>onNavigate(item.path,index)} label={item.label} icon={item.icon} />
            </li>
          ))}
          {/* App Dropdown */}
         <SidebarDropdownButton
          icon={"src/assets/icons/app.svg"}
          label="App"
          submenuItems={appSubmenu}
          defaultOpen={false}
        />
        </ul>
      </nav>

      {/* Bottom Actions */}
      <div className="px-4 py-4 border-t border-gray-200 space-y-10">
        <SidebarMenuButton label={"Switch User"} icon={"src/assets/icons/switch-user.svg"} />
        <SidebarMenuButton label={"Logout"} icon={"src/assets/icons/logout.svg"} />
      </div>

      {/* Footer */}
      <div className="px-4 py-3 text-center">
        <p className="text-xs text-gray-400">© 2025 Proptelli.COM</p>
      </div>
    </aside>
  );
};

export default Sidebar;
