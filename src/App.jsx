import React, { useEffect, useState } from 'react'
import Navbar from './components/NavBar/Navbar'
import Hero from './components/Banner-main/hero'
import AboutMe from './components/About/AboutMe'
import TrainCard from './components/Training_cards/TrainCard'
import Feature from './components/Features/Feature'
import Offers from './components/OurOffers/Offers'
import Benefit from './components/Benefits/Benefit'
import AskQuestion from './components/FAQS/AskQuestion'
import BmiCalc from './components/BMICALCULATOR/BmiCalc'
import MemShip from './components/MemberShip/MemShip'
import Testtimonials from './components/Testimonial/Testtimonials'
import Footer from './components/FooterPart/Footer'
import Preload from './components/PreLoadingAnimation/Preload'
const App = () => {

  const [loading, setLoading]  = useState(true);
  
  useEffect(() => {
    const time = setTimeout(() => {
      setLoading(false);
    }, 6500);
    return () => clearTimeout(time);
  }, []);
  
  if(loading) {
    return <Preload />
  }

  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <TrainCard />
      <Feature />
      <Offers />
      <Benefit />
      <AskQuestion />
      <BmiCalc />
      <MemShip />
      <Testtimonials />
      <Footer />
    </div>
  )
}

export default App
