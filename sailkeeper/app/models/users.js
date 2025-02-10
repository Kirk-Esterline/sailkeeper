import { neon } from "@neondatabase/serverless";
import bcrypt from "bcrypt";

const sql = neon(process.env.DATABASE_URL)

// Attempting to add hash users passwords before adding them to the data base.

export async function addNewUser(formData) {
    const [name, email, password, role, admin, joinId] = formData
    
    console.log([name, email, password, role, joinId])
    let hashedPassword
// Creating hashed passwords in the try/catch block
   try {
        const saltRounds = 11
        bcrypt.genSalt(saltRounds, (err, salt) => {
            if (err) {
                console.log(err)
                return
            }
            bcrypt.hash(password, salt , (err, hash) => {
                if (err) {
                    console.log(err)
                    return
                }
                
                console.log(`newly hashed password is: ${hash}`)

                hashedPassword = hash
                addToDatabase()
            })
        })
    } catch (error) {
        console.error('Error hashing new password', error);
        throw new Error ('Failed to hash new password')
    }
    
    function addToDatabase() {
        try { 
             sql `
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
    
}