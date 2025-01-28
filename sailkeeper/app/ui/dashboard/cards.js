import { UserGroupIcon } from '@heroicons/react/24/outline'
import { getData, totalCustomersData } from '@/app/models/data'


const Icon = UserGroupIcon

export async function BoatyardName() {
    const name = await getData()
   
    return (
        <span className='font-extrabold'>{name}</span>
    )
}

export async function CardWrapper() {
    const {
        totalCustomers,
        totalBoats
    } = await totalCustomersData()  

    return (
        <>
        Total Customers: {totalCustomers} Total Boats: {totalBoats}
        </>
    )
    
}



export async function Card() {
    const customers = await totalCustomersData()

    return (
        <div className='rounded-xl bg-gray-50 p-2 shadow-sm'>
            <div className='flex p-4'>
                <Icon className='w-6'/>
            </div>
        </div>
    )
}