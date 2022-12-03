import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <Container fluid className='px-0'>
      <Home/>
    </Container>
  );
}

export default App;
