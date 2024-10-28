import React from 'react'
import Card from '../Components/Card';


const Dashboard = () => {
  const cardsData = [
    {
      title: 'Number of students:',
      number: 950,
    },
    {
      title: 'Number of teacers:',
      number: 50,
    },
    {
      title: 'Average attendance:',
      number: '89%',
    }
  ];
  return (
    <div className="dashboard">
      {cardsData.map((card, index) => (
        <Card key={index} icon={card.icon} title={card.title} number={card.number} />
      ))}
    </div>
  );
}

export default Dashboard