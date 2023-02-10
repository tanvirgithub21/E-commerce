import { Route, Routes } from 'react-router-dom';
import './App.css';
import Card from './Component/Card/Card';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Shop from './Component/Shop/Shop';
import SingUp from './Component/SingUp/SingUp';
import FooterComponent from './SherdComponent/FooterComponent/FooterComponent';
import Navbar from './SherdComponent/Navbar/Navbar';

function App() {
  return (
    <div className="App">

      <Navbar />
      <div className='container mx-auto'>
        <Routes>

          <Route path="" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/card" element={<Card />} />
          <Route path="/login" element={<Login />} />
          <Route path="/singUp" element={<SingUp />} />

        </Routes>
      </div>



      <FooterComponent />
    </div>
  );
}

export default App;
