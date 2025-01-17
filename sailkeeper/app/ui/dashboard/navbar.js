'use client';

import Link from "next/link";
import { clsx } from "clsx";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname()

// Array of links to be used in the Navbar
    const links = [
        { name: 'Home', href: '/'},
        { name: 'Login', href: '/login' },
        { name: 'Signup', href: '/signup' },
        { name: 'Contact', href: '/contact' }
    ]

// Map the Array and build lis with links
    return(
        <div>
            <nav className="size-full bg-navBackground text-center" id="nav">
                <ul className="py-2">
                    {links.map((link) => {
                        return(
                            <li key={link.name} className="inline-block">
                                <Link className={clsx("block text-white font-semibold leading-10 h-10 px-6",{ 'bg-sky-100 rounded-lg text-black': pathname === link.href })} href={link.href}>
                                {link.name}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}
