import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);

 async function getData() {
    const response = await sql`SELECT version()`;
    return response[0].version
}

export async function page() {
    const data = await getData();
    return data
}

export async function totalCustomers() {
    const customers = await sql`SELECT * FROM customers;`
    console.log(customers)
}