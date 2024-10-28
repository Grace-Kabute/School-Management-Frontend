import React from 'react';
import List from '../Components/List';
import '../Components/Components.css'

const subjects = [
  { index: 1, name: 'Math', class: 'Grade 10' },
  { index: 2, name: 'Science', class: 'Grade 11' },
];

const SubjectsList = () => {
  return (
    <div>
      <h2>Subjects</h2>
      <button>New subject</button>
      <List items={subjects} fields={['index', 'name', 'class']} />
    </div>
  );
};

export default SubjectsList;
