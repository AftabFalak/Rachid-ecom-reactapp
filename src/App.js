import './App.css';
import NavbarBottom from './components/NavbarBottom/NavbarBottom'
import { useState } from 'react';
import MainDrawer from './components/MainDrawer/MainDrawer';
import {
  Routes,
  Route,
} from "react-router-dom";
import ProductDetail from './components/ProductDetail/ProductDetail';
import VendorProfile from './components/VenderProfile/VenderProfile';
import StoreList from './pages/store-list';
import Shop from './pages/shop';
import Dashboard from './pages/dashboard';


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
        <Route path="/" element={<div></div>} />
        <Route path="/product" element={<ProductDetail />} />
        <Route path="/vendor" element={<VendorProfile vendor={ {
    id: 1,
    brandName: 'Outfitter',
    brandDescription: 'Finest engraved wood watch for your love ones.',
    profileImage: require('./assets/images/VendorProfile/brand2.PNG'),
    coverImage: require('./assets/images/VenderCover/venderCoverPhotoavif.avif')
  }} />} />
        <Route></Route>

        <Route path="/store-list">
          <Route index element={<StoreList />} />
          <Route path=":id" element={<StoreList />} />
        </Route>
     
        <Route path="/shop" element={<Shop />} />
        <Route path="/dashboard" element={<Dashboard />} />


      </Routes>
     
      <MainDrawer open={open.drawerOpen} setDrawertoggle={setDrawerOpen} />



    </div>
  );
}

export default App;
