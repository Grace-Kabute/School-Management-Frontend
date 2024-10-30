import React, { useState } from 'react';
import List from '../Components/List';

const AttendanceList = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', class: '10A', isPresent: false },
    { id: 2, name: 'Jane Smith', class: '10B', isPresent: false },
    { id: 3, name: 'Alex Johnson', class: '10A', isPresent: false },
  ]);

  const fields = ['name', 'class', 'attendance'];

  const handleAttendanceChange = (id) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id ? { ...student, isPresent: !student.isPresent } : student
      )
    );
  };

  return (
    <div className='wrapper'>
      <div className="container">
        <h2>Student Attendance List</h2>
        <button>Update</button>
      </div>
      <List items={students} fields={fields} onAttendanceChange={handleAttendanceChange} />
    </div>
  );
};

export default AttendanceList;