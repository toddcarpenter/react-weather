var React = require('react');

var WeatherMessage = ({ location, temp }) => {

    // shorthand replaces this destructuring in the arguments above
    //var { location, temp } = props;

    return (
        <p className="text-center">It's {temp} degrees in {location}.</p>
    );
};

module.exports = WeatherMessage;