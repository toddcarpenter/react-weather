var React = require('react');

var WeatherOutput = React.createClass({
    render: function() {
        var location = this.props.location;
        var temp = this.props.temp;
        
        return (
            <p>It's {temp} degrees in {location}.</p>
        );
    }
});

module.exports = WeatherOutput;