const mysql =require('promise-mysql')

mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'almacen'
})

function getConnection() {
    return getConnection;
}

module.exports = {
    getConnection
}