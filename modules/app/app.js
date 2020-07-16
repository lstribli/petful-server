const express = require('express');
const cors = require('cors');
const { CLIENT_ORIGIN } = require('../../config');

const app = express();

app.use(cors({
  origin: CLIENT_ORIGIN
}));

app.use('/api/people', require('../people/peopleRouter'));
app.use('/api/pets', require('../pets/petsRouter'));

module.exports = app;