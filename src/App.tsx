import React from 'react';
import { Navigation } from './components/Navigation/Navigation';
import './App.scss'
import { UserMainPage } from './pages/UserPages';
import { PersonalArea } from './pages/UserPages/personal-area';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <PersonalArea></PersonalArea>
      {/* <UserMainPage/> */}
    </div>
  );
}

export default App;
