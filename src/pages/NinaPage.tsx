import React from 'react';
import { Link } from 'react-router-dom';
import NinaImage from '../assets/images/dog.png';

const NinaPage = () => {
  return (
    <div style={pageStyle}>
      <h1>Welcome to Nina's Page</h1>
      <div style={containerStyle}>
        <img src={NinaImage} alt="Anooshkha" style={imageStyle} />
        <div style={contentStyle}>
          <h2>Facts About Nina</h2>
          <p><strong>Home Town:</strong> Bay Area</p>
          <p><strong>Major:</strong> Computer Engineering</p>
          <p><strong>Fun Fact:</strong> I like to ski and play volleyball!</p>
          <Link to="/" style={buttonStyle}>Back to home page</Link>
        </div>
      </div>
    </div>
  );
}

export default NinaPage;

const pageStyle = {
  padding: '20px',
  backgroundColor: '#77bfa3', // https://coolors.co/palettes/trending
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontFamily: 'Arial, sans-serif',
};

const containerStyle = {
  backgroundColor: '#a9def9',
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

const buttonStyle = {
  marginTop: '20px',
  padding: '10px 20px',
  backgroundColor: '#f694c1',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  textDecoration: 'none',
};
