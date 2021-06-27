import React from 'react'

//Components
import Carousel from '../HomeSections/Carousel';
import Welcome from '../HomeSections/Welcome';
import About from '../HomeSections/About';
import Featured from '../HomeSections/Featured';

const HomeContainer = () => {
    return (
        <div>
            <Carousel/>
            <Welcome/>
            <About/>
            <Featured/>
        </div>
    )
}

export default HomeContainer
