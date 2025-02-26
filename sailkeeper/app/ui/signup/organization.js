import { useActionState } from "react"
import { addOrganization } from "@/app/models/data"
// import { addNewOrdData } from "@/app/lib/actions" 


export default function SignUpOrganization() {

     const [errorMessage, formAction, isPending] = useActionState(
            addOrganization,
            undefined
        )
    
    // async function sendOrganizationData(formData) {
    //     'use server'
    //     const newData = [formData.get('BizName'),formData.get('email'), formData.get('admin'),formData.get('joinID')]
    //     await addOrganization(newData)
    //     await addAdmin(newData)
    // }

    return (
        <form action={formAction} className="space-y-3">
            <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
                <h2 className="mb-3 text-2xl">
                    Provide Company and Admin Information
                </h2>
                <div className="w-full">
                    <h3 className="mb-3 text-xl">Company Information</h3>
                    <label
                        className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                        htmlFor="BizName">
                        Company Name
                    </label>
                    <div className="relative">
                        <input 
                        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                        id="BizName"
                        name="BizName" 
                        type="name" 
                        placeholder="Company Name" 
                        required 
                        />
                    </div>
                        <input name="email" type="email" placeholder="Email" className="block py-3 my-1" required></input>
                        <input name="admin" type="string" placeholder="Admin Name" className="block py-3 my-1" required></input> 
                        <input name="joinID" type="string" placeholder="Unique Business Name" className="block py-3 my-1" required></input>
                    <section className="w-3/6">
                        <h3>Admin Information</h3>
                        <input name="userName" type="text" placeholder="Admin Name" className="block py-3 my-1" required></input>
                        <input name="adminEmail" type="text" placeholder="Admin Email" className="block py-3 my1" required></input>
                        <input name="role" type="text" placeholder="Company Role" className="block py-3 my-1" required></input>
                    </section>
                </div>
                <button type="submit" className="bg-sky-100 rounded-lg text-slate-950 w-40">Create</button>

            </div>
        </form>

    )
}