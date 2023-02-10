import { Route, Routes } from 'react-router-dom';
import './App.css';
import Card from './Component/Card/Card';
import Home from './Component/Home/Home';
import Shop from './Component/Shop/Shop';
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


        </Routes>
      </div>



      <FooterComponent />
    </div>
  );
}

export default App;
