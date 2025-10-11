'use client'
import { Icons } from '@/_Components/icons/icons';
import SearchInput from '@/_Components/shared/SearchInput/SearchInput';
import { Badge } from '@/_Components/ui/badge';
import { Button } from '@/_Components/ui/button';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTrigger
} from "@/_Components/ui/sheet";
import { getUserCart } from '@/app/_services/cart.services';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'sonner';
import ThemeToggle from '../../shared/ThemeToggle/ThemeToggle';

export default function Navbar() {
    const { data: isAuth } = useSession()
    const [initialCartCount, setInitialCartCount] = useState(0)
    const [isOpenNav, setisOpenNav] = useState(false)
    const pathname = usePathname()
    const { count } = useSelector((state) => state.cartCount)

    console.log(count);
    const handleCloseMenu = () => {
        setisOpenNav(false)
    }

    const navLinks = [
        { title: 'Home', link: '/' },
        { title: 'Contact', link: '/contact' },
        { title: 'About', link: '/about' },
        { title: 'Products', link: '/products' },
    ]
    async function handleLogout() {
        const res = await signOut({
            redirect: true,
            callbackUrl: '/login',
        })
        toast.success('Logout Successful')
    }
    useEffect(() => {
        async function getCountNumber() {
            const res = await getUserCart()
            if (res) {
                setInitialCartCount(res?.numOfCartItems)
            }
        }
        getCountNumber()
    }, [])

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
                    <nav className='hidden lg:flex items-center gap-8'>
                        {navLinks.map(({ title, link }, i) =>
                            <Link className={`text-sm navbarLink ${pathname === link ? 'active' : ''} decoration-gray-400 dark:decoration-white `} href={link} key={i}>{title}</Link>
                        )}
                    </nav>
                    {/* actions btns in mobile */}
                    <div className='flex ms-auto gap-3 me-4 md:hidden'>
                        <Link href={'/wishlist'} className='relative'>
                            <Icons.heart />
                            <Badge variant={'destructive'} className="absolute top-0 end-0 h-4 min-w-4 rounded-full px-1 font-mono tabular-nums">
                                8
                            </Badge>
                        </Link>
                        <Link href={'/cart'} className='relative'>
                            <Icons.cart />
                            <Badge variant={'destructive'} className="absolute top-0 end-0 h-4 min-w-4 rounded-full px-1 font-mono tabular-nums">
                                {count || initialCartCount}
                            </Badge>
                        </Link>
                    </div>
                    {/* actions btns in desktop */}
                    <div className='hidden md:flex items-center  gap-4'>
                        <SearchInput />
                        {isAuth ?
                            <>
                                <div className='flex gap-2'>
                                    <Link href={'/wishlist'} className='relative'>
                                        <Icons.heart />
                                        <Badge variant={'destructive'} className="absolute top-0 end-0 h-4 min-w-4 rounded-full px-1 font-mono tabular-nums">
                                            {/* {count} */}
                                        </Badge>
                                    </Link>
                                    <Link href={'/cart'} className='relative'>
                                        <Icons.cart />
                                        <Badge variant={'destructive'} className="absolute top-0 end-0 h-4 min-w-4 rounded-full px-1 font-mono tabular-nums">
                                            { count || initialCartCount}
                                        </Badge>
                                    </Link>
                                </div>
                                <Button onClick={handleLogout} asChild className='font-light capitalize text-text bg-button cursor-pointer dark:bg-white dark:text-Bg ms-2 hover:text-text2 border-1'>
                                    <span >logout</span>
                                </Button>
                            </> :
                            <>
                                <Link className='font-light capitalize' href="/register">signUp</Link>
                                <Button asChild className='font-light capitalize text-text bg-button dark:bg-white dark:text-Bg ms-2 hover:text-text2 border-1'>
                                    <Link href="/login">signIn</Link>
                                </Button>
                            </>

                        }
                    </div>
                    {/* mobile menu */}
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
                                {isAuth ?
                                    <Button asChild onClick={() => { handleCloseMenu(); handleLogout() }} className='font-light capitalize text-text bg-button ms-2 hover:text-text2 border-1'>
                                        <Link href="/logout">Logout</Link>
                                    </Button>
                                    :
                                    <>
                                        <Button asChild onClick={handleCloseMenu} className='font-light capitalize text-text bg-button ms-2 hover:text-text2 border-1'>
                                            <Link href="/register">signUp</Link>
                                        </Button>
                                        <Button asChild onClick={handleCloseMenu} className='font-light capitalize text-text bg-button ms-2 hover:text-text2 border-1'>
                                            <Link href="/login">signIn</Link>
                                        </Button>
                                    </>
                                }
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

