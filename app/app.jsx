// to see JSX's output see http://babeljs.io/repl/

// these were installed with npm & need ot be explicitly required since we can't assume react is global
var React = require('react');
var ReactDOM = require('react-dom');

// this is  new ES6 destructuring syntax to create variables form the corresponding properties within react-router
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="about" component={About}/>
            <IndexRoute component={Weather}/>
        </Route>
    </Router>,
    document.getElementById('app')
)