import './../../main.css';
import React, { useState, useEffect } from "react";
import Hero from './../../components/Hero/Hero';
import Projects from './../../components/Projects/Projects';
import Contact from './../../components/Contact/Contact';
import Info from './../../components/Info/Info';
import Navbar from './../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Loader from '../../components/Loader/Loader';
// import Random from './../../components/random/random';




const Layout = () => {
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
      setTimeout(() => {
        setLoading(false);
      },2000);
  })
  return (
    <>
      
    <Navbar />
    {loading ? (
        <Loader />
      ):(
        <>
      <Hero />
      <Projects />
      <Info />
      <Contact />
      <Footer />
      </>
      )}
    </>
  )
}

export default Layout
