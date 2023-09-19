import React from "react";

//import Counter from "./components/Counter";
//import LandingPage from "./components/LandingPage";
//import VideoList from "./components/VideoList";
//import LandingPage from "./components/landingpage";
//import LandingPage from "./components/LandingPage";

//import UserProfile from "./components/UserProfile";

import Navbar from './components/Navbar';

import Hero from './components/HeroSection';
import Categories from './components/Categories';
import Footer from './components/Footer';


class App extends React.Component
{
    render()
    {
        return (
        <div>
           <Navbar />
           <Hero />
           <Categories />
           <Footer /> 
        </div>
         
        );
    }
}

export default App;