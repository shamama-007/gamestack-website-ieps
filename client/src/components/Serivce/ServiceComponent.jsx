import "../customStyle.scss";

import { SiEpicgames } from "react-icons/si";
import { BiSupport } from "react-icons/bi";
import { IoGameControllerOutline } from "react-icons/io5";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

AOS.init();
const ServiceComponent = () => {
    return (
        <>
            <section className="plan-container container mt-5">
                <div className="text-center pb-5">
                    <h2>OUR SERVICE</h2>
                    <h6>Boost Your Play with Our High-Powered Solutions!</h6>
                </div>
                <section className="card__container">
                    {/* <!--==================== SERVICE CARD ====================--> */}
                    <div className="card__bx card__1"
                        data-aos="fade-right"
                        data-aos-delay="50"
                        data-aos-duration="500"
                        >
                        <div className="card__data">
                            <div className="card__icon">
                                <div className="card__icon-bx">
                                    <SiEpicgames />
                                </div>
                            </div>
                            <div className="card__content">
                                <h3>EpicZone</h3>
                                <p>Your ultimate gaming hub, where players level up their skills, unlock exclusive content, and connect with a community of legends. Dive into epic experiences and dominate the game!</p>
                                <Link to="/plan">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="card__bx card__2" data-aos="fade-up"
                        data-aos-delay="50"
                        data-aos-duration="500">
                        <div className="card__data">
                            <div className="card__icon">
                                <div className="card__icon-bx"><BiSupport /></div>
                            </div>
                            <div className="card__content">
                                <h3>Support 24/7</h3>
                                <p>We&apos;re here around the clock to keep you in the game. Whether it&apos;s troubleshooting, tips, or advice, our team is ready to assist you anytime, day or night!</p>
                                <Link to="/plan">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="card__bx card__3" data-aos="fade-left"
                        data-aos-delay="50"
                        data-aos-duration="500">
                        <div className="card__data">
                            <div className="card__icon">
                                <div className="card__icon-bx"><IoGameControllerOutline /></div>
                            </div>
                            <div className="card__content">
                                <h3>PowerPlay</h3>
                                <p>Supercharge your gaming experience with our premium solutions.</p>
                                <Link to="/plan">Read More</Link>
                            </div>
                        </div>
                    </div>

                </section>

            </section>
        </>
    )
}

export default ServiceComponent