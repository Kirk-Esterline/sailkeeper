import { UserGroupIcon } from '@heroicons/react/24/outline'
import { getData, allCustomersData } from '@/app/models/data'


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
    } = await allCustomersData()  

    return (
        <div className='rounded-xl bg-gray-50 p-2 shadow-sm mt-5'>
            <div>
                <h1>Boatyard Overview:</h1>
            </div>
            <div>
                <h2>Total Customers: { totalCustomers } </h2>
                <h2>Total Boats: { totalBoats } </h2>
            </div>
        </div>
    )
    
}



export async function Card(
    {name, email, phone_number, delivery_address, boat_one, boat_two, boat_three}
) {
    
    return (
        <div className='rounded-xl bg-gray-50 p-2 my-5 shadow-sm'>
            <div className='flex p-4'>
                <Icon className='w-6 mr-5'/>
                <h3 className='ml-2 text-2xl font-large'>{name}</h3>
            </div>
            <p className='truncate rounded-xl bg-white px-4 py-8 text-left text-xl'>
                {email} <br />
                {phone_number} <br />
                {delivery_address} <br />
                {boat_one ? <span>First Boat: {boat_one}</span> : null} <br />
                {boat_two ? <span>Second Boat: {boat_two}</span> : null} <br />
                {boat_three ? <span>Third Boat: {boat_three}</span> : null}
            </p>
        </div>
    )
}