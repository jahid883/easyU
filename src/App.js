import './App.css';
import Home from './Pages/Home/Home';
import Footer from './Shared/Footer';
import Navbar from './Shared/Navbar';

import { Routes, Route } from "react-router-dom";
import Login from './Pages/Login/Login';
import NotFound from './Shared/NotFound';
import Signup from './Pages/Signup/Signup';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
