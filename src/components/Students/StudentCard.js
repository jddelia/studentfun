import React, { useState } from 'react';

import StudentExpanded from './StudentExpanded';

const StudentCard = ({ 
  studentImg, email, company, skill, avg, 
  fName, lName, grades

}) => {
  const [showMore, setShowMore] = useState(false);
  const [showCard, setShowCard] = useState(true);

  const plusOrMinus = showMore ? (
    <span className="showMore" onClick={() => setShowMore(!showMore)}>
      <i className="fas fa-minus"></i>
    </span>
  ) : (
    <span className="showMore" onClick={() => setShowMore(!showMore)}>
      <i className="fas fa-plus"></i>
    </span>
  );

  const cardDisplay = showCard ? { display: 'grid' } : { display: 'none' };

  return (
    <div className="studentCard" style={cardDisplay}>
      <div className="studentImg">
        <img className="studentPic" src={studentImg} alt="profile pic" />
      </div>

      <div className="studentDetails">
        <div className="fullName">
          <span className="fullNameText">{`${fName} ${lName}`}</span>
          <span className="showMore">
            {plusOrMinus}
          </span>
        </div>

        <div className="subDetails">
          <span className="detail">Email: {email}</span>
          <span className="detail">Company: {company}</span>
          <span className="detail">Skill: {skill}</span>
          <span className="detail">Average: {avg}%</span>
        </div>

        <StudentExpanded
          grades={grades}
          showMore={showMore}
          setShowCard={setShowCard}
        />
      </div>
    </div>
  );
};

export default StudentCard;