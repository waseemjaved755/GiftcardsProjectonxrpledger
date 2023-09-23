import React from "react"; 
import Navbar from "../components/Navbar";
import Hero from "../components/HeroSection";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
//import XUMMIntegration from "../components/XUMMIntegration";

function Home ()
{

    return (

        <div>
           <Navbar />
           <Hero />
           <Categories />
           <Footer />
        </div>
    );
    
    
};

export default Home;