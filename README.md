## The story

As a user I would like to view information about a city.

I should be able to select a city from a list and see:

- a graph with the relevant timeseries data
- the city name
- the status
- the highest and lowest values from the timeseries data

## Setup  

`$ npm install`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode and starts fake API server.<br />
Open [http://localhost:1337](http://localhost:1337) to view it in the browser.`

## API

city list:

`http://localhost:3000/city-list`

Get data for a city:

`http://localhost:3000/city-data/<id>`
