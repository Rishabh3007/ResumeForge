import React from 'react';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/body" element={<Body />} />
      </Routes>
    </div>
  );
}

export default App;
