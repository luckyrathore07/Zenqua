import { useState } from 'react';
import { Bell, Menu, X } from 'lucide-react';
import Logo from '../assets/OIP.jpeg';

const Navbar = () => {
  const tabs = ["Dashboard", "Roster", "Communications", "CRM", "Contracts", "Settings", "More"];
  const [activeTab, setActiveTab] = useState("CRM");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="flex items-center justify-between px-4 py-2 md:px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="h-6 w-6" />
          <div className="leading-tight">
            <div className="text-xs font-semibold text-gray-900">ROSTER</div>
            <div className="text-xs font-bold text-blue-700">GRID</div>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-3 rounded-full bg-gray-100 px-4 py-1 text-sm font-medium text-gray-700">
          {tabs.map((tab) => (
            <li
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer px-3 py-1 rounded-full transition-all duration-200 ${
                activeTab === tab ? "bg-blue-600 text-white" : "hover:text-black"
              }`}
            >
              {tab} <span className="text-xs">▼</span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <X className="h-5 w-5 text-gray-700" />
            ) : (
              <Menu className="h-5 w-5 text-gray-700" />
            )}
          </button>
        </div>

        {/* Profile Section */}
        <div className="hidden md:flex items-center gap-4">
          <Bell className="h-5 w-5 text-gray-700" />
          <span className="text-sm font-medium text-gray-800">Michael</span>
          <div className="h-7 w-7 flex items-center justify-center rounded-full bg-red-500 text-white text-sm font-semibold">
            M
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-2 text-sm font-medium text-gray-700">
          {tabs.map((tab) => (
            <li
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setIsMobileMenuOpen(false);
              }}
              className={`cursor-pointer px-3 py-2 rounded-lg transition-all duration-200 ${
                activeTab === tab ? "bg-blue-600 text-white" : "hover:bg-gray-200"
              }`}
            >
              {tab}
            </li>
          ))}

          {/* Mobile Profile Section */}
          <div className="flex items-center justify-between pt-4 border-t">
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 flex items-center justify-center rounded-full bg-red-500 text-white text-sm font-semibold">
                M
              </div>
              <span className="text-sm font-medium text-gray-800">Michael</span>
            </div>
            <Bell className="h-5 w-5 text-gray-700" />
          </div>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
