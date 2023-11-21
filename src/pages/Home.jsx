import React from 'react';
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Aifest from '../components/Aifest';
import Objectives from '../components/Objectives';

const Home = () => {
    return(
        <div id='main'>
            <Hero />
            <Objectives />
            <Aifest />
            <Footer />            
        </div>
    )
}

export default Home;