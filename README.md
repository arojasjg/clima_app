Clima react app  connected to Accu Weather API

### APIs:
- https://developer.accuweather.com/accuweather-locations-api/apis/get/locations/v1/cities/search to search for a city and get the location key.
- https://developer.accuweather.com/accuweather-forecast-api/apis/get/forecasts/v1/daily/1day/%7BlocationKey%7D to get the forecast of the city once the location key is available.


## Structure
```
clima_app
│   .gitignore
│   package-lock.json
│   package.json
│   README.md
│
├───build
│
└───src
    │   App.js
    │   index.css
    │   index.js
    │
    ├───assets
    │   └───imgs
    └───services
    │       Weather_Api
    └───components
            Api_Key.js
            Errors.js
            Header.js
            Card.js
```


### Used technologies:
- React
- JavaScript
- Bootstrap


### installation:
 - Copy or clone the project
 - run npm install
 - run npm start 
 - open localhost:3000 on a browser