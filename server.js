'use strict';

const express = require('express');

const cors = require('cors');

require('dotenv').config();

const app = express();

app.use(cors());

const PORT = process.env.PORT;

const queryResults = [];
function FormattedData(searchQuery, formattedQuery, latitude, longitude) {
  this.search_query = searchQuery;
  this.formatted_query = formattedQuery;
  this.latitude = latitude;
  this.longitude = longitude;


}

app.get('/location', (request, response) => {
  try {
    // const seattleData =
    // {
    //   "search_query": "seattle",
    //   "formatted_query": "Seattle, WA, USA",
    //   "latitude": "47.606210",
    //   "longitude": "-122.332071"
    // }
    // response.send(seattleData);
    const geoData = require('./data/geo.json');
    const searchQuery = request.query.data;

    const formattedQuery = geoData.results[0].formatted_address;
    const lat = geoData.results[0].geometry.location.lat;
    const lng = geoData.results[0].geometry.location.lng;


    response.send(new FormattedData(searchQuery, formattedQuery, lat, lng));
  } catch (error) {
    console.error(error);
    response.send(error.message);
  }
})

app.listen(PORT, () => { console.log(`app is up on PORT ${PORT}`) });

