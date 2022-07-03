import React, { useContext, useState } from 'react';
// import './App.css';
import Pretest from './Component/Pretest';
import Test from './Component/Test'
import { AppShell,Center,Container,Footer } from '@mantine/core';
import {UserContext} from './UserContext'
import Foot from './Component/Foot';
function App() {
  const [log,setLOg] = useState(false)
  return (
    
    <div className="App">
       <AppShell
      padding={0}
      // footer={}
      styles={(theme) => ({
        main: { background:'url(https://www.freepsdbazaar.com/wp-content/uploads/2020/06/stbd/new-bg/digital-background-7.jpg)',
                backgroundSize:'cover',
                backgroundPosition:'fixed' },
      })}>
          <Container size={1980} style={{}}><Test /></Container>
          <Container size={1980} style={{}}><Pretest /></Container>
          <Footer height={118} p='10px' style={{background:'none'}}><Foot /></Footer>

            
    </AppShell>
    </div>
  );
}

export default App;
