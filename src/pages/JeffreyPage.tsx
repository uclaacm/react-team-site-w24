import React from 'react';
import { Link } from 'react-router-dom';
import JeffreyImage from '../assets/images/jeffrey.jpg';

const JeffreyPage = () => {
  return (
    <div style={pageStyle}>
      <h1>Welcome to Jeffrey's Page</h1>
      <div style={containerStyle}>
        <img src={JeffreyImage} alt="Jeffrey" style={imageStyle} />
        <div style={contentStyle}>
          <h2>Facts About Jeffrey</h2>
          <p><strong>Home Town:</strong> Memphis</p>
          <p><strong>Major:</strong> Computer Science</p>
          <p><strong>Fun Fact:</strong> I like to play tennis!</p>
          <Link to="/" style={buttonStyle}>Back to home page</Link>
        </div>
      </div>
    </div>
  );
}

export default JeffreyPage;

const pageStyle = {
  padding: '20px',
  backgroundColor: '#8ecae6', // https://coolors.co/palettes/trending
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

const buttonStyle = {
  marginTop: '20px',
  padding: '10px 20px',
  backgroundColor: '#333',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  textDecoration: 'none',
};
