var React = require('react');
var reactDOM = require('react-dom');
var reactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({
  getDefaultProps: function() {
    return {
      title: 'Error'
    };
  },
  propTypes: {
    // this will throw a console error message alerting the developer the type they passed is incorrect. It will not break the script though
    title: React.PropTypes.string,
    // add the isRequired
    text: React.PropTypes.string.isRequired,
    button: React.PropTypes.string
  },
  componentDidMount: function () {
    // React doesn't play well with 3rd party libraries that update the DOM
    // Had to move this out of the render method because Foundation is removing the
    // modal from the DOM. React deosn't like this and it's cauing an error
    var { title, text, button } = this.props;

    var modalMarkup = (
      <div className="reveal tiny text-center" id="error-modal" data-reveal="">
        <h4>{title}</h4>
        <p>{text}</p>
        <div className="button hollow" data-close="">
          {button}
        </div>
      </div>
    );

    var $modal = $(reactDOMServer.renderToString(modalMarkup));
    $(reactDOM.findDOMNode(this)).html($modal);

    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function () {
    return (
      <div>
        </div>
    )
  }
});

module.exports = ErrorModal;