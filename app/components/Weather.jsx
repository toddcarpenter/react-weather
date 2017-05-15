var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherOutput = require('WeatherOutput');
var openWeatherApp = require('openWeatherApp');

var Weather = React.createClass({
    // default States
    getInitialState: function() {
        return {
            location: 'Miami',
            temp: 88
        }
    },
    handleSearch: function(location) {
        // 'this' gets lost if wrapped in a function
        // referencing it here is aone fix for this
        var that = this;

        openWeatherApp.getTemp(location).then(function(temp) {
            that.setState({
                location: location,
                temp: temp
            })
        }, function(errorMessage) {
            alert(errorMessage);
        });
    },
    render: function() {
        // es6 destructuring
        var {location, temp} = this.state;

        return (
            <div>
                <h3>Weather component</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                <WeatherOutput location={location} temp={temp}/>
            </div>
        );
    }
});

module.exports = Weather;