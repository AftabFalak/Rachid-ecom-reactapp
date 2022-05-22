<<<<<<< HEAD
import './App.css';
import ProductDetail from './components/ProductDetail/ProductDetail';
import NavbarTop from './components/NavbarTop/NavbarTop'
import NavbarBottom from './components/NavbarBottom/NavbarBottom'
import { useState } from 'react';
import MainDrawer from './components/MainDrawer/MainDrawer';
import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
=======
/* eslint-disable react/jsx-no-undef */
import "./App.css";

import NavbarBottom from "./components/NavbarBottom/NavbarBottom";

import VenderProfile from "./components/VenderProfile/VenderProfile";
>>>>>>> vender-profile

function App() {

  const [open, setOpen] = useState({ drawerOpen: false })


  const setDrawerOpen = (isDrawerOpen) => {
    setOpen({
      drawerOpen: isDrawerOpen
    })
  }

  const toggleDrawer = () => {
    setOpen((pstate) => ({ drawerOpen: !pstate.drawerOpen }))
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: red[500],
      },
    },
  });

  return (
    <div className="App">
<<<<<<< HEAD
      <ThemeProvider theme={theme}>
        <NavbarBottom toggleDrawer={toggleDrawer} />
        {/* <NavbarTop/> */}
        {/* <ProductDetail /> */}
        {open.drawerOpen&&<MainDrawer open={open.drawerOpen} setDrawertoggle={setDrawerOpen} />}
        </ThemeProvider>
=======
      <NavbarBottom />
       
        <VenderProfile />
   

>>>>>>> vender-profile
    </div>
  );
}

export default App;
