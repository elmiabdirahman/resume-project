const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/home', (req, res)=>{
    console.log('home page for get route');
    const queryVideos = 'SELECT "id", "description", "title", "url" FROM "home"';
    
    pool.query(queryVideos).then(( results ) =>{
        res.send(results.rows);
    }).catch( (error) =>{
        console.log('Error from SELECT homepage quert ', error);
        res.sendStatus(500);
    })
});

router.get('/about', (req, res)=>{
    console.log('about page for get route');
    const queryVideos = 'SELECT "id", "description" FROM "about"';
    
    pool.query(queryVideos).then(( results ) =>{
        res.send(results.rows);
    }).catch( (error) =>{
        console.log('Error from SELECT about quert ', error);
        res.sendStatus(500);
    })
});

module.exports = router;