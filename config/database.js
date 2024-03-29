const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);


// set up a connected event listener

// 3.1 shortcutr variables
const db = mongoose.connection //is an obj with values represenitng current connectino to mongobd database


// 3.2 event lisener 
db.on('connected', function() {
    console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
  });
