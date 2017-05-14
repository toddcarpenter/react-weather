var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherOutput = require('WeatherOutput');

var Weather = React.createClass({
    // default States
    getInitialState: function() {
        return {
            location: 'Miami',
            temp: 88
        }
    },
    handleSearch: function(location) {
        // setSate gets an object of attributes we want to set
        this.setState({
            location: location,
            temp: 23
        })
    },
    render: function() {
        var location = this.state.location;
        var temp = this.state.temp;

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