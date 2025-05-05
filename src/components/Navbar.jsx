import { useState } from 'react';
import { Bell } from 'lucide-react';
import Logo from '../assets/OIP.jpeg'

const Navbar = () => {
  const tabs = ["Dashboard", "Roster", "Communications", "CRM", "Contracts", "Settings", "More"];
  const [activeTab, setActiveTab] = useState("CRM");  

  return (
    <nav className="flex items-center justify-between bg-white px-4 py-2 shadow-sm">
     
      <div className="flex items-center gap-2">
        <img
          src={Logo} 
          alt="Logo"
          className="h-6 w-6"
        />
        <div className="leading-tight">
          <div className="text-xs font-semibold text-gray-900">ROSTER</div>
          <div className="text-xs font-bold text-blue-700">GRID</div>
        </div>
      </div>

       
      <ul className="flex space-x-3 rounded-full bg-gray-100 px-4 py-1 text-sm font-medium text-gray-700">
        {tabs.map((tab) => (
          <li
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`cursor-pointer px-3 py-1 rounded-full transition-all duration-200 ${
              activeTab === tab
                ? "bg-blue-600 text-white"
                : "hover:text-black"
            }`}
          >
            {tab} <span className="text-xs">▼</span>
          </li>
        ))}
      </ul>

       
      <div className="flex items-center gap-4">
        <Bell className="h-5 w-5 text-gray-700" />
        <span className="text-sm font-medium text-gray-800">Michael</span>
        <div className="h-7 w-7 flex items-center justify-center rounded-full bg-red-500 text-white text-sm font-semibold">
          M
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
