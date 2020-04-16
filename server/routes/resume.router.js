const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/resume', (req, res)=>{
    console.log('home page for get route');
    const queryVideos = 'SELECT "id", "description", "title", "url" FROM "home"';
    
    pool.query(queryVideos).then(( results ) =>{
        res.send(results.rows);
    }).catch( (error) =>{
        console.log('Error from SELECT homepage quert ', error);
        res.sendStatus(500);
    })
});

module.exports = router;