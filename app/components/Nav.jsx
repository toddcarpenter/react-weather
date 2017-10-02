var React = require('react');
var {Link, IndexLink} = require('react-router');


var Nav = (props) => {
    return (
        <div>
            <h2>Nav component</h2>
            {/* must use IndexLink when nesting components the way we are
            since it's looking for to="/", react thinks it's the Route wrapping component
            which would keep the Index page class active all the time */}
            <IndexLink to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Get Weather</IndexLink>
            <Link to="/about" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>About</Link>
            <Link to="/examples" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Examples</Link>
        </div>
    );
};

module.exports = Nav;