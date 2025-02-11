import { neon } from "@neondatabase/serverless";
import { generatePassword } from "@/auth";

const sql = neon(process.env.DATABASE_URL)

// Collecting user data from Sign Up form. That information is sent to auth.js to be salted and hashed. After that step the information is then sent to the database.

export async function addNewUser(formData) {
    const [name, email, password, role, admin, joinId] = formData
    
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