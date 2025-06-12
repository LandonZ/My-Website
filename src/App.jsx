import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomeScreen from './components/pages/HomeScreen';
import Projects from './components/pages/Projects';
import Profile from './components/pages/Profile';

function App() {
  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
