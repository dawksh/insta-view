import React from 'react';
import ProfilePic from './components/profilePicView'
import './App.css';

function App() {
  return (
    <div className="App-header">
      <h1 className="header">Insta View</h1>
      <h4 className="howToHead">How to use?</h4>
      <p className="howToDesc">In the input field below, type in the username of the person whose profile picture you are trying to find. Click on the get button and it will open a new tab with the picture. Long press if you are on phone or right-click on the image and download that image.</p>
      <ProfilePic />
    </div>
  );
}

export default App;
