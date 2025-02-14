import { neon } from "@neondatabase/serverless";
import { generatePassword } from "@/auth";

const sql = neon(process.env.DATABASE_URL)

// Collecting user data from Sign Up form. That information is sent to auth.js to be salted and hashed. After that step the information is then sent to the database.

export async function addNewUser(formData) {

    const name = formData.get('name')
    const email = formData.get('email')
    const password = formData.get('password')
    const role = formData.get('role')
    const admin = formData.get('admin')
    const joinId = formData.get('joinId')
    
    console.log([name, email, password, role, joinId])
    
// Hashing the password with function from Auth.js

    const hashedPassword = await generatePassword(password)

// Adding the new user information to the database
    try { 
        await sql `
        INSERT INTO users (name, email, role, admin, organization_id, password)
        SELECT ${name}, ${email}, ${role}, ${admin}, (
            SELECT id
            FROM organizations
            WHERE joinid = ${joinId}
        ), ${hashedPassword}
        WHERE NOT EXISTS (
            SELECT 1
            FROM users
            WHERE email = ${email}
            )`
    } catch(error) {
        console.error('Error adding New User to Database', error)
        throw new Error('Failed to add new user to Database')
    }
}

export async function addOrganization(formData) {
    const biz_name = formData.get('name')
    const email = formData.get('email')
    const admin = formData.get('admin')
    const joinid = formData.get('joinId')
    try{
        await sql`
            INSERT INTO organizations (biz_name, email, admin, joinid)
            SELECT ${biz_name}, ${email}, ${admin}, ${joinid}
            WHERE NOT EXISTS (
                SELECT 1
                FROM organizations
                WHERE biz_name = ${biz_name} or joinid = ${joinid}
                )`
    } catch (error) {
        console.error('Error addingOrganization', error);
        throw new Error('Failed to addOrganization')
    }
}

export async function addAdmin(formData) {
    const biz_name = formData.get('biz_name')
    const joinid = formData.get('joinID')
    const userName = formData.get('userName')
    const adminEmail = formData.get('adminEmail')
    const role = formData.get('role')
    try{
        await sql`
            INSERT INTO users (name, email, role, admin, organization_id)
            SELECT ${userName}, ${email}, ${role}, TRUE, (
                SELECT id 
                FROM organizations 
                WHERE joinid = ${joinid}
            )
            WHERE NOT EXISTS (
                SELECT 1
                FROM users
                WHERE email = ${email}
                )`
    } catch (error) {
        console.error('Error addingAdmin', error)
        throw new Error('Failed to addAdmin')
    }
    
}