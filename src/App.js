import "./App.css";
import Navbar from "./components/Navbar";
import { Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Events from "./pages/Events";
import { Routes } from "react-router-dom";
import Home from "./pages/Home";


function App() {



  return (
    <div>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}/>
          <Route path="/" element={<AboutUs></AboutUs>}/>
          <Route path="/" element={<Services></Services>}/>
          <Route path="/" element={<Events></Events>}/>
        </Routes>
    </div>
  );
} 

export default App;
