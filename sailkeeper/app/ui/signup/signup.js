
// import { useActionState } from "react";
// import { authenticate } from "../../lib/actions";
// import { useSearchParams } from "next/navigation";
import { addNewUser } from "@/app/models/users";

export default function SignUpForm() {
    // const searchParams = useSearchParams();
    // const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';
    // const [errorMessage, formAction, isPending] = useActionState(
    //     authenticate,
    //     undefined,
    // );

    async function sendUserData(formData) {
        'use server'
        const userData = [formData.get('name'), formData.get('email'), formData.get('password'), formData.get('role'), formData.get('admin'), formData.get('joinId')]
        
        await addNewUser(userData)
    }

    return (
        <form action={sendUserData} className="space-y-3">
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
                <input type="hidden" name="admin" value={true} />
                {/* Removed as a test case to see how the flow works without <input type="hidden" name="redirectTo" value={callbackUrl} /> */}
                <button className="mt-4 w-full"> {/* Removed as a test case to see how the flow works without aria-disabled={isPending}> */}
                    Sign Up
                </button>
                <div
                 className="flex h-8 items-end space-x-1"
                 aria-live="polite"
                 aria-atomic="true"
                 >
                    {/* Removed as a test case to see how the flow works without {errorMessage && (
                        <>
                            <p className="text-sm text-red-500">{errorMessage}</p>
                        </>
                    )} */}
                 </div>
            </div>
            </div>
        </form>
    )
}