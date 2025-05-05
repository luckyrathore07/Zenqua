import React, { useState } from "react";
import {sectionedDeals} from './CrmData'


export default function CRM() {
  const [search, setSearch] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const filterDeals = (deals) =>
    deals.filter((deal) => {
      const matchSearch =
        deal.client.toLowerCase().includes(search.toLowerCase()) ||
        deal.dealName.toLowerCase().includes(search.toLowerCase()) ||
        deal.assignee.toLowerCase().includes(search.toLowerCase());
      const matchDate =
        (!fromDate || new Date(deal.date) >= new Date(fromDate)) &&
        (!toDate || new Date(deal.date) <= new Date(toDate));
      return matchSearch && matchDate;
    });

  const totalDeals = Object.values(sectionedDeals).flat().length;
  const totalRevenue = Object.values(sectionedDeals)
    .flat()
    .reduce((sum, deal) => sum + deal.budget, 0);

  const sectionRevenue = {};
  for (const [section, deals] of Object.entries(sectionedDeals)) {
    sectionRevenue[section] = deals.reduce((sum, deal) => sum + deal.budget, 0);
  }

  return (
    <div className="p-6 max-w-[96%] mx-auto bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg min-h-screen">
      <div>
        <div className="flex flex-wrap gap-4 justify-center mb-6">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded px-3 py-2 w-60 shadow"
        />
        <input
          type="date"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
          className="border rounded px-3 py-2 shadow"
        />
        <input
          type="date"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
          className="border rounded px-3 py-2 shadow"
        />
      </div>

      <div className="mb-8 text-center">
        <h2 className="text-xl font-semibold">Total Deals: {totalDeals}</h2>
        <h2 className="text-xl font-semibold">
          Total Revenue: ${totalRevenue.toLocaleString()}
        </h2>
      </div>
      </div>
      

      {Object.entries(sectionedDeals).map(([section, deals]) => {
        const filteredDeals = filterDeals(deals);
        const isOpen = openSections[section];

        return (
          <div key={section} className="mb-4 border rounded-lg shadow-md bg-white">
            <div
              className="cursor-pointer px-6 py-4 bg-blue-100 text-lg font-semibold flex justify-between items-center rounded-t-lg"
              onClick={() => toggleSection(section)}
            >
              <span>
                {section} ({filteredDeals.length} deals, Revenue: $
                {sectionRevenue[section].toLocaleString()})
              </span>
              <span>{isOpen ? "▲" : "▼"}</span>
            </div>

            {isOpen && (
              <div className="overflow-x-auto">
                <table className="w-full table-auto border-collapse">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="border px-4 py-2 text-left">Client</th>
                      <th className="border px-4 py-2 text-left">Deal Name</th>
                      <th className="border px-4 py-2 text-left">Budget</th>
                      <th className="border px-4 py-2 text-left">Assignee</th>
                      <th className="border px-4 py-2 text-left">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredDeals.map((deal, index) => (
                      <tr key={index} className="hover:bg-gray-100">
                        <td className="border px-4 py-2">{deal.client}</td>
                        <td className="border px-4 py-2">{deal.dealName}</td>
                        <td className="border px-4 py-2">${deal.budget}</td>
                        <td className="border px-4 py-2">{deal.assignee}</td>
                        <td className="border px-4 py-2">{deal.date}</td>
                      </tr>
                    ))}
                    {filteredDeals.length === 0 && (
                      <tr>
                        <td colSpan="5" className="text-center py-4">
                          No deals found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}