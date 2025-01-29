import { BoatyardName, Card } from "@/app/ui/dashboard/cards"
import { allCustomersData } from "@/app/models/data"

export default async function Home() {
    const { customers } = await allCustomersData()

    return (
        <div>
            <h1>{<BoatyardName />} Customers</h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 pt-4">
                {customers.map(customer =>
                    <Card key={customer.id} name={customer.name} email={customer.email} phone_number={customer.phone_number} delivery_address={customer.delivery_address} boat_one={customer.boat_one} boat_two={customer.boat_two} boat_three={customer.boat_three} />
                )
                }
            </div>    
        
        </div>
    )
}

