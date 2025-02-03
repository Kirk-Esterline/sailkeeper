
import Link from "next/link"

// import SignUpOrganization from "../ui/signup/organization"

export default function signUpNewOrganization() {
    return (
        <>
            <Link href="/signup/organization"> Sign Up an Organization</Link>
            <Link href="/login">Sign Up a New User</Link>

            {/* <SignUpOrganization /> */}
        </>

    )
}
