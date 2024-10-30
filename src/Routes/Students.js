import React from 'react';
import List from '../Components/List';
import '../Components/Components.css'
import './Routes.css'

const students = [
  { index: 1, name: 'Alice Johnson', class: 'Grade 10', contact: 'alice@example.com', gender: 'male' },
  { index: 2, name: 'Bob Smith', class: 'Grade 11', contact: 'bob@example.com',gender: 'female' },
];

const StudentsList = () => {
  return (
    <div className='wrapper'>
      <div class="container">
        <h2>Students</h2>
        <button>New Student</button>
      </div>
      <List items={students} fields={['index', 'name', 'class', 'contact','gender']} />
    </div>
  );
};

export default StudentsList;
