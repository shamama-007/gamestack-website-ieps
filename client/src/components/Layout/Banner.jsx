// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';

import {
    getBannerImageHandler,
} from "../../reducers/imageUploadSlice";
import Loader from '../Loader/Loader';

const Banner = () => {
    const dispatch = useDispatch();

    const {
        isLoadingBanner,
        banners,
    } = useSelector((state) => state.imageUpload);


    useEffect(()=> {
        dispatch(getBannerImageHandler());
    }, [dispatch])
    console.log(banners && banners)

    

    return (
        <>
        {isLoadingBanner === true ? <Loader /> : <div className="container pt-3 py-5 swiper-custom">
            <Swiper pagination={true} modules={[Pagination]} loop={true} className="banner">
                {banners.map((item, index) => {
                    return <SwiperSlide key={index} ><img src={import.meta.env.VITE_BACKEND_URL + item.imageLink} alt="Banner" /></SwiperSlide>
                })}
            </Swiper>
        </div>}
        </>
    )
}

export default Banner