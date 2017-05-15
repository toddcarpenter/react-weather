var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://samples.openweathermap.org/data/2.5/weather?appid=7e5fcd750e155618d14b01489a785640&units=imperial';

module.exports = {
    getTemp: function(location) {
        // encode string for the browser
        var encodedLocation = encodeURIComponent(location);

        // the back tick with these 3 chars allow variables to be included in a string: `${}`
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function(res) {
            if ( res.data.cod && res.data.message ) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function(res) {
            throw new Error(res.data.message);
        });
    }
}