  import React from 'react';
  import styled from 'styled-components';
 
import Crewtable from './components/Crewtable';
import { Route, Routes } from 'react-router-dom';

  function App() {

    return (
      <>

    <div className="App">
      <Routes>
        <Route path="/crew" element={ <Crewtable/> } />
      </Routes>
    </div>
  

    </>
    );
  }

  export default App;
