import { page } from "../models/data";

export default async function Home() {
    
    const data = await page(); 

    console.log(data)
    
    return (
        <div>
            Welcome to the Dashboard

        </div>
    )
}