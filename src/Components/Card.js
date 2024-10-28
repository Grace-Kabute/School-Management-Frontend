import React from 'react'
import Icon from '../Components/Icon'


const Card = ({title, number }) => {
    return (
        <div className="card">
          <div className="icon">
          <Icon name="student" />
          </div>
          <h3>{title}</h3>
          <h2>{number}</h2>
        </div>
      );
}

export default Card