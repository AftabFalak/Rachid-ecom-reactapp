import './App.css';
import ProductDetail from './components/ProductDetail/ProductDetail';

import NavbarTop from './components/NavbarTop/NavbarTop'
import NavbarBottom from './components/NavbarBottom/NavbarBottom'


function App() {
  return (
    <div className="App">
      <NavbarTop/>
      <NavbarBottom/>
      <ProductDetail />
    </div>
  );
}

export default App;
