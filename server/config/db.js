const mongoose = require('mongoose');

const mongoDB_Url = process.env.MongoDB_Url;

mongoose.connect(mongoDB_Url);
mongoose.connection.on('connected', ()=>{
    console.log('MongoDB Server is Connected.');
});

mongoose.connection.on('error', (err)=>{
    console.log(err);
});