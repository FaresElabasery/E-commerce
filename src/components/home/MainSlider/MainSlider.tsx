'use client'
import { Autoplay, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import SliderCard from '../SliderCard/SliderCard';


export default function MainSlider() {

    const Banners = [{
        title: 'iPhone 14 Series',
        desc: 'Up to 10% off Voucher',
        img: '/images/iphone.png',
        link: '/category/iphone'
    },
    {
        title: 'Women’s Collections',
        desc: 'Up to 25% off Voucher',
        img: '/images/women.png',
        link: '/category/women'
    },
    {
        title: 'Speakers',
        desc: 'Up to 20% off Voucher',
        img: '/images/speaker.png',
        link: '/category/speaker'
    },
    {
        title: 'GUCCI INTENSE OUD EDP',
        desc: 'Up to 15% off Voucher',
        img: '/images/perfume.png',
        link: '/category/perfume'
    },
    {
        title: 'Black and White version of the PS5 coming out on sale.',
        desc: 'Up to 18% off Voucher',
        img: '/images/playstation.png',
        link: '/category/playstation'
    }]
    return (
        <Swiper className='w-full h-86 '
            modules={[Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false
            }}
            navigation
            pagination={{
                clickable: true,
                renderBullet: (index, className) => {
                    return `<span class="${className} custom-bullet "></span>`;
                },
            }}
            scrollbar={{ draggable: true }}
        >
            {Banners.map(({ title, desc, img, link }: { title: string, desc: string, img: string, link: string }, i) => (
                <SwiperSlide key={i}>
                    <SliderCard title={title} desc={desc} img={img} link={link} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
