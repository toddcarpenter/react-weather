var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherOutput = require('WeatherOutput');

var Weather = React.createClass({
    render: function() {
        return (
            <div>
                <h3>Weather component</h3>
                <WeatherForm/>
                <WeatherOutput/>
            </div>
        );
    }
});

module.exports = Weather;