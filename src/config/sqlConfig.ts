import pg from 'pg'

const pool = new pg.Pool({
    user: 'postgres' as string,
    password: 'Dante99.' as string,
    database: 'ecommerce' as string,
    host: 'localhost' as string,
    port: 5432
 })

export default pool