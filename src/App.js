import React from "react";

//import Counter from "./components/Counter";
//import LandingPage from "./components/LandingPage";
//import VideoList from "./components/VideoList";
//import LandingPage from "./components/landingpage";
//import LandingPage from "./components/LandingPage";

//import UserProfile from "./components/UserProfile";

//import Navbar from './components/Navbar';

//import Hero from './components/HeroSection';
//import Categories from './components/Categories';
//import Footer from './components/Footer';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Contact from "./components/Contact";


function App ()
{
    
    
        return (
        <div className="App">
           <Router>
                 <Routes>

                    <Route path="/" element={<Home />} />
                    <Route path ="/contact"  element={<Contact />} />
            </Routes>

           A   
           </Router>
        </div>
         
        );
    
}

export default App;