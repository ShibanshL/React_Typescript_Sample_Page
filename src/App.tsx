import React, { useContext, useState } from 'react';
// import './App.css';
import Pretest from './Component/Pretest';
import Test from './Component/Test'
import { AppShell,Center,Container,Footer,Header, Navbar } from '@mantine/core';
import {UserContext} from './UserContext'
import Foot from './Component/Foot';
import Header_M from './Google/Header_M';
import Main from './Google/Main';
import Footer_M from './Google/Footer_M';
import Sub from './React_Query/Sub';
import {QueryClientProvider, QueryClient} from 'react-query'

// function App() {
//   const [log,setLOg] = useState(false)
//   return (
    
//     <div className="App">
//        <AppShell
//       padding={0}
      
//       // footer={}
//       // navbar={<Navbar width={{ base: 300 }} height={500} style={{background:'pink'}}><Header_M /></Navbar>}
//       header={<Header height={60} p='0' m='0' style={{background:'#202124'}}><Header_M /></Header>}
//       footer={<Footer height={30} p='0' m='0' style={{background:'green'}}><Footer_M /></Footer>}
//       styles={(theme) => ({
//         main: { background:'#202124',
//                 backgroundSize:'cover',
//                 backgroundPosition:'fixed',
//                 fontFamily: 'Poppins, sans-serif' },
//       })}>
//           <Container size={1980} p='0' mt='-22px' style={{background:'#202124'}}><Main /></Container>
//           {/* <Container size={1980} style={{}}><Pretest /></Container>
//           // <Footer height={118} p='10px' style={{background:'none'}}><Foot /></Footer> */}

            
//     </AppShell>
//     </div>
//   );
// }

const reactQuery = new QueryClient()


const App = () => {

  return(
    <QueryClientProvider client={reactQuery}>
      <>
        <Sub />
      </>
    </QueryClientProvider>
  )

}

export default App;
