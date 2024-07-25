import { useState } from "react";
import {
  FaChartPie,
  FaUser,
  FaCalendarAlt,
  FaFolder,
  FaCog,
  FaChevronLeft,
  FaChevronRight,
  FaAngleDown,
  FaAngleUp,
} from "react-icons/fa";
import logo from '../assets/logo.webp';

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);

  const Menus = [
    { title: "Projects", icon: <FaChartPie /> },
    {
      title: "Accounts",
      icon: <FaUser />,
      gap: true,
      submenu: [
        { title: "Profile" },
        { title: "Settings" },
        { title: "Logout" },
      ],
    },
    { title: "Schedule", icon: <FaCalendarAlt /> },
    { title: "Files", icon: <FaFolder />, gap: true },
    { title: "Setting", icon: <FaCog /> },
  ];

  return (
      <div
        className={`${
          open ? "w-[400px] md:w-72" : "w-20"
        } bg-dark-purple  p-5 pt-8 relative duration-300 md:duration-500`}
      >
        <div
          className={`absolute cursor-pointer -right-2 top-9 w-[20px] 
             bg-white border-2 rounded-full flex items-center justify-center`}
          onClick={() => setOpen(!open)}
        >
          {open ? <FaChevronLeft size={16} /> : <FaChevronRight size={16} />}
        </div>
        <div className="flex gap-x-4 items-center">
          <img
            src={logo}
            alt="profile"
            className="rounded-full w-10 h-10"
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            username
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li key={index} className="flex flex-col">
              <div
                className={`flex justify-between rounded-md p-2 cursor-pointer
                     hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"}`}
                onClick={() => {
                  if (Menu.submenu) {
                    setShowDropdown(!showDropdown);
                  }
                }}
              >
                <div className="flex items-center gap-x-4">
                  {Menu.icon}
                  <span className={`${!open && "hidden"} origin-left duration-200`}>
                    {Menu.title}
                  </span>
                </div>
                {Menu.submenu && (
                  <div className={`${!open && "hidden"} 
                  origin-left duration-200`}>
                    {showDropdown ? <FaAngleUp /> : <FaAngleDown />}
                  </div>
                )}
              </div>
              {Menu.submenu && showDropdown && (
                <ul className={`pl-7 mt-2 flex flex-col items-start 
                ${open ? "block" : "hidden"}`}>
                  {Menu.submenu.map((submenuItem, subIndex) => (
                    <li
                      key={subIndex}
                      className="text-gray-300 text-sm py-1 cursor-pointer hover:bg-light-white rounded-md p-3 mb-3"
                    >
                      {submenuItem.title}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
  );
};

export default Sidebar;
