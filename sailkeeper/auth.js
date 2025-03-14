import NextAuth from "next-auth";
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import bcrypt from 'bcrypt';
import postgres from 'postgres'

const sql = postgres(process.env.DATABASE_URL, { ssl: 'require'});

async function getUser(email) {
    try {
        const user = await sql`SELECT * FROM users WHERE email=${email}`;
        return user[0]
    } catch(error) {
        console.error('Failed to fetch user:', error);
        throw new Error('Failed to fetch user.');
    }
}



export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({ email: z.string().email(), password: z.string().min(6)})
                    .safeParse(credentials);

                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data;
                    const user = await getUser(email)
                    if (!user) return null;
                    const passwordsMatch = await bcrypt.compare(password, user.password);
        // If passwords match return user
                    if (passwordsMatch) return user
                }
        // If passwords don't match return null
                console.log('Invalid Credentials')
                return null;
            },
        }),
    ],
})

export async function generatePassword(password) {
    try {
        const saltRounds = 11
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(password, salt)
        return hashedPassword
    } catch (error) {
        console.error('Error generating new password.', error);
        throw new Error('Failed to hash password');
    }
} 