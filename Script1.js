const sql = require('mssql');

const config = {
    user: 'sa',
    password: 'harish8895',
    server: 'HARI-RAMA',
    database: 'new',
    port: 1433, // Default SQL Server port
    options: {
        encrypt: true, // For Azure
        trustServerCertificate: true // For local SQL Server
    }
};

sql.connect(config)
    .then(pool => {
        console.log('Connected to SQL Server');
    })
    .catch(err => {
        console.error('Database connection failed:', err);
    });
