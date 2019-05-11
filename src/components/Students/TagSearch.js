import React, { useRef } from 'react';

const TagSearch = ({ setTagFilter }) => {
  const tagSearchRef = useRef();

  function handleTagSearch() {
    setTagFilter(tagSearchRef.current.value);
  }

  return (
    <div className="studentSearch">
      <input
        ref={tagSearchRef}
        className="searchFilter"
        placeholder="Search by tag"
        onChange={handleTagSearch}
      />
    </div>
  );
};

export default TagSearch;