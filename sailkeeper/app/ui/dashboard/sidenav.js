import Link from 'next/link';
import NavLinks from './nav-links';

export default function SideNav() {
    return (
        <div className='bg-gray-200 flex h-full flex-col px-3 py-4 md:px-2'>
            <Link
            className='mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40' href="/"
            >
            </Link>
            <div className='flex grow flex-row justify-between space-x-2 md:justify-start md:flex-col md:space-x-0 md:space-y-2'>
                <NavLinks />
            </div>
        </div>
    )
}