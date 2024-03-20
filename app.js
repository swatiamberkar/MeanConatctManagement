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

// Connect Angular Project to Node Server
// Connect frondend to backend
app.use(express.static('contact-management'))

app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`);
})