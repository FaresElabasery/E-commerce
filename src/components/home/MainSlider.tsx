'use client'
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';


export default function MainSlider() {
    return (
        <Swiper className='w-full h-110'
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false
            }}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide><Image className='object-cover' fill priority src={'/images/slider-image-1.jpeg'} alt='banner 1' /></SwiperSlide>
            <SwiperSlide><Image className='object-cover' fill priority src={'/images/slider-image-2.jpeg'} alt='banner 1' /></SwiperSlide>
            <SwiperSlide><Image className='object-cover' fill priority src={'/images/slider-image-3.jpeg'} alt='banner 1' /></SwiperSlide>
            <SwiperSlide><Image className='object-cover' fill priority src={'/images/banner-4.jpeg'} alt='banner 1' /></SwiperSlide>
            ...
        </Swiper>
    )
}
