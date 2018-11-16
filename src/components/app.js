import React from 'react';
import HomePage from './home';
import Pages from './pages';
import TheCrew from './the_crew';
import AboutUs from './about_us';
import Nav from './nav';
import Categories from './categories';
import TechBuffalo from './techbuffalo';
import Advertise from './advertise_with_us';
import Footer from './footer'; 
import NewsTips from './news_tips';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App = () => (
    <Router>
        <Switch>
            <div>
                <Nav />
                <Route exact path ='/' component = {HomePage} />
                <Route exact path = '/page/:page_number/' component = {Pages} />
                <Route exact path = '/crew/' component = {TheCrew} />
                <Route exact path = '/about-us/' component = {AboutUs} />
                <Route exact path = '/news-tips/' component = {NewsTips} />
                <Route path = '/category/:category/:categoryName/' component = {Categories} />
                <Route path = '/:category/:categoryName' component = {Categories} />
                <Route exact path = '/advertise/' component = {Advertise} />
                <TechBuffalo />
                <Footer />
            </div>
        </Switch>
    </Router>
);

export default App;
