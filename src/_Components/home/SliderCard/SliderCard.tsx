import { Icons } from '@/_Components/icons/icons'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import Image from 'next/image'

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
})

export default function SliderCard({ title, desc, img, link ,height=352,width=496}: { title: string, desc: string, img: string, link: string ,height?: number, width?: number }) {
    return (
        <div className='w-full h-full flex mt-10 ms-4 bg-text2 dark:bg-black text-text ps-16 py-4 relative'>
            <div className='w-1/2 flex flex-col gap-5 py-4'>
                <div className='flex items-center gap-6'>
                    {title === 'iPhone 14 Series' && <Icons.apple />}
                    <p className='text-nowrap'>{title}</p>
                </div>
                <h2 className={`text-5xl/[60px] tracking-[4%] ${inter.className}`}>{desc}</h2>
                <div className='flex items-center '>
                    <Link href={link} className='underline underline-offset-4 decoration-white me-2 hover:pe-4'>Shop Now</Link>
                    <Icons.ArrowRight />
                </div>
            </div>
            <div className='w-1/2 flex items-center'>
                <Image className='object-cover ms-auto pe-10' width={width} height={height} src={img} alt={title} />
            </div>
        </div>
    )
}
