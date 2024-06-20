import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Shop from "./Pages/shop/main shop/Shop";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
