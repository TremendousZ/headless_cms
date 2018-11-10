import React from 'react';
import HomePage from './home';
import Pages from './pages';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App = () => (
    <Router>
        <Switch>
            <Route exact path ='/' component = {HomePage} />
            <Route exact path = '/page/:page_number' component = {Pages} />
        </Switch>
    </Router>
);

export default App;
