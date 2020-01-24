## The story

As a user I would like to view information about a city.

I should be able to select a city from a list and see:

-   a graph with the relevant timeseries data
-   the city name
-   the status
-   the highest and lowest values from the timeseries data

## Setup

`$ npm install`

### `npm start`

Runs the app in the development mode<br />
Open [http://localhost:1337](http://localhost:1337) to view it in the browser.`

## API is currently avaliable on Heroku

city list:

`https://city-json-serve.herokuapp.com/city-list`

Get data for a city:

`https://city-json-serve.herokuapp.com/city-data/<id>` // id is oneOf(1, 2, 3, 4, 6, 7);
