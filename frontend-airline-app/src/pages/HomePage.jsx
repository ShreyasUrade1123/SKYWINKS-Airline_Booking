import React from 'react';
import Hero from '../components/home/Hero';
import AboutIntro from '../components/home/AboutIntro';
import Destinations from '../components/home/Destinations';
import Features from '../components/home/Features';
import Blog from '../components/home/Blog';
import Testimonial from '../components/home/Testimonial';
import CTA from '../components/home/CTA';

const HomePage = () => {
    return (
        <>
            <Hero />
            <Destinations />
            <AboutIntro />
            <Features />
            <Blog />
            <Testimonial />
            <CTA />
        </>
    );
};

export default HomePage;