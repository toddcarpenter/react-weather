var React = require('react');
var Nav = require('Nav');

// var Main = React.createClass({
//     render: function () {
//         return (
//             <div>
//                 <Nav/>
//                 <h2>Main component</h2>
//                 {this.props.children}
//             </div>
//         );
//     }
// });

// refactored here to simplify code
// this is a Stateless Functional Component
// since this component is stateless & only defines a render method
// we can refactor it like so. we don't need to use React.createClass since there's no state
var Main = (props) => {
    return (
        // JSX can only return ONE root element
        <div>
            <Nav />
            <h2>Main component</h2>
            {props.children}
        </div>
    )
};

module.exports = Main;