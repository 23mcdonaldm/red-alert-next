import { Pool } from 'pg'

const pool = new Pool({
  host: process.env.POSTGRES_HOST || 'localhost',
  user: process.env.POSTGRES_USER || 'postgres',
  port: process.env.POSTGRES_PORT || 5432,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE || 'redalert'
})

const testConnection = async () => {
    try {
      const client = await pool.connect()
      console.log('Successfully connected to PostgreSQL')
      client.release() // Release the client back to the pool
    } catch (err) {
      console.error('Database connection error:', err)
    }
  }
  
  testConnection() // Execute the test

export { pool }