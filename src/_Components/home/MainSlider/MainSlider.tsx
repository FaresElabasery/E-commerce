'use client'
import iphone from '@images/iphone.png';
import perfume from '@images/perfume.png';
import playstation from '@images/playstation.png';
import speaker from '@images/speaker.png';
import women from '@images/women.png';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SliderCard from '../SliderCard/SliderCard';


export default function MainSlider() {

    const Banners = [{
        title: 'iPhone 14 Series',
        desc: 'Up to 10% off Voucher',
        img: iphone,
        link: '/category/iphone'
    },
    {
        title: 'Women’s Collections',
        desc: 'Up to 25% off Voucher',
        img: women,
        link: '/category/women'
    },
    {
        title: 'Speakers',
        desc: 'Up to 20% off Voucher',
        link: '/category/speaker',
        img: speaker,
        width: 320,
        height: 50
    },
    {
        title: 'GUCCI INTENSE OUD EDP',
        desc: 'Up to 15% off Voucher',
        link: '/category/perfume',
        img: perfume,
        width: 320,
        height: 30
    },
    {
        title: 'Black and White version of the PS5',
        desc: 'Up to 18% off Voucher',
        link: '/category/playstation',
        img: playstation,
        width: 350,
        height: 400
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
            pagination={{
                clickable: true,
                renderBullet: (index, className) => {
                    return `<span class="${className} custom-bullet "></span>`;
                },
            }}
            scrollbar={{ draggable: true }}
        >
            {Banners.map(({ title, desc, img, link, width, height }: Banner, i) => (
                <SwiperSlide key={i}>
                    <SliderCard title={title} desc={desc} img={img} link={link} width={width} height={height} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
export type Banner = {
    title: string;
    desc: string;
    img: string;
    link: string;
    width?: number;
    height?: number;
};
