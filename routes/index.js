// Import express package
const express = require('express');
const router = express.Router();
const upload = require('../upload');

// route for the index page
router.get('/', (req,res)=>{
    res.render('index');
 })

 // route to handle image upload
app.post('/upload', (req,res)=>{
    upload(req,res, (err)=>{
        if (err){
            console.log(err)
            res.render('index', {msg: err})
        }else{
          res.render('index', {file: 'images/' + req.file.filename})
        }
    })
 })

 module.exports = router;