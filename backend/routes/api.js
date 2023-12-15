var express = require('express')
var Client = require('pg').Client;

country_codes = {
    'finland': 'fi',
    'sweden': 'se',
    'norway': 'no',
    'denmark': 'dk',
    'estonia': 'ee'
}

router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello from API')
})

// get all games from a country
router.get('/games/:country', async function(req, res) {
    const country = req.params.country;
    const client = new Client({
        database: `di${country}`,
    });
    await client.connect();
    
    // Estonia db replicates Sweden db, so get only Estonia's data
    if (country == 'estonia') {
        country_code = country_codes['estonia']
        result = await client.query('SELECT * FROM Videogame WHERE country = $1;', [country_code]);
    }
    else {
        result = await client.query('SELECT * FROM Videogame;');
    }
    console.log(res.rows);
    await client.end();

    return res.json(result.rows)
});

// get one game's information
router.get('/game/:country/:id', async function(req, res) {
    const vg_id = req.params.id;
    const country = req.params.country;
    const client = new Client({
        database: `di${country}`,
    });
    await client.connect();
    
    // account for replication in Estonia's database
    if (country == 'estonia') {
        country_code = country_codes['estonia']
        result = await client.query('SELECT * FROM Videogame WHERE vg_id = $1 AND country = $2;', [vg_id, country_code]);
    }
    else {
        result = await client.query('SELECT * FROM Videogame WHERE vg_id = $1;', [vg_id]);
    }
    await client.end();
    return res.json(result.rows)
});

// get participated developers for a game
router.get('/developers/:country/:id', async function(req, res) {
    const vg_id = req.params.id;
    const country = req.params.country;
    const client = new Client({
        database: `di${country}`,
    });
    await client.connect();
    
    result = await client.query('SELECT * FROM ParticipatedDevelopers WHERE vg_id = $1;', [vg_id]);
    await client.end();
    return res.json(result.rows)
});

// get one developer's information
router.get('/developer/:country/:id', async function(req, res) {
    const dev_id = req.params.id;
    const country = req.params.country;
    const client = new Client({
        database: `di${country}`,
    });
    await client.connect();
    
    result = await client.query('SELECT * FROM Developer WHERE dev_id = $1;', [dev_id]);
    console.log(result);
    await client.end();

    return res.json(result.rows[0]);
});

// get one publisher's information
router.get('/publisher/:country/:id', async function(req, res) {
    const pub_id = req.params.id;
    const country = req.params.country;
    const client = new Client({
        database: `di${country}`,
    });
    await client.connect();
    
    result = await client.query('SELECT * FROM Publisher WHERE pub_id = $1;', [pub_id]);
    console.log(res.rows[0]);
    await client.end();

    return res.json(result.rows[0])
});

// delete game from a database
router.delete('/delete/game/:country/:id', async function(req, res) {
    const vg_id = req.params.id;
    const client = new Client({
        database: `di${country}`,
    });
    await client.connect();
    
    result = await client.query('DELETE FROM Videogame WHERE vg_id = $1;', [vg_id]);
    console.log(res.rows[0]);
    await client.end();

    return res.json(result.rows[0])
});

// update a game's information
router.put('/update/game/:id', async function(req, res) {
    const vg_id = req.params.id;
    const country = req.body.country;
    
    const updatedField = req.body.field
    const newValue = req.body.value
    const client = new Client({
        database: `di${country}`,
    });
    await client.connect();
    
    result = await client.query('UPDATE Videogame SET $1 = $2 WHERE vg_id = $3;', [updatedField, newValue, vg_id]);
    console.log(result.rows[0]);
    await client.end();

    // make replication to Estonia db if Sweden db is updated
    if (country == 'sweden') {
        const estoniaClient = new Client({
            database: `diestonia`,
        });
        await estoniaClient.connect();
        result = await estoniaClient.query('UPDATE Videogame SET $1 = $2 WHERE vg_id = $3;', [updatedField, newValue, vg_id]);
        await estoniaClient.end();
    }

    return res.json(result.rows[0])
});

module.exports = router;