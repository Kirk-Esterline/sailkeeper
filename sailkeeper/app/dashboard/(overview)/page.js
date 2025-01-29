import { BoatyardName, Card, CardWrapper } from "../../ui/dashboard/cards";
import { allCustomersData } from "../../models/data";

export default async function Home() {
    
    const { customers } = await allCustomersData()

    return (
        <div>
            Welcome to the <BoatyardName/> Dashboard

            <CardWrapper />
            
        </div>
    )
}