import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);

async function getData() {
    const response = await sql`SELECT version()`;
    return response[0].version
}

export default async function Page() {
    const data = await getData();
    console.log(data)
    return <>{data}</>
}