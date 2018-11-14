import React from 'react';
import HomePage from './home';
import Pages from './pages';
import TheCrew from './the_crew';
import Nav from './nav';
import TechBuffalo from './techbuffalo';
import Footer from './footer'; 
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App = () => (
    <Router>
        <Switch>
            <div>
                <Nav />
                <Route exact path ='/' component = {HomePage} />
                <Route exact path = '/page/:page_number/' component = {Pages} />
                <Route exact path = '/crew-2/' component = {TheCrew} />
                <TechBuffalo />
                <Footer />
            </div>
        </Switch>
    </Router>
);

export default App;
