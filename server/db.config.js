import mysql from 'mysql2';

 //MySQL config 
 export const db_connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootroot',
    database: 'alana'
});




