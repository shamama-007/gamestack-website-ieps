// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import Banner1 from '../../assets/img/banner2.jpeg'
import Banner2 from '../../assets/img/banner2.jpeg'
import Banner3 from '../../assets/img/banner3.jpeg'
const Banner = () => {
    return (
        <div className="container pt-3 py-5 swiper-custom">
            <Swiper pagination={true} modules={[Pagination]} className="banner">
                <SwiperSlide><img src={Banner1} alt="Banner" /></SwiperSlide>
                <SwiperSlide><img src={Banner2} alt="Banner" /></SwiperSlide>
                <SwiperSlide><img src={Banner3} alt="Banner" /></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Banner