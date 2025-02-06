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
import ContactComponent from '../components/Contact/Contact';
import PlanComponent from '../components/Plan/PlanComponent';
import ServiceComponent from '../components/Serivce/ServiceComponent';
import FaqComponents from '../components/Faq/FaqComponents';

// eslint-disable-next-line react/prop-types
const Home = ({ setProgress }) => {

    useEffect(() => {
        setProgress(100)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>

            <Navbar />
            
            {/* Banner Component - Start */}
            <Banner />
            {/* Banner Component - Start */}

            {/* Plan Component - Start */}
            <PlanComponent />
            {/* Plan Component - End  */}

            {/* Service Component - Start */}
            <ServiceComponent />
            {/* Service Component - End */}

            {/* Service Component - Start */}
            <AboutComponent />
            {/* Service Component - End */}


            {/* Faq Component - Start */}
            <FaqComponents />
            {/* Faq Component - End  */}

            {/* Contact Component - Start */}
            <ContactComponent />
            {/* Contact Component - End  */}


            {/* <!-- Trending Product Section - Start --> */}
            {/* <section className='product-container'>
                <div className="container product-showCase">
                    <div className="product-showCase-header">
                        <h3>TRENDING GAMES</h3>
                        <Link to={"#"} className="view-more-btn"> VIEW MORE
                            <span></span>
                        </Link>
                    </div>

                    <Swiper
                        navigation={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 2,
                            },
                            640: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            992: {
                                slidesPerView: 4,
                            },
                            1024: {
                                slidesPerView: 4,
                            },
                        }}
                        modules={[Autoplay, Navigation]}
                    >
                        {items.map(i => {
                            return <SwiperSlide key={i.id}>
                                <ProductCard  {...i} />
                            </SwiperSlide>


                        })}
                    </Swiper>
                </div>
            </section> */}
            {/* <!-- Trending Product Section - End --> */}


            {/* <!-- Popular Product Section - Start --> */}
            {/* <section className='product-container'>
                <div className="container product-showCase product-showCase-list">
                    <div className="product-showCase-header mb-4">
                        <h3>POPULAR GAMES</h3>
                        <Link to={"#"} className="view-more-btn"> VIEW MORE
                            <span></span>
                        </Link>

                    </div>
                    <div className="row g-4">
                        {items.map(i => {
                            return <div className="col-6 col-sm-6 col-md-4 col-lg-3 m-0 p-2" key={i.id}>
                                <ProductCard {...i} />
                            </div>
                        })}

                    </div>
                </div>
            </section> */}
            {/* <!-- Popular Product Section - End --> */}


            {/* <!-- Recent Product Section - Start --> */}
            {/* <section className='product-container'>
                <div className="container product-showCase product-showCase-list">
                    <div className="product-showCase-header mb-4">
                        <h3>RECENT GAMES</h3>
                        <Link to={"#"} className="view-more-btn"> VIEW MORE
                            <span></span>
                        </Link>

                    </div>
                    <div className="row g-4">
                        {items.map(i => {
                            return <div className="col-6 col-sm-6 col-md-4 col-lg-3 m-0 p-2" key={i.id}>
                                <ProductCard {...i} />
                            </div>
                        })}

                    </div>
                </div>
            </section> */}
            {/* <!-- Recent Product Section - End --> */}


            {/* <!-- Instrument Product Section - Start --> */}
            {/* <section className='product-container'>
                <div className="container product-showCase">
                    <div className="product-showCase-header">
                        <h3>GAMING EQUIPMENTS</h3>
                        <Link to={"#"} className="view-more-btn"> VIEW MORE
                            <span></span>
                        </Link>
                    </div>

                    <Swiper
                        navigation={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 2,
                            },
                            640: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            992: {
                                slidesPerView: 4,
                            },
                            1024: {
                                slidesPerView: 4,
                            },
                        }}
                        modules={[Autoplay, Navigation]}
                    >
                        {products.map(i => {
                            return <SwiperSlide key={i.id}>
                                <ProductCard  {...i} />
                            </SwiperSlide>


                        })}
                    </Swiper>
                </div>
            </section> */}
            {/* <!-- Instrument Product Section - End --> */}



            <Footer />
        </>
    )
}
export default Home