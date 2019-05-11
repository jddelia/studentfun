import React, { useRef } from 'react';

const StudentSearch = ({ setSearchFilter }) => {
  const searchRef = useRef();

  function handleSearchFilter() {
    setSearchFilter(searchRef.current.value);
  }

  return (
    <div className="studentSearch">
      <input
        ref={searchRef}
        className="searchFilter"
        placeholder="Search by name"
        onChange={handleSearchFilter}
      />
    </div>
  );
};

export default StudentSearch;