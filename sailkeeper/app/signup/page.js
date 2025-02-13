'use client'

import { useState } from "react"
import BigButton from "../ui/components/big-button"
// import SignUpForm from "../ui/signup/signup";
import LoginForm from "../ui/login-form"; // This is a text to try the process


// import SignUpOrganization from "../ui/signup/organization"

export default function signUpNewOrganization() {

    const [showForm, setShowForm] = useState 
    (false);

    return (
        <>
        <div className="flex justify-center pt-10">
            <div className="md:pr-5">
            <BigButton buttonText="Sign Up an Organization" href=""/>
            </div>
            <div className="md:pr-5">
            <BigButton buttonText="Sign Up a new User" href=""/>
            </div>
        </div>

        <LoginForm className={ showForm ? "hidden" : "block"}/>

            {/* <SignUpOrganization /> */}
        </>

    )
}
