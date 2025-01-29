'use client';

import Link from "next/link";
import { clsx } from "clsx";
import { usePathname } from "next/navigation";
import { NavbarLinks } from "./nav-links";

export default function Navbar() {
    const pathname = usePathname()

// Map the Array and build lis with links
    return(
        <div>
            <nav className="size-full bg-navBackground text-white text-center py-1" id="nav">
                <div>
                    <NavbarLinks />
                </div>
            </nav>
        </div>
    )
}
