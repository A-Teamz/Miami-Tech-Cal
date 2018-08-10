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
    owner: req.user.googleID,
    title: req.body.title,
    content: req.body.content
  });

  newEntry.save( (err) => {
    if (err)             { return res.status(500).json(err) }
    if (newEntry.errors) { return res.status(400).json(newEntry) }
                           return res.json(newEntry);
  });
});


commentsRoutes.post('/comments/:id/delete', (req, res, next) => {
  // console.log('req.params.id: ', req.params.id)
  Entry.findByIdAndRemove(req.params.id)
  .then((oneEntry)=>{
      res.json(entries);
  })
  .catch((err)=>{
      res.json(err);
  })
})


// edit comments

commentsRoutes.put('/comments/:id', (req, res, next) => {
 
  if (!req.user) {
    res.status(401).json({ message: "Nahhhhh" });
    return;
  }
  

  const updates = {
      title: req.body.title,
      content: req.body.content,
  };

  console.log("======", updates)


  Entry.findByIdAndUpdate(req.params.id, updates)
    .then( savedEntry => res.json(savedEntry) )
    .catch( err => res.json(err) )
  
});




module.exports = commentsRoutes;
