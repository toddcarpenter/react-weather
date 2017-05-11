// to see JSX's output see http://babeljs.io/repl/

// these were installed with npm & need to be explicitly required since we can't assume react is global
var React = require('react');
var ReactDOM = require('react-dom');

// this is new ES6 destructuring syntax
// to create variables from the corresponding properties within react-router
// aka could do: var Route = require('react-router').Route;
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

ReactDOM.render(
    <Router history={hashHistory}>
        {/* the "path" prop tells it where the root of the site is
        and the "component"" prop tells it which compenent to show when at the root */}
        <Route path="/" component={Main}>
            <IndexRoute component={Weather}/>
            <Route path="about" component={About}/>
            <Route path="examples" component={Examples}/>
        </Route>
    </Router>,
    document.getElementById('app')
)