import React from 'react';
import { Container } from 'react-bootstrap';
import slide1 from '../../Images/slider/1.png';
import slide2 from '../../Images/slider/2.png';
import slide3 from '../../Images/slider/3.png';
import './Slider.css';
const Slider = () => {
    return (
        <>
            <div className="slider">
                <div className="slider-img">
                    <div className="slide-title text-center">
                        <h2 className='slider-title'>Delicious Burgers</h2>
                    </div>
                    <div className="slider">
                        {/* <img src={slide2} style={{ maxWidth: '100%', maxHeight: '100%' }} alt="" /> */}
                        <img src={slide1} style={{ maxWidth: '100%', maxHeight: '100%' }} alt="" />
                        {/* <img src={slide3} style={{ maxWidth: '100%', maxHeight: '100%' }} alt="" /> */}
                    </div>

                </div>
            </div>
        </>
    );
};

export default Slider;