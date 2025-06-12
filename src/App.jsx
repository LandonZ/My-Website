import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomeScreen from './components/pages/HomeScreen';
import Projects from './components/pages/Projects';
import Profile from './components/pages/Profile';

function App() {
  const basePath = '/my-website';
  
  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path={`${basePath}/`} element={<HomeScreen />} />
          <Route path={`${basePath}/profile`} element={<Profile />} />
          <Route path={`${basePath}/projects`} element={<Projects />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
