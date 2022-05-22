import './App.css';
import NavbarBottom from './components/NavbarBottom/NavbarBottom'
import { useState } from 'react';
import MainDrawer from './components/MainDrawer/MainDrawer';
import {
  Routes,
  Route,
} from "react-router-dom";
import ProductDetail from './components/ProductDetail/ProductDetail';

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


  return (
    <div className="App">
      <NavbarBottom toggleDrawer={toggleDrawer} />
        <Routes>
        {/* <Route path="/" element={<App ≥÷/>} /> */}
        <Route path="/product" element={<ProductDetail />} />
        </Routes>
        {/* <NavbarTop/> */}
        {/* <ProductDetail /> */}
       <MainDrawer open={open.drawerOpen} setDrawertoggle={setDrawerOpen} />
    </div>
  );
}

export default App;
