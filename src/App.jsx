import Home from "./Pages/Home/Home"
import { BrowserRouter, Router, Routes, Route } from "react-router-dom"
import Nav from "./Pages/Home/nav"
import Footer from "./Pages/Home/Footer"
import SignUp from "./Pages/Access/SignUp/"
import './App.css'


const App = () => {
  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <SignUp/>} />
     </Routes>
     </BrowserRouter>
    </>
  )
}
export default App