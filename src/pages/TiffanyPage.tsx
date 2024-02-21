import React from 'react';
import { Link } from 'react-router-dom';
import TiffanyImage from '/Users/tiffanywang/Desktop/react-team-site-w24/src/assets/images/tiffanydog.png';

const TiffanyPage: React.FC = () => {
  return (
    <div style={pageStyle}>
      <h1>Tiffany's Page</h1>
      <div style={containerStyle}>
        <h2>About me!</h2>
        <p>2nd year, Comp Bio Major</p>
        <p>I have a shiba named Yuka!</p>
        <img src={TiffanyImage} alt="tiffany" style={imageStyle} />
        <p>Boba order(from Sunright): Grapefruit Jasmine Green Tea w/ Honey Boba (0 sugar, less ice)</p>
      </div>
      <Link to="/" style={buttonStyle}>Back to home page</Link>
    </div>
  );
}

export default TiffanyPage;

const pageStyle = {
  padding: '20px',
  backgroundColor: '#a7c957', // https://coolors.co/palettes/trending
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontFamily: 'Helvetica, sans-serif',
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