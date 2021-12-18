import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation';
import Slider from '../../Shared/Slider';
import BestMore from '../BestMore/BestMore';
import BestSeller from '../BestSeller/BestSeller';

const Home = () => {
    return (
        <>
            <Navigation></Navigation>
            <Slider></Slider>
            <BestSeller></BestSeller>
            <BestMore></BestMore>
            {/* <HomeSlider></HomeSlider> */}
            <Footer></Footer>
        </>
    );
};

export default Home;