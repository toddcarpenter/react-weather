var React = require('react');

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
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function () {
    var { title, text, button } = this.props;
    return (
      <div className="reveal tiny text-center" id="error-modal" data-reveal="">
        <h4>{title}</h4>
        <p>{text}</p>
        <div className="button hollow" data-close="">
          {button}
        </div>
      </div>
    )
  }
});

module.exports = ErrorModal;