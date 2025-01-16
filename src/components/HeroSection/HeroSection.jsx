import React from 'react';
import './HeroSection.css';
import Image from 'next/image';
import image from '@/assets/images/heroImage.png';


const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="text-content">
                <h1 className="title">School Safety Unlocked</h1>
                <p className="subtitle">
                    Empowering schools to keep their students safe with real-time alerts, 
                    accurate location tracking, and rapid response - all in one seamless system
                </p>
                <div className="buttons">
                    <button className="start-button">
                        <span>start now</span>
                        <img src="https://dashboard.codeparrot.ai/api/assets/Z4ibx644F0YMkTKY" alt="right arrow" className="button-icon" />
                    </button>
                    <button className="learn-more-button">
                        <span>learn more</span>
                        <img src="https://dashboard.codeparrot.ai/api/assets/Z4ibx644F0YMkTKZ" alt="right arrow" className="button-icon" />
                    </button>
                </div>
            </div>
            <div className="image-content">
                <Image src={image} alt="Safety Map" className="map-image" />
            </div>
        </div>
    );
};

export default HeroSection;