// src/ProfileCard.js
import React from 'react';

function ProfileCard({ name, age, bio, image }) {
  const sayHi = () => {
    console.log(`Hi from ${name}!`);
  };

  const cardStyle = {
    background: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
    borderRadius: '20px',
    padding: '30px',
    textAlign: 'center',
    width: '300px',
    margin: '20px',
    boxShadow: '0px 10px 20px rgba(0,0,0,0.2)',
    transition: 'transform 0.3s ease',
    color: '#333',
  };

  const cardHoverStyle = {
    transform: 'scale(1.05)'
  };

  const imageStyle = {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '20px',
    border: '5px solid white',
    boxShadow: '0px 5px 15px rgba(0,0,0,0.3)',
  };

  const buttonStyle = {
    marginTop: '15px',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#ff6b81',
    color: 'white',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    boxShadow: '0px 5px 10px rgba(0,0,0,0.2)',
    transition: 'background-color 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: '#ff4757'
  };

  const [hover, setHover] = React.useState(false);
  const [btnHover, setBtnHover] = React.useState(false);

  return (
    <div 
      style={hover ? {...cardStyle, ...cardHoverStyle} : cardStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={image} alt={name} style={imageStyle} />
      <h2>{name}</h2>
      <p style={{ fontSize: '18px', margin: '10px 0' }}>Age: {age}</p>
      <p style={{ fontSize: '16px', fontStyle: 'italic' }}>{bio}</p>
      <button 
        style={btnHover ? {...buttonStyle, ...buttonHoverStyle} : buttonStyle}
        onClick={sayHi}
        onMouseEnter={() => setBtnHover(true)}
        onMouseLeave={() => setBtnHover(false)}
      >
        Say Hi
      </button>
    </div>
  );
}

export default ProfileCard;
