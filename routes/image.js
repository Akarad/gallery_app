const express = require('express');
const router = express.Router();
const Photo = require('../models/photos');

router.get('/:id', (req,res)=>{
  
   Photo.findById(req.params.id, (error, image)=>{
       if (error){
           console.log(error)
       }else{
           console.log(image)
           res.render('single_image', {image:image})
       }
   })
})

// route to handle put request
router.put('/:id', (req,res)=>{
    console.log(req.params.id)
    console.log(req.body)
 
 })

module.exports = router;