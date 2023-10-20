import React from 'react';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* <Header />
      <Body /> */}
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/body" element={<Body />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
