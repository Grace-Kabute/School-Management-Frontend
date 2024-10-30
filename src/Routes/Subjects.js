import React, { useState } from 'react';
import List from '../Components/List';
import SubjectModal from '../Components/SubjectModal';


const SubjectsList = () => {
  const [subjects, setSubjects] = useState([
    { index: 1, name: 'Math', class: 'Grade 10' },
    { index: 2, name: 'Science', class: 'Grade 11' },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
    
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  const addSubject = (newSubject) => {
    setSubjects([...subjects, newSubject]);
  };
  return (
    <div className='wrapper'>
      <div className="container">
        <h2>Subjects</h2>
        <button onClick={openModal}>New subject</button>
      </div>
      <List items={subjects} fields={['index', 'name', 'class']} />
      <SubjectModal isOpen={isModalOpen} onRequestClose={closeModal} onAddSubject={addSubject} />
    </div>
  );
};

export default SubjectsList;
