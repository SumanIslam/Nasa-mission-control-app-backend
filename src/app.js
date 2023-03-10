const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan')

const api = require('./routes/api');

const app = express();

// middleware
app.use(
	cors({
		origin: ['http://localhost:3000', 'https://nasamissioncontrol.vercel.app', 'https://sumanislam.vercel.app/'],
	})
);
//  {
//   origin: 'http://localhost:3000'
// }
app.use(morgan('combined'))
app.use(express.json());

// Routes
app.use('/v1', api);

module.exports = app;
