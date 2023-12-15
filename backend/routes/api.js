var express = require('express')
var Client = require('pg').Client;

router = express.Router()

router.get('/', (req, res) => {
    res.send('hello')
})

router.get('/db-connect/:country', async function(req, res) {
    let country = req.params.country;
    country = country.charAt(0).toUpperCase() + country.slice(1);
    console.log(country);
    const client = new Client({
        database: 'dis', //`DI${country}`,
        /*
        host: 'my.database-server.com',
        port: 5334,
        database: 'database-name',
        user: 'database-user',
        password: 'secretpassword!!',
        */
    });
    await client.connect();
    
    res = await client.query('SELECT $1::text as message', ['Hello world!']);
    console.log(res.rows[0].message); // Hello world!
    await client.end();
});

module.exports = router;