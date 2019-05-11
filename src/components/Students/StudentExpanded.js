import React, { useState, useEffect, useContext } from 'react';

import AddTag from './AddTag';
import Tag from './Tag';

import TagsContext from '../../contexts/TagsContext';

const expandedStyles = {
  displayExpanded: {
    display: "grid"
  },
  hideExpanded: {
    display: "none"
  }
}

const StudentGrades = ({ grades, showMore, setShowCard }) => {
  const [tags, setTags] = useState([]);

  const tagFilter = useContext(TagsContext);

  useEffect(() => {

    const tagsString = tags.join(" ");

    if (tagFilter && !tagsString.toLowerCase().includes(tagFilter.toLowerCase())) {
      setShowCard(false);
    } else {
      setShowCard(true)
    }
  }, [tagFilter])

  const gradesList = grades.map((grade, index) => {
    return (
      <div key={index}>
        <span className="testNumber">Test {index + 1}:</span>
        <span className="gradeText">{grade}%</span>
      </div>
    );
  });

  const expandedStyle = showMore ? expandedStyles.displayExpanded : expandedStyles.hideExpanded;

  const tagsList = tags.map((tag, index) => {
    return (
      <Tag key={index} name={tag} />
    );
  });

  return (
    <div className="studentExpanded">
      <div className="grades" style={expandedStyle}>
        {gradesList}
      </div>

      <div className="tagList" style={expandedStyle}>
        {tagsList}
      </div>

      <AddTag
        tags={tags}
        setTags={setTags}
        styles={expandedStyle} 
      />
    </div>
  );
};

export default StudentGrades;