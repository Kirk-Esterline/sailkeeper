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

    return(
        <div>
            <nav className="size-full bg-navBackground text-center" id="nav">
                <ul className="py-2">
                    {links.map((link) => {
                        return(
                            <li className="inline-block">
                                <Link className={clsx("block text-white font-semibold leading-10 h-10 px-6",{'bg-sky-100 rounded-lg text-black': pathname === link.href,})} href={link.href}>
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

{/* <li className="inline-block"><Link className={clsx("block text-white font-semibold leading-10 h-10 px-6",{'bg-sky-100 text-blue-600': pathname === href,})} href="/">Home</Link></li>
<li className="inline-block"><Link className="block text-white font-semibold leading-10 h-10 px-6" href="/login">Login</Link></li>
<li className="inline-block"><Link className="block text-white font-semibold leading-10 h-10 px-6" href="/signup">Signup</Link></li>
<li className="inline-block"><Link className="block text-white font-semibold leading-10 h-10 px-6" href="#contact">Contact</Link></li> */}