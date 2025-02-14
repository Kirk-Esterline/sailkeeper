import { useActionState } from "react";
import { addNewUserData } from "@/app/lib/actions";
// import { addNewUser } from "@/app/models/users";

export default function SignUpForm() {

    // Using useActionState to send the form data to the database through the actions file.
    
    const [errorMessage, formAction, isPending] = useActionState(
        addNewUserData,
        undefined
    )

    return (
        <form action={formAction} className="space-y-3">
            <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
                <h1 className="mb-3 text-2xl">
                    Please sign up to continue.
                </h1>
                <div className="w-full">
                    <div>
                        <label
                            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                            htmlFor="name"
                        >
                            Name
                        </label>
                        <div className="relative">
                            <input
                             className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                             id="name"
                             type="name"
                             name="name"
                             placeholder="Enter your name"
                             required
                             />
                        </div>
                        <label
                            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <div className="relative">
                            <input
                             className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                             id="email"
                             type="email"
                             name="email"
                             placeholder="Enter your email address"
                             required
                             />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label
                         className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                         htmlFor="password"
                         >
                            Password
                         </label>
                         <div className="relative">
                            <input
                             className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                             id="password"
                             type="password"
                             name="password"
                             placeholder="Enter Password"
                             required
                             minLength={6}
                             />
                         </div>
                         <label
                         className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                         htmlFor="role"
                         >
                            Organization Role
                         </label>
                         <div className="relative">
                            <input
                             className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                             id="role"
                             type="role"
                             name="role"
                             placeholder="Enter Organization Role"
                             required
                             />
                        <label
                         className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                         htmlFor="joinId"
                         >
                            Unique JoinID
                         </label>
                         <div className="relative">
                            <input
                             className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                             id="joinId"
                             type="joinId"
                             name="joinId"
                             placeholder="Enter unique join"
                             required
                             />
                         </div>
                    </div>
                </div>
                <input type="hidden" name="admin" value={false} />
                <button className="mt-4 w-full"> 
                    Sign Up
                </button>
                <div
                 className="flex h-8 items-end space-x-1"
                 aria-live="polite"
                 aria-atomic="true"
                 >
                 </div>
            </div>
            </div>
        </form>
    )
}