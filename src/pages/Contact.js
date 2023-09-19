import React from "react"; 
import Navbar from "../components/Navbar";
import Hero from "../components/HeroSection";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import XUMMIntegration from "../components/XUMMIntegration";
import Contact from "../components/Contact";

function Home ()
{

    return (

        <div>
           
           <Navbar />
           <XUMMIntegration />
           <Contact />
           
           <Footer />
        </div>
    );
    
    
};

export default Home;