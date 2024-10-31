import React from 'react';
import List from '../Components/List';

const students = [
  { index: 1, name: 'Alice Johnson', class: 'Grade 6', openerExam: 337, midTerm: 350, EndTerm: 360  },
  { index: 2, name: 'Bob Smith', class: 'Grade 6', openerExam: 337, midTerm: 350, EndTerm: 360 },
  { index: 3, name: 'Wise Duho', class: 'Grade 6', openerExam: 397, midTerm: 420, EndTerm: 380 },
  { index: 4, name: 'Kabute Grace', class: 'Grade 6', openerExam: 397, midTerm: 420, EndTerm: 380 },
  { index: 5, name: 'Mercy Joe', class: 'Grade 6', openerExam: 397, midTerm: 420, EndTerm: 380 },
];

const studentsWithAverage = students.map((student) => ({
  ...student,
  average: ((student.openerExam + student.midTerm + student.EndTerm) / 3),
}));

const Performance = () => {
  const updatePerformance = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/grades', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(studentsWithAverage),
      });
      if (response.ok) {
        alert("Data updated successfully!");
      } else {
        console.error("Failed to update data");
      }
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <div className='wrapper'>
      <div className='container'>
        <h2>Performance</h2>
        <button onClick={updatePerformance}>Update</button>
      </div>
      <List items={studentsWithAverage} fields={['index', 'name','openerExam','midTerm', 'EndTerm', 'average']} />
    </div>
  );
};

export default Performance;
