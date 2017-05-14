var React = require('react');

var WeatherForm = React.createClass({
    onFormSubmit: function(e) {
        // prevent page from reloading
        e.preventDefault();

        var location = this.refs.location.value;

        // validate value
        if ( location.length > 0 ) {
            this.refs.location.value = '';

            // pass location to parent function
            this.props.onSearch(location);
        }
    },
    render: function() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" ref="location"/>
                    <button>Get Weather</button>
                </form>
            </div>
        );
    }
});

module.exports = WeatherForm;