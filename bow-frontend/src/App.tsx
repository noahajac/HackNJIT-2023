  import React from 'react';
  import styled from 'styled-components';
  import Nav from './components/Nav/Nav';
 
import Crewtable from './components/Crewtable';
import { Route, Routes } from 'react-router-dom';

  function App() {

    return (
      <>
        <Nav />
    <div className="App">
      <Routes>
        <Route path="/crew" element={ <Crewtable/> } />
      </Routes>
    </div>
  

    </>
    );
  }

  export default App;
