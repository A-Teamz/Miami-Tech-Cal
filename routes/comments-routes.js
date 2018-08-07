const express       = require('express');
const commentsRoutes        = express.Router();
const Entry         = require('../models/comments');

commentsRoutes.get('/comments', (req, res, next) => {
  Entry.find({}, (err, entries) => {
    if (err) { return res.json(err).status(500); }
;
    return res.json(entries);
  });
});

commentsRoutes.post('/comments', (req, res, next) => {
  const newEntry = new Entry({
    title: req.body.title,
    content: req.body.content
  });

  newEntry.save( (err) => {
    if (err)             { return res.status(500).json(err) }
    if (newEntry.errors) { return res.status(400).json(newEntry) }
                           return res.json(newEntry);
  });
});


commentsRoutes.post('/comments/:id/delete', (req, res, next)=>{
  Entry.findByIdAndRemove(req.params.id)
  .then((oneEntry)=>{
      res.json(entries);
  })
  .catch((err)=>{
      res.json(err);
  })
})




// commentsRoutes.post('/comments/:id/update', (req, res, next)=>{

//   Entry.findByIdAndUpdate(req.params.id, {
//       title: req.body.title, 
//       content: req.body.content,
      
//   })
//   .then((oneEntry)=>{
//       res.json(entries)
//   })
//   .catch((err)=>{
//       res.json(err);
//   })  
// })





module.exports = commentsRoutes;
