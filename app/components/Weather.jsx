var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherApp = require('openWeatherApp');

var Weather = React.createClass({
    // default States
    getInitialState: function () {
        return {
            // location: 'Miami',
            // temp: 88,
            isloading: false
        }
    },
    handleSearch: function (location) {
        // 'this' gets lost if wrapped in a function
        // referencing it here is way to keep the THIS reference we want
        var that = this;

        this.setState({ isloading: true });

        openWeatherApp.getTemp(location).then(function (temp) {
            that.setState({
                location: location,
                temp: temp,
                isloading: false
            })
        }, function (errorMessage) {
            this.setState({ isloading: false });
            alert(errorMessage);
        });
    },
    render: function () {
        // es6 destructuring
        var { isloading, location, temp } = this.state;

        function renderMessage() {
            if (isloading) {
                return <h3>Fetching weather...</h3>
            } else if(temp && location) {
                return <WeatherMessage location={ location } temp={ temp }/>
            }
    }

        return (
            <div>
            <h3>Weather component</h3>
            <WeatherForm onSearch={this.handleSearch} />
            {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;