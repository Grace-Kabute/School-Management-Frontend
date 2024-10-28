import React from 'react';
import List from '../Components/List';
import '../Components/Components.css'

const teachers = [
  { index: 1, name: 'Mr. Green', class: 'Math', contact: 'green@example.com' },
  { index: 2, name: 'Ms. Brown', class: 'Science', contact: 'brown@example.com' },
];

const TeachersList = () => {
  return (
    <div>
      <h2>Teachers</h2>
      <button>New Teacher</button>
      <List items={teachers} fields={['index', 'name', 'class', 'contact']} />
    </div>
  );
};

export default TeachersList;
