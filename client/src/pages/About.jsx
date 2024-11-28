import Banner from '../components/Layout/Banner';
import Footer from '../components/Layout/Footer';
import Navbar from '../components/Layout/Navbar';
// Import Swiper React components

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import 'swiper/css/pagination';


// Gamming Products

import { useEffect } from 'react';
import AboutComponent from '../components/About/About';
const About = () => {
    return (
        <>

            <Navbar />
            {/* About Component - Start */}
            <AboutComponent status={true} />
            {/* About Component - End */}

            <Footer />
        </>
    )
}
export default About