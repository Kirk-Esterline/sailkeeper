import { useActionState } from "react"
// import { addOrganization } from "@/app/models/data"
import { addNewOrgData } from "@/app/lib/actions" 


export default function SignUpOrganization() {

     const [errorMessage, formAction, isPending] = useActionState(
            addNewOrgData,
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
                        htmlFor="biz_name">
                        Company Name
                    </label>
                    <div className="relative">
                        <input 
                        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                        id="biz_name"
                        name="biz_name" 
                        type="name" 
                        placeholder="Acme Boatyard" 
                        required 
                        />
                    </div>
                    <label
                        className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                        htmlFor="email">
                        Company Email
                    </label>
                    <div className="relative">
                        <input 
                        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                        id="email"
                        name="email" 
                        type="email" 
                        placeholder="info@acme.com" 
                        required>
                    </input>
                    </div>
                    <label
                        className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                        htmlFor="joinID">
                        Unique Business Name
                    </label>
                    <div className="relative">
                        <input 
                        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                        id="joinID"
                        name="joinID" 
                        type="string" 
                        placeholder="Join-Acme" 
                        required>
                        </input>
                    </div>
                        <h3 className="my-3 text-xl">
                            Admin Information
                        </h3>
                    <label
                        className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                        htmlFor="admin">
                        Administrator Name
                    </label>
                    <div className="relative">
                        <input 
                        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                        id="admin"
                        name="admin" 
                        type="name" 
                        placeholder="Administrator Name"
                        required>
                        </input> 
                    </div>
                    <label 
                        className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                        htmlFor="adminEmail">
                        Administrator Email
                    </label>
                    <div className="relative">
                        <input 
                        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                        id="adminEmail"
                        name="adminEmail" 
                        type="email" 
                        placeholder="name@acme.com" 
                        required>
                        </input>
                    </div>
                    <label
                        className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                        htmlFor="password">
                            Password
                    </label>
                    <div className="relative">
                        <input
                        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter Password"
                        required
                        ></input>
                    </div>
                    <label 
                        className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                        htmlFor="role">
                        Company Role
                    </label>
                    <div className="relative">
                        <input 
                        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                        id="role"
                        name="role" 
                        type="text" 
                        placeholder="Ex. Owner or Office Manager" 
                        required>
                        </input>
                    </div>
                <button type="submit" className="mt-5 bg-sky-100 rounded-lg text-slate-950 w-40">Create</button>
                </div>

            </div>
        </form>

    )
}