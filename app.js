const express = require('express');
const apiRoutes = require('./server/routes/api.routes')
const cors = require('cors')

//setup environment settings
require('dotenv').config();
//database
require('./server/config/db');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', apiRoutes)

const port = process.env.PORT || 3000;
app.use(express.static('frontend'))
app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`);
})