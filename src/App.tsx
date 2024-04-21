import React from 'react';
import { Navigation } from './components/Navigation/Navigation';
import './App.scss'
import { UserMainPage, UserTaskPage } from './pages/UserPages';
import { useSelector } from 'react-redux';
import { IStoreState } from './types';

function App() {
  const links = useSelector((state: IStoreState) => state.ui.linksStatus)
  return (
    <div className="App">
      <Navigation/>
      {links === 'mainWindow' && <UserMainPage/>}
      {links === 'taskWindow' && <UserTaskPage/>}
    </div>
  );
}

export default App;
