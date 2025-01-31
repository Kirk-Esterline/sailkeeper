
import { addOrganization, addAdmin } from "../models/data"


export default async function SignUpPage() {
    
    async function sendOrganizationData(formData) {
        'use server'
        const newData = [formData.get('BizName'),formData.get('email'), formData.get('admin'),formData.get('joinID'),formData.get('userName'), formData.get('adminEmail'), formData.get('role')]
        await addOrganization(newData)
        await addAdmin(newData)
    }

    return (
        <>
        <div className="md:w-2/5 bg-slate-500 mx-10 my-10 px-10 py-10 md:inline-block">
            <h2 className="text-navBackground text-center">Sign Up a New Organization</h2>
            <form action={sendOrganizationData} >
                <div className="flex">
                    <section className="w-3/6">
                        <h3>Company Information</h3>
                        <input name="BizName" type="text" placeholder="Business Name" className="block py-3 my-1" required></input>
                        <input name="email" type="email" placeholder="Email" className="block py-3 my-1" required></input>
                        <input name="admin" type="string" placeholder="Admin Name" className="block py-3 my-1" required></input> 
                        <input name="joinID" type="string" placeholder="Unique Business Name" className="block py-3 my-1" required></input>
                    </section>
                    <section className="w-3/6">
                        <h3>Admin Information</h3>
                        <input name="userName" type="text" placeholder="Admin Name" className="block py-3 my-1" required></input>
                        <input name="adminEmail" type="text" placeholder="Admin Email" className="block py-3 my1" required></input>
                        <input name="role" type="text" placeholder="Company Role" className="block py-3 my-1" required></input>
                    </section>
                </div>
            <button type="submit" className="bg-sky-100 rounded-lg text-slate-950 w-40">Create</button>
            </form>
            
        </div>
        <div className="md:w-2/5 bg-slate-500 h-64 mx-10 my-10 px-10 py-10 md:inline-block">

        </div>
        </>

    )
}