  import React from 'react';
  import styled from 'styled-components';
  import Nav from './components/Nav/Nav';
 
import Crewtable from './components/Crewtable';
import CrewDetails from './components/CrewDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';

  function App() {

    return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="crew" element={ <Crewtable/> } />
          <Route path="crewmate/:id" element={ <CrewDetails/> } />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
    );
  }

  export default App;
