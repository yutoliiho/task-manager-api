const log = console.log
const mongoose = require('mongoose');

// const environment = 'mongodb://127.0.0.1:27017/task-manager-api'
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true, useFindAndModify: false});

// // Create model 
// const person = new User({ name: 'Tio', email: 'Tio@gmail.com' });
// person.save().then((person) => log(person)).catch((error)=>{log(error)})

