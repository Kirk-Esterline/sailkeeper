'use client';

import {
    UserGroupIcon,
    HomeIcon,
    DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';

// Array of links to be used in the SideNav

const links = [
    { name: 'Home', href: '/dashboard', icon: HomeIcon },
    { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
    { name: 'Spars', href: '/dashboard/spars', icon: DocumentDuplicateIcon },
    { name: 'Sails/Covers', href: '/dashboard/sails-covers', icon: DocumentDuplicateIcon }
]

// Map the links to display in the side nav

export default function NavLinks() {
    const pathname = usePathname();
    return (
        <>
        {links.map((link) => {
            const LinkIcon = link.icon;
            return (
                <Link
                    key={link.name}
                    href={link.href}
                    className={clsx("flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
                        {
                            'bg-sky-100 text-blue-600': pathname === link.href,
                        }
                    )}
                >
                    <LinkIcon className='w-6' />
                    <p className='hidden md:block'>{link.name}</p>
                </Link>
            );
        })}
        </>
    )
}

// Array of links to be used in navbar

const navbarLinks = [
    { name: 'Home', href: '/'},
    { name: 'Login', href: '/login' },
    { name: 'Signup', href: '/signup' },
    { name: 'Contact', href: '/contact' }
]

export function NavbarLinks() {
    const pathname = usePathname();
    return(
        <>
        {navbarLinks.map((link) => {
            return (
                <Link
                    key={link.name}
                    href={link.href}
                    className={clsx('inline-block font-semibold leading-10 h-10 px-6', { '!bg-sky-100 rounded-lg text-black': pathname === link.href })}
                >
                    {link.name}
                </Link>
            )
        })}
        </>
    )
}