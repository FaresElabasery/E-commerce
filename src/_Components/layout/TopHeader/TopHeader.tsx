import React from 'react'
import { Icons } from '@/_Components/icons/icons';
import ThemeToggle from '../../shared/ThemeToggle/ThemeToggle';

export default function TopHeader() {
    return (
        <div className=' max-w-full bg-button dark:bg-Bg text-text text-[12px] sm:text-[14px] py-2 sm:py-0 z-50 relative'>
            <div className='container sm:flex '>
                <div className='h-14 sm:h-12 flex-center ms-auto text-center px-2'>
                    <p>
                        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                        <span className='ms-2 font-semibold underline'>ShopNow</span>
                    </p>
                </div>
                <span className='flex-center ms-auto'>English <Icons.chevronDown size={24} /> <span className='ms-2'>< ThemeToggle /></span></span>
            </div>
        </div>
    )
}
