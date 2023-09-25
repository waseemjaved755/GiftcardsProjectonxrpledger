import React from "react"; 
import Navbar from "../components/Navbar";
//import Hero from "../components/HeroSection";
//import Categories from "../components/Categories";
//I dont need to display these things
import Footer from "../components/Footer";
//import XUMMIntegration from "../components/XUMMIntegration";
import Contact from "../components/Contact";

function ContactPage ()
{

    return (
        <div>
           <Navbar />
            <Contact />
           <Footer />
        </div>
    );
    
    
};

export default ContactPage;