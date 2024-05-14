import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navigation } from './components/Navigation/Navigation';
import './App.scss'
import { UserActiveTaskPage, UserMainPage, UserTaskPage } from './pages/UserPages';
import { useSelector } from 'react-redux';
import { IStoreState } from './types';
import { Authorization } from './components';
import { AuthPage } from './pages/AuthPage';
import { AdminMainPage, AdminSettingPage } from './pages/AdminPage';
import { AdminAddTaskPage } from './pages/AdminPage/AdminAddTaskPage';

function App() {
  const links = useSelector((state: IStoreState) => state.ui.linksStatus)
  const user = useSelector((state: IStoreState) => state.user.user)
  const [loggedIn, setLoggedIn] = useState(false);
  const isAuthorized = !!user?.id;

  return (
    <BrowserRouter>
    {isAuthorized && <Navigation/>}
    <div className="App">
    <Routes>
            <Route path="/">
            <Route index element={<AuthPage/>} />
                <Route
                  path="mainWindow"
                  element={
                    isAuthorized ? <AdminMainPage/> : <Navigate to="/sign-in" />
                  }
                />
                <Route path="task">
                <Route
                  path=":taskId"
                  element={
                    isAuthorized ? <UserActiveTaskPage /> : <Navigate to="/sign-in" />
                  }
                />
                </Route>
                <Route
                  path="taskWindow"
                  element={
                    isAuthorized ? <UserTaskPage/> : <Navigate to="/sign-in" />
                  }
                />
                <Route
                  path="newTaskWindow"
                  element={
                    isAuthorized ? <AdminAddTaskPage/> : <Navigate to="/sign-in" />
                  }
                />
                <Route
                  path="settingWindow"
                  element={
                    isAuthorized ? <AdminSettingPage/> : <Navigate to="/sign-in" />
                  }
                />
      <Route path="sign-in">
                <Route index element={<AuthPage/>} />
              </Route>
      </Route>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
