var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherApp = require('openWeatherApp');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
    // default States
    getInitialState: function () {
        return {
            isloading: false
        }
    },
    handleSearch: function (location) {
        // 'this' gets lost if wrapped in a function
        // referencing it here is way to keep the THIS reference we want
        var that = this;

        //debugger;

        this.setState({
            isloading: true,
            errorMsg: undefined
        });

        openWeatherApp.getTemp(location).then(function (temp) {
            that.setState({
                location: location,
                temp: temp,
                isloading: false,
                errorMsg: undefined
            })
        }, function (e) {
            that.setState({
                isloading: false,
                errorMsg: e.message
            });
        });
    },
    render: function () {
        // es6 destructuring
        var { isloading, location, temp, errorMsg } = this.state;

        function renderMessage() {
            if (isloading) {
                return <h3>Fetching weather...</h3>
            } else if(temp && location) {
                return <WeatherMessage location={ location } temp={ temp }/>
            }
        }

        function renderError() {
            if (typeof errorMsg === "string") {
                return <ErrorModal title="Title" text={errorMsg} button="Okay"/>
            }
        }

        return (
            <div className="text-center">
                <h1>Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch} />
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
});

module.exports = Weather;