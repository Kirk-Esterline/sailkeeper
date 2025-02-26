'use server'

import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { addNewUser } from "../models/users";
import { addOrganization } from "../models/users";
import { addAdmin } from "../models/users";

export async function authenticate(prevState, formData) {
    console.log(formData)
    try {
        await signIn('credentials', formData)
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                default:
                    return 'Something went wrong.'
            }
        }
        throw error;
    }
}

export async function addNewUserData(prevState, formData) {
    console.log(formData.name)
    try {
        await addNewUser(formData)
    } catch (error) {
        throw new Error('Something went wrong in lib actions:', error)
    }
}

export async function addNewOrgData(prevState, formData) {
    try {
        console.log('This is a test')
        await addOrganization(formData)
        await addAdmin(formData)
    } catch (error) {
        throw new Error('Something went wrong in lib actions:', error)
    }
}