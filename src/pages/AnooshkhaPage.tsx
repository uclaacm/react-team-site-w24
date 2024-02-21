import React from 'react';

const AnooshkhaPage = () => {
  return (
    <div style={pageStyle}>
      <h1>Welcome to Anooshkha's Page</h1>
      <div style={containerStyle}>
        <img src="../assets/images/anooshkha.svg" alt="Anooshkha" style={imageStyle} />
        <div style={contentStyle}>
          <h2>Facts About Anooshkha</h2>
          <p><strong>Home Town:</strong> Bay Area</p>
          <p><strong>Major:</strong> Math of Comp</p>
          <p><strong>Fun Fact:</strong> My favorite color is green!</p>
        </div>
      </div>
    </div>
  );
}

export default AnooshkhaPage;

const pageStyle = {
  padding: '20px',
  backgroundColor: '#a7c957', //https://coolors.co/palettes/trending
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontFamily: 'Arial, sans-serif',
};

const containerStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  marginTop: '20px',
};

const imageStyle = {
  width: '200px',
  height: 'auto',
};

const contentStyle = {
  color: '#333',
  marginTop: '20px',
};
