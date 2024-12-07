require('dotenv').config();
const express = require('express')
const cors = require('cors')
const app = express();
const cookieParser = require('cookie-parser')
const userRoutes = require('./routes/user.routes')
const captainRoutes = require('./routes/captain.routes')

app.use(cookieParser());
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended:true }));

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/captain', captainRoutes);

app.get('/',(req,res)=> {
     res.send("Hii")
})

require('./config/mongoose').connect()

module.exports = app