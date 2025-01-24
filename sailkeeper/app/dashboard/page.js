import { page } from "../models/data";
import { Card } from "../ui/dashboard/cards";

export default async function Home() {
    
    const data = await page(); 

    console.log(data)
    
    return (
        <div>
            Welcome to the Dashboard

            <Card />
        </div>
    )
}