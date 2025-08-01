import { FaSearch } from "react-icons/fa";

export function SearchFilter() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 py-6 gap-6">
      
      {/* Search Input */}
      <div style={{
        backgroundColor: "var(--lightbackground)",
        color: "var(--foreground)",
      }} className="flex items-center bg-white rounded-md shadow-md px-4 py-2 w-full sm:w-96">
        <FaSearch className="text-gray-50 mr-3" style={{
        backgroundColor: "var(--darkbackground)",
        color: "var(--foreground)",
      }} />
        <input
        style={{
          
          color: "var(--foreground)",
        }} 
          type="text"
          placeholder="Search for a country..."
          className="w-full outline-none text-sm"
        />
      </div>

      {/* Region Dropdown */}
      <div style={{
        backgroundColor: "var(--lightbackground)",
        color: "var(--foreground)",
      }} className="bg-white rounded-md shadow-md px-4 py-2 w-48 cursor-pointer text-sm text-gray-800">
        <select className="w-full bg-transparent outline-none">
          <option>Filter by Region</option>
          <option>Africa</option>
          <option>Americas</option>
          <option>Asia</option>
          <option>Europe</option>
          <option>Oceania</option>
        </select>
      </div>
      
    </div>
  );
}
