// to see JSX's output see http://babeljs.io/repl/

// these were installed with npm & need ot be explicitly required since we can't assume react is global
var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
        </Route>
    </Router>,
    document.getElementById('app')
)