import { UserGroupIcon } from '@heroicons/react/24/outline'
import { totalCustomers } from '@/app/models/data'

const Icon = UserGroupIcon


export async function Card() {
    const customers = await totalCustomers()

    return (
        <div className='rounded-xl bg-gray-50 p-2 shadow-sm'>
            <div className='flex p-4'>
                <Icon className='w-6'/>
            </div>
        </div>
    )
}