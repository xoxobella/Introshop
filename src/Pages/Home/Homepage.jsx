// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from "../../Components/Navbar/Navbar.jsx"
import Hero from "../../Components/Hero/Hero.jsx"
import Text from "../../Components/Marquee/MarqueeText.jsx"
import Whyus from '../../Components/Whychooseus/Whyus.jsx'
import Short from '../../Components/About/Shortabout.jsx'
import Categ from '../../Components/Categ/Categ.jsx'
import Client from '../../Components/Clients/Clients.jsx'
import Footer from '../../Components/Footer/Footer.jsx'
import Joinus from '../../Components/joinus/Joinus.jsx'

const Homepage = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Text />
    <Short />
    <Whyus />
    <Categ />
    <Client />
    <Joinus />
    <Footer />
    </>
  )
}

export default Homepage