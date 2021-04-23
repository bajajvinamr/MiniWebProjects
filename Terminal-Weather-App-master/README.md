# Terminal Based Weather App 

Terminal Based App where you can using a single command get the temperature of any location.
Made during the Equinox Workshops held by @Divy123 Sir.


## Setup

For setting up the project and downloading the dependencies, 
#### npm install 

After this, one can visit 

https://developers.google.com/maps/documentation/javascript/get-api-key

to get the user's API key which has to be replaced at Line #8 of weather.js and location.js files.

## Usage

Open your terminal and then run

```js

node app.js -l 'address'

```

or 

```js

node app.js --location 'address'

```

The output will be of the form:

temperature: 
