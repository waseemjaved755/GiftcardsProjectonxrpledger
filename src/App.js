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
import Contac from "./components/Contact";
import { WalletProvider } from "./components/WalletContext";
import Services from "./components/Services";
function App ()
{
    
    
        return (
        <div className="App">
            <WalletProvider>

            <Router>
                 <Routes>

                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path ="/contact"  element={<Contac />} />
                    <Route path="/services" element = {<Services />} />
            </Routes>  
           </Router>

            </WalletProvider>
          
        </div>
         
        );
    
}

export default App;