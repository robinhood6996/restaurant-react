import React from 'react';
import Navigation from '../../Shared/Navigation';
import Slider from '../../Shared/Slider';
import BestMore from '../BestMore/BestMore';
import BestSeller from '../BestSeller/BestSeller';
import HomeSlider from '../HomeSlider/HomeSlider';

const Home = () => {
    return (
        <>
            <Navigation></Navigation>
            <Slider></Slider>
            <BestSeller></BestSeller>
            <BestMore></BestMore>
            <HomeSlider></HomeSlider>
        </>
    );
};

export default Home;