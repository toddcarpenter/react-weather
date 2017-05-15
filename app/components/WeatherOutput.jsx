var React = require('react');

var WeatherOutput = React.createClass({
    render: function() {
        var {location, temp} = this.props;

        return (
            <p>It's {temp} degrees in {location}.</p>
        );
    }
});

module.exports = WeatherOutput;