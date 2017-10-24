var React = require('react');

// var About = React.createClass({
//     render: function() {
//         return (
//             <h3>About component</h3>
//         );
//     }
// });

// refactored here to simplify code
// since this component is stateless & only defines a render method
// we can refactor it like so, we don't need to use createClass
var About = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>Welcome to the About page</p>
        </div>
    )
}

module.exports = About;