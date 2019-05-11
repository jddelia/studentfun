import React, { useState, useEffect } from 'react';
import axios from 'axios';

import StudentContainer from './components/Students/StudentContainer';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("https://www.hatchways.io/api/assessment/students");
      await setData(response.data.students);
    }

    fetchData();
  }, []);

  return (
    <div className="container">
      <StudentContainer students={data} />
    </div>
  );
}

export default App;
