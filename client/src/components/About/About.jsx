import "../customStyle.scss";

import AboutImage from "../../assets/img/2150771037.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const AboutComponent = () => {
    return (
        <>
            <section className="plan-container about-section">
                <div className="text-center pb-5">
                    <h2>ABOUT US</h2>
                    <h6>Boost Your Play with Our High-Powered Solutions!</h6>
                </div>
                <div className="container">
                    <div className="row clearfix">

                        {/* <!--Content Column--> */}
                        <div className="content-column col-md-6 col-sm-12 col-xs-12">
                            <div className="inner-column">
                                <div className="sec-title" data-aos="fade-left"
                                    data-aos-delay="50"
                                    data-aos-duration="500">
                                    <h2>I AM JOHN SMITH</h2>
                                </div>
                                <div className="text" data-aos="fade-left"
                                        data-aos-delay="100"
                                        data-aos-duration="500">Game Stack, founded in 2018 with Rs 10,000, started as a subscription-based game rental service in Pakistan. It has grown into a nationwide platform with 350+ games and a team of 17. Known for managing large gaming events, Game Stack continues to make gaming more accessible by delivering rentals to gamers&apos; doorsteps.</div>
                                <div className="email" data-aos="fade-up"
                                        data-aos-delay="150"
                                        data-aos-duration="500">Request Games: <span className="theme_color">johnsmith@gmail.com</span></div>
                                <a href="#" className="theme-btn btn-style-three" data-aos="fade-up"
                                        data-aos-delay="150"
                                        data-aos-duration="500">Read More</a>
                            </div>
                        </div>

                        {/* <!--Image Column--> */}
                        <div className="image-column col-md-6 col-sm-12 col-xs-12" data-aos="zoom-in"
                                        data-aos-delay="100"
                                        data-aos-duration="500">
                            <div className="inner-column " data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="image">
                                    <img src={AboutImage} alt="" />
                                    <div className="overlay-box">
                                        <div className="year-box"><span className="number">5</span>Years<br />John<br />  Smith</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutComponent