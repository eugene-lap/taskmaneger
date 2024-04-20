import React from 'react';
import { Navigation } from './components/Navigation/Navigation';
import './App.scss'
import { UserMainPage } from './pages/UserPages';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <UserMainPage/>
    </div>
  );
}

export default App;
