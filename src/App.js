import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders'
import Inventory from './components/Inventory/Inventory'
import About from './components/About/About'
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import RequirAuth from './components/requirAuth/RequirAuth';
import Shipment from './components/Shipment/Shipment';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>
        <Route path='/inventory' element={
          <RequirAuth>
            <Inventory></Inventory>
          </RequirAuth>
        }></Route>

        <Route path='/shipment' element={
          <RequirAuth>
            <Shipment></Shipment>
          </RequirAuth>
        }></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
