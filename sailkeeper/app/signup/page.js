
import { consoleTest } from "../models/data"


export default async function SignUpPage() {
    
    async function testConsole(formData) {
        'use server'
        const newData = [formData.get('BizName'), formData.get('joinID')]
        console.log("FormData in client-side function:", formData.get('joinID'))
        await consoleTest(newData)
    }

    return (
        <>
        <div className="md:w-2/5 bg-slate-500 mx-10 my-10 px-10 py-10 md:inline-block">
            <h2 className="text-navBackground">Sign Up a New Organization</h2>
            <form action={testConsole}>
                <input name="BizName" type="text" placeholder="Business Name" className="block py-3 my-1" required></input>
                <input name="email" type="email" placeholder="Email" className="block py-3 my-1" required></input>
                <input name="admin" type="string" placeholder="Admin Name" className="block py-3 my-1" required></input> 
                <input name="joinID" type="string" placeholder="Unique Business Name" className="block py-3 my-1" required></input>
            <button type="submit" className="bg-sky-100 rounded-lg text-slate-950 w-40">Create</button>
            </form>
            
        </div>
        <div className="md:w-2/5 bg-slate-500 h-64 mx-10 my-10 px-10 py-10 md:inline-block">

        </div>
        </>

    )
}