import "../customStyle.scss";

import AboutImage from "../../assets/img/2150771037.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
AOS.init();
const AboutComponent = ({ status }) => {
    return (
        <>
            <section className="plan-container about-section">
                <div className="text-center pb-5">
                    {status ? <h1>ABOUT US</h1> : <h2>ABOUT US</h2>}


                    {!status && <h6>Boost Your Play with Our High-Powered Solutions!</h6>}
                </div>
                <div className="container">
                    <div className="row clearfix">

                        {/* <!--Content Column--> */}
                        <div className={`content-column col-md-${!status ? 6 : 12} col-sm-12 col-xs-12`}>
                            <div className="inner-column">
                                {!status && <div className="sec-title" data-aos="fade-left"
                                    data-aos-delay="50"
                                    data-aos-duration="500">
                                    <h2>GAME STACK</h2>
                                </div>}
                                {!status && <div className="text" data-aos="fade-left"
                                    data-aos-delay="100"
                                    data-aos-duration="500">Game Stack, founded in 2018, began with a mission to make console gaming affordable and accessible in Pakistan. Starting with two games and an investment of Rs 10,000, we introduced a subscription-based rental service that has now evolved into a nationwide platform. From humble beginnings as a passion project, Game Stack has grown into a team of 17, offering over 350 games and delivering gaming experiences right to customers doorsteps. We’ve proudly managed large-scale gaming setups at major events across Pakistan, including handling 32 PlayStation 5 consoles at a single event. As pioneers in the gaming rental industry, Game Stack is committed to innovation and providing seamless gaming experiences.</div>}


                                {status &&

                                    <div className="sec-title about">
                                        <p>Game Stack was founded in 2018 with a simple yet powerful idea: to make console gaming more accessible and affordable for gamers in Pakistan. Starting with just two games and an investment of Rs 10,000, we developed a subscription-based game rental service that has now grown into a nationwide gaming platform, serving gamers at their doorstep. Our journey began as a passion project between lifelong gamers who understood the struggles of accessing quality games, and we turned that challenge into an opportunity. Today, we boast a library of over 350 games and a dedicated team of 17 people, all driven by a love for gaming and a commitment to innovation. Over the years, we’ve proudly participated in all major gaming events across Pakistan, managing large-scale gaming setups. Most recently, we handled over 32 PlayStation 5 consoles at a single event, showcasing our ability to meet the needs of the growing gaming community. Game Stack is a pioneer in the gaming rental business, delivering unforgettable gaming experiences right to your doorstep.</p>

                                        <h3>Our Vision</h3>
                                        <p>To become the go-to platform for gamers across Pakistan and beyond, revolutionizing how gaming content is accessed and enjoyed. We aim to be at the forefront of gaming event management, offering large-scale console setups and providing seamless gaming experiences for all events. We strive to continuously innovate, grow, and provide gamers with affordable, hassle-free access to the latest games.</p>

                                        <h3>Our Goals</h3>
                                        <ol type="1">
                                            <li><span>Expanding Our Game Library </span>We aim to continually grow our collection of games to offer our customers the latest titles and a variety of gaming experiences.</li>
                                            <li><span>Nationwide Reach & Growth </span>We are committed to expanding our presence, making gaming more accessible across every corner of Pakistan by leveraging our online platform and strengthening our delivery network.</li>
                                            <li><span>Customer-Centric Innovation </span>Our goal is to constantly improve the customer experience through tech-driven solutions, enhanced service delivery, and a focus on quality.</li>
                                            <li><span>Community Building </span>We aim to foster a thriving community of gamers by organizing gaming events, offering exclusive memberships, and creating spaces where gamers can connect, compete, and share their passion.</li>
                                            <li><span>Diversification </span>We will continue exploring new ventures and industries related to gaming and technology, like e-sports, gaming gear, and gift cards, expanding our business ecosystem.</li>
                                        </ol>

                                        <div className="chief">
                                            <div className="chiefName">
                                                <h3>Muhammad Sufyan Khan <small>(Chief Executive Officer)</small></h3>
                                            </div>

                                            <p>26 year old crazy young energetic individual with a strong belief on the concept and making it more powerful every day. He is a computer engineer and tech savy guy.</p>

                                            <div className="chiefName">
                                                <h3>Saad Khan Kakerzai <small>(Chief Operating Officer)</small></h3>
                                            </div>

                                            <p>34 years old super motivated to boost Game Stack to new heights. He is a seasoned Corporate Banker worked with Habib Metro, United Bank Limited and Allied Bank Limited for about 9 years. He hold a masters in Finance and Risk Management and crazy about startups since the university days.</p>

                                            <div className="chiefName">
                                                <h3>Sharjeel Saeed <small>(Chief Strategy Officer)</small></h3>
                                            </div>

                                            <p>32 year old very motivated and great tech enthusiast with a great knowledge in technology, crypto and business management. He holds a bachelor’s degree in business and aviation management. He is the back bone of our Gift Cards business i.e. GS Tech which is one of the major suppliers of Gift Cards in Pakistan supplying to mostly all shops across the country.</p>

                                        </div>
                                    </div>

                                }

                                {!status && <Link to="/about" className="theme-btn btn-style-three" data-aos="fade-up"
                                    data-aos-delay="150"
                                    data-aos-duration="500">Read More</Link>}
                            </div>
                        </div>

                        {/* <!--Image Column--> */}
                        {!status && <div className={`image-column col-md-${!status ? 6 : 12} col-sm-12 col-xs-12`} data-aos="zoom-in"
                            data-aos-delay="100"
                            data-aos-duration="500">
                            <div className="inner-column" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="image">
                                    <img src={AboutImage} alt="" />

                                </div>
                            </div>
                        </div>}

                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutComponent