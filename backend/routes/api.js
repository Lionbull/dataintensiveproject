var express = require('express')
const isValidCountry = require("../utils/isvalidcountry");
var Client = require('pg').Client;

router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello from API')
})

/** 
 * Get all games from a country
 */
router.get('/games/:country', async function(req, res) {
    if (!isValidCountry(req.params.country)) return res.status(400).json({error: 'Invalid country'});

    const country = req.params.country;
    const client = new Client({
        database: `di${country}`,
    });
    await client.connect();
    result = await client.query('SELECT * FROM Videogame;');
    await client.end();

    return res.json(result.rows)
});

/** 
 * Get one game's information
 */
router.get('/game/:country/:id', async function(req, res) {
    if (!isValidCountry(req.params.country)) return res.status(400).json({error: 'Invalid country'});

    const vg_id = req.params.id;
    const country = req.params.country;
    const client = new Client({
        database: `di${country}`,
    });
    await client.connect();
    result = await client.query('SELECT * FROM Videogame WHERE vg_id = $1;', [vg_id]);
    await client.end();
    return res.json(result.rows)
});

/**
 * Get participated developers for a game
 */
router.get('/game-developers/:country/:id', async function(req, res) {
    if (!isValidCountry(req.params.country)) return res.status(400).json({error: 'Invalid country'});

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

/**
 * Get all developers of a country
 */
router.get('/developers/:country', async function(req, res) {
    if (!isValidCountry(req.params.country)) return res.status(400).json({error: 'Invalid country'});

    const country = req.params.country;
    const client = new Client({
        database: `di${country}`,
    });
    await client.connect();
    
    result = await client.query('SELECT * FROM Developer');
    await client.end();

    return res.json(result.rows);
});

/**
 * Get one developer's information
 */
router.get('/developer/:country/:id', async function(req, res) {
    if (!isValidCountry(req.params.country)) return res.status(400).json({error: 'Invalid country'});

    const dev_id = req.params.id;
    const country = req.params.country;
    const client = new Client({
        database: `di${country}`,
    });
    await client.connect();
    
    result = await client.query('SELECT * FROM Developer WHERE dev_id = $1;', [dev_id]);
    await client.end();

    return res.json(result.rows[0]);
});

/** 
 * Get one publisher's information
 */
router.get('/publishers/:country', async function(req, res) {
    if (!isValidCountry(req.params.country)) return res.status(400).json({error: 'Invalid country'});

    const country = req.params.country;
    const client = new Client({
        database: `di${country}`,
    });
    await client.connect();
    
    result = await client.query('SELECT * FROM Publisher ');
    await client.end();

    return res.json(result.rows)
});

/** 
 * Get one publisher's information
 */
router.get('/publisher/:country/:id', async function(req, res) {
    if (!isValidCountry(req.params.country)) return res.status(400).json({error: 'Invalid country'});

    const pub_id = req.params.id;
    const country = req.params.country;
    const client = new Client({
        database: `di${country}`,
    });
    await client.connect();
    
    result = await client.query('SELECT * FROM Publisher WHERE pub_id = $1;', [pub_id]);
    await client.end();

    return res.json(result.rows[0])
});

/** 
 * Delete game from a database
 */
router.delete('/delete/game/:country/:id', async function(req, res) {
    if (!isValidCountry(req.params.country)) return res.status(400).json({error: 'Invalid country'});

    const vg_id = req.params.id;
    const client = new Client({
        database: `di${country}`,
    });
    await client.connect();
    
    result = await client.query('DELETE FROM Videogame WHERE vg_id = $1;', [vg_id]);
    await client.end();

    return res.json(result.rows[0])
});

/** 
 * Update a game's information
 */
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
    await client.end();

    return res.json(result.rows[0])
});


/**
 * Get most expensive games from requested countries
 */
router.get('/expensive-games', async function(req, res) {
    try {
        const countries = req.body.countries;
        let results = [];
        // Loop through countries and get most expensive game from each

        for (const country of countries) {
            const client = new Client({
                database: `di${country}`,
            });
            await client.connect();
            let result = await client.query('SELECT * FROM Videogame ORDER BY price DESC LIMIT 1;');
            // console.log(result.rows);
            await client.end();
            results.push(result.rows[0]);
        }
        return res.json(results)
    } catch (error) {
        console.log(error);

        return res.json()
    }
});

module.exports = router;