var React = require('react');
var { Link } = require('react-router');

var Examples = (props) => {
    return (
        <div>
            <h3 className="text-center">Examples</h3>
            <p>
                Here are a few example locations to try out:
            </p>
            <ol>
                <li><Link to="/?location=Boston">Boston</Link></li>
                <li><Link to="/?location=Philadelphia">Philly</Link></li>
            </ol>
        </div>
    )
};

module.exports = Examples;