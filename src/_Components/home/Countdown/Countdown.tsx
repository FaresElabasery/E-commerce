'use client'
import { Inter } from 'next/font/google'
import React, { useEffect, useState } from 'react'
const inter = Inter({
    weight: '700',
    subsets: ['latin']
})
export default function Countdown() {
    const targetDate = new Date().getTime() + 4 * 24 * 60 * 60 * 1000;
    const [timeLeft, setTimeLeft] = useState(targetDate - Date.now())   

    const seconds = Math.floor((timeLeft / 1000) % 60)
    const mintes = Math.floor((timeLeft / 1000 / 60) % 60)
    const hours = Math.floor((timeLeft / 1000 / 60 / 60) % 24)
    const days = Math.floor(timeLeft / 1000 / 60 / 60 / 24)

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(timeLeft - 1000)
        }, 1000);

        return () => {
            clearInterval(interval)
        }
    }, [timeLeft])

    return (
        <div className='Counter flex gap-2 text-text2'>
            <div className='CounterItem'>
                <div className='CounterNumber flex flex-col'>
                    <span className='font-medium text-xs'>Days</span>
                    <span className={`text-[32px] ${inter.className}`}>{days}</span>
                </div>
            </div>
            <span className='text-hover-button2 text-2xl px-1 mt-6'>:</span>
            <div className='CounterItem'>
                <div className='CounterNumber flex flex-col items-center'>
                    <span className='font-medium text-xs'>Hours</span>
                    <span className={`text-[32px] ${inter.className}`}>{hours}</span>
                </div>
            </div>
            <span className='text-hover-button2 text-2xl px-1 mt-6'>:</span>
            <div className='CounterItem'>
                <div className='CounterNumber flex flex-col'>
                    <span className='font-medium text-xs'>Minutes</span>
                    <span className={`text-[32px] ${inter.className}`}>{mintes}</span>
                </div>
            </div>
            <span className='text-hover-button2 text-2xl px-1 mt-6'>:</span>
            <div className='CounterItem'>
                <div className='CounterNumber flex flex-col'>
                    <span className='font-medium text-xs'>Seconds</span>
                    <span className={`text-[32px] ${inter.className}`}>{seconds}</span>
                </div>
            </div>
        </div>
    )
}
