const { Client } = require('pg');

// Objeto de configuración
const config = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
};

// Crear el cliente de PostgreSQL
const client = new Client(config);

// Conectar y ejecutar una consulta
client.connect(err => {
    if (err) {
        return console.error('Error al conectar a la base de datos:', err.stack);
    }

    console.log('Conectado a la base de datos.');

    // Ejecutar la consulta que devuelve el momento actual
    client.query('SELECT NOW()', (err, res) => {
        if (err) {
            return console.error('Error al ejecutar la consulta:', err.stack);
        }

        console.log('Resultado de la consulta:', res.rows);
        
        // Cerrar la conexión
        client.end();
    });
});
