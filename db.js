const Pool = require('pg').Pool

const pool = new Pool({
    user:'postgres',
    password:'root',
    host:'62.113.105.58:5000',
    port:'5432',
    database:"node_postgres"
})

module.exports = pool
