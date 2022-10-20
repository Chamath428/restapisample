const db = require('mysql');

const connection = db.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'tododb'    
}
)

module.exports = connection;