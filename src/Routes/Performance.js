import React from 'react';
import List from '../Components/List';


const students = [
  { index: 1, name: 'Alice Johnson', class: 'Grade 10', openerExam: 337, midTerm: 350, EndTerm: 360  },
  { index: 2, name: 'Bob Smith', class: 'Grade 11', openerExam: 337, midTerm: 350, EndTerm: 360 },
  { index: 2, name: 'Bob Smith', class: 'Grade 11', openerExam: 397, midTerm: 420, EndTerm: 380 },
];

const studentsWithAverage = students.map((student) => ({
  ...student,
  average: ((student.openerExam + student.midTerm + student.EndTerm) / 3),
}));

const Performance = () => {
  return (
    <div className='wrapper'>
      <div className='container'>
        <h2>Performance</h2>
        <button>Update</button>
      </div>
      <List items={studentsWithAverage} fields={['index', 'name','openerExam','midTerm', 'EndTerm', 'average']} />
    </div>
  );
};

export default Performance;