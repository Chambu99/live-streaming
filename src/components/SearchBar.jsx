import React from 'react';

const SearchBar = ({ setSearchTerm }) => (
  <div className="mb-4">
    <input
      type="text"
      placeholder="Search channels..."
      className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white"
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  </div>
);

export default SearchBar;
