import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { Routes, Route } from "react-router-dom";
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import About from './components/About/About';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Shop />}></Route>
        <Route path='/shop' element={<Shop />}></Route>
        <Route path='/orders' element={<Orders  />}></Route>
        <Route  path='/inventory' element={<Inventory />}></Route>
        <Route path='/about' element={<About/>}></Route>
        
        {/* <Route path='/orders' element={} */}
      </Routes>
    </div>
  );
}

export default App;
