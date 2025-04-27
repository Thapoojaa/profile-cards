// src/App.js
import React from 'react';
import ProfileCard from './ProfileCard';

function App() {
  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)',
    padding: '40px'
  };

  return (
    <div style={containerStyle}>
      <ProfileCard 
        name="Alice" 
        age={25} 
        bio="Loves hiking and outdoor adventures." 
        image="https://randomuser.me/api/portraits/women/68.jpg" 
      />
      <ProfileCard 
        name="Bob" 
        age={30} 
        bio="A passionate web developer." 
        image="https://randomuser.me/api/portraits/men/22.jpg" 
      />
      <ProfileCard 
        name="Charlie" 
        age={28} 
        bio="Enjoys painting and music." 
        image="https://randomuser.me/api/portraits/men/43.jpg" 
      />
      <ProfileCard 
        name="Diana" 
        age={22} 
        bio="Fitness enthusiast and traveler." 
        image="https://randomuser.me/api/portraits/women/44.jpg" 
      />
      <ProfileCard 
        name="Ethan" 
        age={35} 
        bio="Coffee lover and bookworm." 
        image="https://randomuser.me/api/portraits/men/53.jpg" 
      />
    </div>
  );
}

export default App;
