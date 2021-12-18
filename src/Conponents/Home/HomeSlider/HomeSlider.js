import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"
import './HomeSlider.css';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
// import Swiper core and required modules
import SwiperCore, {
    Navigation
} from 'swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// install Swiper modules
SwiperCore.use([Navigation]);

const HomeSlider = () => {
    return (
        <div>
            <Swiper navigation={true} className="mySwiper">
                <SwiperSlide>
                    <div className='slide-1'>
                        <div className="slide-text p-4">
                            <h2 className='famous-text fs-1'>World Famous Burger</h2>
                            <p className='famous-details'>100 % Grass-fed beef patty, cheddar cheese, special sauce, tomato, pickles, lettuce, sesame seed bun</p>
                            <div className='slide-details'>
                                <h4>$12.00</h4>
                                <FontAwesomeIcon icon={faPlus} />
                            </div>
                        </div>
                    </div>
                </SwiperSlide >
                <SwiperSlide className='slide-2'>Slide 2</SwiperSlide>
                <SwiperSlide className='slide-2'>Slide 3</SwiperSlide>
            </Swiper>
        </div>
    );
};

export default HomeSlider;