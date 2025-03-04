'use client'

import { useState } from "react"
import BigButton from "../ui/components/big-button"
import SignUpOrganization from "../ui/signup/organization";
import SignUpForm from "../ui/signup/signup";

export default function signUpNewOrganization() {

    const [showForms, setShowForms] = useState("")

    return (
        <main>
            <section className="flex justify-center pt-10">
                <div className="md:pr-5">
                <BigButton onClick={() => {
                    setShowForms("Organizations");
                }} buttonText="Sign Up an Organization" href=""/>
                </div>
                <div className="md:pr-5">
                <BigButton onClick={() => {
                    setShowForms("User")
                }} buttonText="Sign Up a new User" href=""/>
                </div>
            </section>
            <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:mt-10">
                <div className={`${showForms === "User" ? "hidden" : ''}`}>
                    <SignUpForm />
                </div>
                <div className={`${showForms === "Organizations" ? "hidden" : ''}`}>
                    <SignUpOrganization />   
                </div>

            </div>

                {/* <SignUpOrganization /> */}
        </main>

    )
}



// const [showUserForm, setShowUserForm] = useState(false);
    // const [showOrgForm, setShowOrgForm] = useState(false)