import { neon } from '@neondatabase/serverless';


const sql = neon(process.env.DATABASE_URL);

// A temporary hacky way of getting the Boatyard Name to show on the Dashboard.
// Checking the list of customers and retrieving the biz_name from the first entry.
 export async function getData() {
    try {
        const response = await sql`SELECT biz_name 
        From customers AS c 
        JOIN organizations AS b 
        ON c.organization_id = b.id
        LIMIT 1`;
        return response[0].biz_name
    } catch (error) {
        console.error('Database Error selecting getData:', error)
        throw new Error('Failed to fetch card data.')
    }
}


export async function allCustomersData() {
    try{
        const getTotalCustomersPromise = sql`SELECT COUNT(*) FROM customers;`;
        const getCustomers = sql`SELECT * FROM customers`
        const getTotalBoatsPromise = sql`SELECT
            subquery.count_boat_one,
            subquery.count_boat_two,
            subquery.count_boat_three,
            (subquery.count_boat_one + subquery.count_boat_two + subquery.count_boat_three) AS total_count
            FROM(
                SELECT
                    COUNT(CASE WHEN boat_one IS NOT NULL AND boat_one <> '' THEN 1 END) AS count_boat_one,
                    COUNT(CASE WHEN boat_two IS NOT NULL AND boat_two <> '' THEN 1 END) AS count_boat_two,
                    COUNT(CASE WHEN boat_three IS NOT NULL AND boat_three <> '' THEN 1 END) AS count_boat_three
                FROM customers)
            AS subquery`
        
        const data = await Promise.all([
            getTotalCustomersPromise,
            getTotalBoatsPromise,
            getCustomers
        ])
        
        // Extracting the desired data out of the objects returned from the Database.
        const totalCustomers = Number(data[0][0].count)
        const totalBoats = Number(data[1][0].total_count)
        const customers = data[2]

        return {
            totalCustomers,
            totalBoats,
            customers
        }
    } catch (error) {
        console.error('Database Error selecting totalCustomersData:', error);
        throw new Error('Failed to fetch card data.')
    }
}


// Add organizations the table

export async function addOrganization(formData) {
    const [biz_name, email, admin, joinid] = formData
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
    const [biz_name,,,joinid, userName, email, role] = formData
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