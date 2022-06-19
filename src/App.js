import React from 'react';
import './App.css';
import NavbarBottom from './components/NavbarBottom/NavbarBottom';
import { useState } from 'react';
import MainDrawer from './components/MainDrawer/MainDrawer';
import { Routes, Route } from 'react-router-dom';
import ProductDetail from './components/ProductDetail/ProductDetail';
import VendorProfile from './components/VenderProfile/VenderProfile';
import StoreList from './pages/store-list';
import Shop from './pages/shop';
import Dashboard from './pages/dashboard';
import Checkout from './pages/checkout';
import CartDrawer from './components/CartDrawer/CartDrawer';
import YourCart from './pages/yourCart';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  const [open, setOpen] = useState({ drawerOpen: false });
  const [openCart, setOpenCart] = useState({ drawerOpenCart: false });

  const setDrawerOpen = (isDrawerOpen) => {
    setOpen({
      drawerOpen: isDrawerOpen,
    });
  };

  const toggleDrawer = () => {
    setOpen((pstate) => ({ drawerOpen: !pstate.drawerOpen }));
  };

  const setDrawerOpenCart = (isDrawerOpenCart) => {
    setOpenCart({
      drawerOpenCart: isDrawerOpenCart,
    });
  };

  const toggleDrawerCart = () => {
    setOpenCart((pstate) => ({ drawerOpenCart: !pstate.drawerOpenCart }));
  };

  return (
    <div className="App">
      <NavbarBottom
        toggleDrawer={toggleDrawer}
        toggleDrawerCart={toggleDrawerCart}
      />
      <Routes>
        <Route path="/" element={<div></div>} />
        <Route path="/product" element={<ProductDetail />} />
        <Route path="/yourcart" element={<YourCart />} />

        <Route
          path="/vendor"
          element={
            <VendorProfile
              vendor={{
                id: 1,
                brandName: 'Outfitter',
                brandDescription:
                  'Finest engraved wood watch for your love ones.',
                profileImage: require('./assets/images/VendorProfile/brand2.PNG'),
                coverImage: require('./assets/images/VenderCover/venderCoverPhotoavif.avif'),
              }}
            />
          }
        />

        <Route path="/store-list">
          <Route index element={<StoreList />} />
          <Route path=":id" element={<StoreList />} />
        </Route>

        <Route path="/shop" element={<Shop />} />
        <Route path="/dashboard/:page" element={<Dashboard />} />
        <Route path="/checkout/:page" element={<Checkout />} />
      </Routes>

      <MainDrawer open={open.drawerOpen} setDrawertoggle={setDrawerOpen} />
      <CartDrawer
        open={openCart.drawerOpenCart}
        setDrawertoggle={setDrawerOpenCart}
      />
    </div>
  );
}

export default App;
