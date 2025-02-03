// import EventsCard from "../EventsCard/EventsCard";
import "./eventStyle.scss";
import { Swiper, SwiperSlide } from 'swiper/react';

import  EventsCard from "../EventsCard/EventsCard"

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import 'swiper/css/pagination';
import { Autoplay, Navigation } from "swiper/modules";
import {
    getEventLogoHandler
} from "../../reducers/eventLogoUploadSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
const EventComponent = () => {
    const dispatch = useDispatch();

    const {
        isLoadingEvent,
        events,
    } = useSelector((state) => state.eventLogoUpload);


    useEffect(() => {
        dispatch(getEventLogoHandler());
        
    }, []);

    return (
        <div><section className="plan-container gift-page-sec">
            <div className="text-center pb-5">
                <h2>Events</h2>
            </div>
            <div className="container mb-5">
                {/* Events Start */}
                <p className="eventText">Game Stack as a B2B service helps companies or esports organizations to organize and manage end to end gaming competitions. Gaming competitions are amongst the top employee engagement activity these days and a great way for team building so its quite popular and we help companies to do this job on their behalf we have worked with several companies from all sector and we have also work with esports companies to manage their events.</p>
                {/* Events End */}

                <h3 className="eventHeading">Game Stack provide the following services and equipment’s on rentals to organizations</h3>

                <ol type="1" className="eventList">
                    <li>PlayStation Consoles</li>
                    <li>Racing Rigs</li>
                    <li>VR Consoles</li>
                    <li>League Operations</li>
                    <li>Broadcasting Services</li>
                    <li>Gaming Event Management</li>
                </ol>


                <h3 className="eventHeading">After writing a brief of our b2b services we need a logo of the companies we have worked with. Here is the list</h3>

                {/* <!-- Trending Product Section - Start --> */}
                <div className="container product-showCase">
                    <Swiper
                        navigation={true}
                        loop={true}
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
                        {events && events.map(item =>  
                            <SwiperSlide key={item._id}>
                                <EventsCard {...item} />
                            </SwiperSlide>
                        )}

                    </Swiper>
                </div>
                {/* <!-- Trending Product Section - End --> */}


            </div>
        </section></div>
    )
}

export default EventComponent