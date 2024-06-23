
import Home from "./Pages/Home/Home"
import { BrowserRouter, Router, Routes, Route } from "react-router-dom"
import Nav from "./Pages/Home/nav"
import Footer from "./Pages/Home/Footer"
import SignUp from "./Pages/Access/SignUp/"
import './App.css'

import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Shop from "./Pages/shop/main shop/Shop";


const App = () => {
  return (
    <>

     <BrowserRouter>
        <Routes>
          <Route path="/" element={ <SignUp/>} />
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Shop />} />
        </Routes>
      </BrowserRouter>

    </>
  );
};
export default App;
