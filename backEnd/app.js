const dotenv = require( 'dotenv' );
dotenv.config();
const express = require('express');
const userRoutes = require( './routes/userRoutes' );
const captainRoutes = require('./routes/captainRoutes');
const cookieParser = require("cookie-parser");

const cors = require( 'cors' );
const connectDB = require('./db/db');
const todos = require('./routes/todoRoutes');
const app = express();
connectDB( )

app.use( cors() );
app.use( express.json() );
app.use(cookieParser());
app.use ( express.urlencoded( { extended: true } ) );

app.use('/captain',captainRoutes)
app.use("/todo",todos)
app.use('/user',userRoutes)
module.exports = app;