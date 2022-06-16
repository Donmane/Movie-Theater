import './App.css';
import Home from './pages/Home';
import Carddetails from './pages/Carddetails'
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App;
