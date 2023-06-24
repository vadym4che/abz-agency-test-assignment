import React, { useEffect, useState } from 'react';
import './User.css';
import defaultImage from '../../assets/defaulUser.svg';

const TEMP = {
  "id": 16580,
  "name": "asdasd",
  "email": "g@gmail.com",
  "phone": "+380507381111",
  "position": "Content manager",
  "position_id": 2,
  "registration_timestamp": 1687505535,
  "photo": "https://frontend-test-assignment-api.abz.agency/images/users/64954a7f46da916580.jpg"
};

const User = ({ user = TEMP }) => {
  const { email, position, phone, photo } = user;

  const [imageSrc, setImageSrc] = useState(photo);

  const handleImageError = () => {
    setImageSrc(defaultImage);
  };

  const containerStyle = {
    display: 'grid',
    gap: '20px',
    gridTemplateRows: '3',
    justifyContent: 'center',
    padding: '20px',
  };

  return (
    <div className='user user-card-grid' style={containerStyle} >
      <p>
        <img
          src={imageSrc}
          alt={position}
          className='user-photo'
          onError={handleImageError}
        />
      </p>
      <p className='p1 overflow'>{ position }</p>
      <p className='p1 overflow'>{ email }</p>
      <p className='p1 overflow'>{ phone }</p>
    </div>
  );
}

export default User