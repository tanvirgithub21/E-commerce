import './App.css';
import Home from './Component/Home/Home';
import FooterComponent from './SherdComponent/FooterComponent/FooterComponent';
import Navbar from './SherdComponent/Navbar/Navbar';

function App() {
  return (
    <div className="App">

      <Navbar />
      <div className='container mx-auto'>
        <Home />
      </div>



      <FooterComponent />
    </div>
  );
}

export default App;
