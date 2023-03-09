import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import {State} from './context/context';



function App() {


  return (
    <>
      <State>
      <BrowserRouter>
        <div>
          <Navbar />
          <div className='form'>
          <Routes>

          <Route path="/home" element={<Home />} />

          <Route path="/about" element={<About />} />

          </Routes>
          </div>
        </div>
      </BrowserRouter>
      </State>
    </>
  );
}

export default App;
