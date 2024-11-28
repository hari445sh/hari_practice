const sql = require('mssql');

// Database configuration
const config = {
    user: 'sa',            // Replace with your MSSQL username
    password: 'harish8895',        // Replace with your MSSQL password
    server: 'HARI-RAMA',              // Replace with your server's hostname or IP
    database: 'new',   // Replace with your database name
    port: 1433,  // Default port for MSSQL
    Timeout:10000,
    options: {
        encrypt: true,                  // Use encryption (set to true for Azure)
        trustServerCertificate: true    // Required for self-signed certificates
    }
};

// Connect to the database
async function connectToDatabase() {
    try {
        const pool = await sql.connect(config);
        console.log('Connected to the database successfully!');

        // Example query
        const result = await pool.request().query('SELECT * FROM employeedetails');
        console.log(result);

        // Close the connection pool
        await pool.close();
    } catch (err) {
        console.error('Database connection failed:', err);
    }
}

connectToDatabase();
