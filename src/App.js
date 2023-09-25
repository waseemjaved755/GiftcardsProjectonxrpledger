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
import ContactPage from "./pages/ContactPage";
import { WalletProvider } from "./components/WalletContext";
import ServicePage from "./pages/ServicesPage";
function App ()
{
    
    
        return (
        <div className="App">
            <WalletProvider>

            <Router>
                 <Routes>

                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path ="/contact"  element={<ContactPage />} />
                    <Route path="/services" element = {<ServicePage />} />
            </Routes>  
           </Router>

            </WalletProvider>
          
        </div>
         
        );
    
}

export default App;