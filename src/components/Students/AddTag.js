import React, { useRef } from 'react';

const AddTag = ({ tags, setTags, styles }) => {
  const tagRef = useRef();
  
  function handleTagChange(e) {
    if (e.key === 'Enter') {
      const tag = tagRef.current.value;
      tagRef.current.value = "";
      setTags([...tags, tag])
    }
  }

  return (
    <input
      ref={tagRef}
      style={styles}
      className="addTag"
      placeholder="Add a tag"
      onKeyPress={handleTagChange}
    />
  );
};

export default AddTag;