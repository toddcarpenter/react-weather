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
            errorMsg: undefined,

            // clear these so it doens't keep old location & temp if there's an error below
            location: undefined,
            temp: undefined
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
    componentDidMount: function () {
        var location = this.props.location.query.location;

        if (location && location.length > 0) {
            this.handleSearch(location);

            // remove location query tring
            window.location.hash = "#/";
        }
    },
    // this gets called every time the components props get updated
    componentWillReceiveProps: function (newProps) {
        var location = newProps.location.query.location;

        if (location && location.length > 0) {
          this.handleSearch(location);

          // remove location query tring
          window.location.hash = "#/";
        }
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
            <div>
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch} />
                {renderMessage()}
                {renderError()}
            </div>
        )
    }
});

module.exports = Weather;