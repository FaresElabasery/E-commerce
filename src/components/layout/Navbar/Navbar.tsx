'use client'
import { Icons } from '@/components/icons/icons';
import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTrigger
} from "@/components/ui/sheet";
import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from '../../shared/ThemeToggle/ThemeToggle';
import SearchInput from '@/components/shared/SearchInput/SearchInput';

export default function Navbar() {
    const [isOpenNav, setisOpenNav] = useState(false)
    const handleCloseMenu = () => {
        setisOpenNav(false)
    }
    const navLinks = [
        { title: 'Home', link: '/' },
        { title: 'Contact', link: '/contact' },
        { title: 'About', link: '/about' },
        { title: 'Products', link: '/products' },
    ]
    return (
        <header className='sticky z-40 top-0 backdrop-blur-2xl bg-primary text-text2 border-b w-full'>
            <div className='container'>
                <div className='flex items-center justify-between h-23'>
                    {/* Brand */}
                    <Link href={'/'} className='flex items-center gap-2'>
                        <span className='sr-only'>Exclusive</span>
                        <h1 className='text-2xl font-bold '>Exclusive</h1>
                    </Link>
                    {/* nav Links */}
                    <nav className='hidden md:flex items-center gap-8'>
                        {navLinks.map(({ title, link }, i) =>
                            <Link className={`text-sm  hover:underline hover:underline-offset-5 decoration-gray-400 dark:decoration-white `} href={link} key={i}>{title}</Link>
                        )}
                    </nav>
                    {/* actions btns */}
                    <div className='flex ms-auto gap-3 me-4 sm:hidden'>
                        <Icons.heart />
                        <Icons.cart />
                    </div>
                    <div className='hidden md:flex items-center  gap-4'>
                        <SearchInput />
                        <div className='flex gap-2'>
                            <Icons.heart />
                            <Icons.cart />
                        </div>
                        <Link className='font-light capitalize' href="/register">signUp</Link>
                        <Button asChild className='font-light capitalize text-text bg-button ms-2 hover:text-text2 border-1'>
                            <Link href="/login">signIn</Link>
                        </Button>
                    </div>
                    {/* mobile screen */}
                    <Sheet open={isOpenNav} onOpenChange={setisOpenNav}>
                        <SheetTrigger asChild>
                            <Button variant={'ghost'} className='md:hidden p-2 rounded-md'>
                                <Icons.menu className=' size-7' />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side='left'>
                            <SheetHeader>
                                <Link href={'/'} className='flex items-center gap-2'>
                                    <span className='sr-only'> FreshCart</span>
                                    <Icons.cart className='size-8' />
                                    <h1 className='text-lg font-semibold'> FreshCart</h1>
                                </Link>
                                <span className='flex justify-end'>
                                    <ThemeToggle />
                                </span>
                            </SheetHeader>
                            <nav className='flex flex-col items-center gap-6  '>
                                {navLinks.map(({ title, link }, i) =>
                                    <Link className={`text-md text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium `} href={link} key={i} onClick={handleCloseMenu}>{title}</Link>
                                )}
                            </nav>
                            <div className='flex flex-col items-center gap-4'>
                                <Link className='text-md text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium' href="/shopping" onClick={handleCloseMenu}>Shopping Cart</Link>
                                <Link className='text-md text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium' href="/wishlist" onClick={handleCloseMenu}>WishList</Link>
                                <Link className='text-md text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium' href="/register" onClick={handleCloseMenu}>signUp</Link>

                            </div>
                            <SheetFooter>
                                <Button asChild onClick={handleCloseMenu} className='font-light capitalize text-text bg-button ms-2 hover:text-text2 border-1'>
                                    <Link href="/login">signIn</Link>
                                </Button>
                                <SheetClose asChild>
                                    <Button variant="outline">Close</Button>
                                </SheetClose>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header >
    )
}

