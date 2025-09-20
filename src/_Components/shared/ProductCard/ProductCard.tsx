'use client'
import { Icons } from '@/_Components/icons/icons';
import { Star } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/_Components/ui/button';

export default function ProductCard() {

    return (
        <div className='Card relative group'>
            <div className='CardImage overflow-hidden relative w-[270px] h-[250px] bg-secondary rounded-lg flex-center'>
                <Image className='object-contain group-hover:scale-105 duration-200' width={220} height={180} src="/images/JBG.png" alt="name" />
                <Button className='w-full absolute cursor-pointer rounded-none -bottom-10 bg-button dark:bg-Bg text-text hover:text-text  hover:bg-text1  group-hover:bottom-0 duration-200'>Add To Cart</Button>
            </div>
            {/* floating lables */}
            <span className='absolute top-3 left-3 text-xs bg-secondary2 text-text py-2 px-3 rounded-lg group-hover:scale-90 duration-200'>-40%</span>
            <div className='absolute top-3 right-3 flex gap-2 flex-col text-xs'>
                <span className='bg-Bg size-[34] rounded-full flex-center group-hover:scale-90 duration-200'><Icons.heart className='size-6 flex-center ' /></span>
                <span className='bg-Bg size-[34] rounded-full flex-center group-hover:scale-90 duration-200'><Icons.eye strokeWidth={1.5} className='size-6 flex-center ' /></span>
            </div>

            <div className='CardContent mt-4 flex flex-col gap-2'>
                <p className='font-medium '>HAVIT HV-G92 Gamepad</p>
                <div className='Price flex gap-3'>
                    <span className='text-secondary2 font-medium'>$120</span>
                    <span className='line-through text-text2/50 font-medium'>$160</span>
                </div>
                <div className='Rating flex gap-2'>
                    <div className='star flex gap-1 text-rating'>
                        <Icons.star fill='currentColor' color='' className='size-5' />
                        <Icons.star fill='currentColor' color='' className='size-5' />
                        <Icons.star fill='currentColor' color='' className='size-5' />
                        <Icons.star fill='currentColor' color='' className='size-5' />
                        <Icons.star fill='currentColor' color='' className='size-5 text-text2/25' />
                    </div>
                    <span className='font-semibold text-sm text-text2/50'>(88)</span>
                </div>
            </div>
        </div>
    )
}
