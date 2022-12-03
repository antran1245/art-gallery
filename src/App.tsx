import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Location from './components/Location';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Container fluid className='px-0'>
        <Routes>
          <Route path="" element={<Home/>}/>
          <Route path="location" element={<Location/>}/>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
