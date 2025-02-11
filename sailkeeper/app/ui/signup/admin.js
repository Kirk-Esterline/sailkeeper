import { addAdmin } from "@/app/models/data";

export default function AddAdmin () {

    async function addAdminData(formData) {
        'use server'
        const newData = [formData.get('userName'), formData.get('adminEmail'), formData.get('role')]
        await addAdmin(newData)
    }

    return (
        <>
        <div className="md:w-2/5 bg-slate-500 mx-10 my-10 px-10 py-10 md:inline-block">
            <h2 className="text-navBackground text-center">Sign Up An Administrator</h2>
            <form action={addAdminData} >
                <div className="flex">
                    <section className="w-3/6">
                        <h3>Admin Information</h3>
                        <input name="userName" type="text" placeholder="Admin Name" className="block py-3 my-1" required></input>
                        <input name="adminEmail" type="text" placeholder="Admin Email" className="block py-3 my1" required></input>
                        <input name="password" type="text" placeholder="Password" className="block py-3 my-1" required></input>
                        <input name="role" type="text" placeholder="Company Role" className="block py-3 my-1" required></input>
                    </section>
                </div>
            <button type="submit" className="bg-sky-100 rounded-lg text-slate-950 w-40">Create</button>
            </form>
        </div>
        </>

    )

}