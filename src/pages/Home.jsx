import React from 'react';
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Aifest from '../components/Aifest';
import Objectives from '../components/Objectives';
import Stats from '../components/Stats';

const Home = () => {
    return(
        <div id='main'>
            <Hero />
            <Objectives />
            <Aifest />
            <Stats />
            <Footer />            
        </div>
    )
}

export default Home;