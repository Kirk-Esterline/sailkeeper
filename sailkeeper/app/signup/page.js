'use client'

import { useState } from "react"
import BigButton from "../ui/components/big-button"
import SignUpOrganization from "../ui/signup/organization";
import SignUpForm from "../ui/signup/signup";


// import SignUpOrganization from "../ui/signup/organization"

export default function signUpNewOrganization() {

    const [showUserForm, setShowUserForm] = useState(false);
    const [showOrgForm, setShowOrgForm] = useState(false)

    return (
        <main>
            <section className="flex justify-center pt-10">
                <div className="md:pr-5">
                <BigButton onClick={() => setShowOrgForm(prevState => !prevState)} buttonText="Sign Up an Organization" href=""/>
                </div>
                <div className="md:pr-5">
                <BigButton onClick={() => setShowUserForm(prevState => !prevState)} buttonText="Sign Up a new User" href=""/>
                </div>
            </section>
            <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:mt-10">
                <div className={`${!showUserForm ? "hidden" : ''}`}>
                    <SignUpOrganization />
                </div>
                <div className={`${!showOrgForm} ? "hidden" : ''`}>
                    <SignUpForm />   
                </div>

            </div>

                {/* <SignUpOrganization /> */}
        </main>

    )
}

