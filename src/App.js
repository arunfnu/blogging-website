import logo from './logo.svg';
import './App.css';
import { Box } from '@chakra-ui/react';
import Navbar from './components/navbar/Navbar';
import Homepage from './components/homepage/Homepage';

function App() {
  return (
   <>
   <Box  height="500px">
    <Navbar />
    <Homepage />
   </Box>
   
   
   </>
  );
}

export default App;
