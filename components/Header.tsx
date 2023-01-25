import { useState, useEffect } from 'react'
import Image from "next/image";
import logo from "../image/logo.png";
import avatar from '../image/avatar.png';
import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Link from "next/link";


const Header = () => {

    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handelScroll = () => {
            if (window.scrollY) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handelScroll)
        return () => {
            window.removeEventListener('scroll', handelScroll)
        }
    }, [])

    return (
        <header className={`${isScrolled && 'bg-[#141414]'}`}>
            <div className="flex items-center space-x-2 md:spacing-x-10 ">
                <Image
                    src={logo}
                    width={100}
                    height={100}
                    alt='netflix logo'
                    className="cursor-pointer object-contain" />

                <ul className="hidden space-x-4 md:flex">
                    <li className="headerLink">Home</li>
                    <li className="headerLink">TV Shows</li>
                    <li className="headerLink">Movies</li>
                    <li className="headerLink">New & Popular</li>
                    <li className="headerLink">My list</li>

                </ul>
            </div>

            <div className="flex items-center space-x-4 text-sm font-light">
                <MagnifyingGlassIcon className="w-6 h-6 headerLink sm:inline" />
                <p className="hidden lg:inline ">Kids</p>
                <BellIcon className="w-6 h-6 headerLink sm:inline" />
                <Link href='/account' >
                    <Image src={avatar} alt='netflix avatar' className="cursor-pointer rounded w-6 h-6 " />
                </Link>
            </div>
        </header>
    )
}

export default Header
