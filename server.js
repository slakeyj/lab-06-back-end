'use strict';

const express = require('express');

const cors = require('cors');

require('dotenv').config();

const app = express();

app.use(cors());

const PORT = process.env.PORT;

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


    const formattedData = {
      search_query: searchQuery,
      formatted_query: formattedQuery,
      latitude: lat,
      longitude: lng
    }
    response.send(formattedData);
  } catch (error) {
    console.error(error);
    response.send(error.message);
  }
})

app.listen(PORT, () => { console.log(`app is up on PORT ${PORT}`) });

