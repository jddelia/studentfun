import React, { useState, useEffect } from 'react';

import StudentSearch from './StudentSearch';
import StudentCard from './StudentCard';
import TagSearch from './TagSearch';

import TagsContext from '../../contexts/TagsContext';

const StudentContainer = ({ students }) => {
  const [searchFilter, setSearchFilter] = useState("");
  const [tagFilter, setTagFilter] = useState("");
  const [studentsArray, setStudentsArray] = useState([]);

  useEffect(() => {
    async function handleStudentsArray() {
      if (students) {
        await setStudentsArray(getStudents());
      }
    }

    handleStudentsArray();
  }, [students, searchFilter, tagFilter]);

  function getStudents() {
    let searchFilteredStudents = students.filter(student => {
      const fullName = `${student.firstName} ${student.lastName}`;
      return fullName.toLowerCase().includes(searchFilter.toLowerCase());
    })

    let studentList = searchFilteredStudents.map(student => {
      function gradesAvg(grades) {
        let res = grades.reduce((acc, current) => parseInt(acc) + parseInt(current), 0);
        return res / grades.length;
      }

      const avg = gradesAvg(student.grades);

      return (
        <StudentCard
          key={student.id}
          fName={student.firstName}
          lName={student.lastName}
          studentImg={student.pic}
          email={student.email}
          company={student.company}
          skill={student.skill}
          avg={avg}
          grades={student.grades}
          tagFilter={tagFilter}
        />
      );
    });

    return studentList;
  }

  return (
    <TagsContext.Provider value={tagFilter}>
      <div className="studentContainer">
        <StudentSearch setSearchFilter={setSearchFilter} />
        <TagSearch setTagFilter={setTagFilter} />
        {studentsArray}
      </div>
    </TagsContext.Provider>
  );
};

export default StudentContainer;