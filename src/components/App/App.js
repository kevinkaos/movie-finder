import React from 'react';
import Home from '../Home/Home';
import ItemDetails from '../ItemDetails/ItemDetails';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { getMovieGenre } from '../../actions/getMovieGenreAction';
import { getTVGenre } from '../../actions/getTVGenreAction';
import { postMDBConfig } from '../../actions/PostMDBConfigAction';
import setItemType from '../../actions/setItemTypeAction';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faFilm, faSearch } from '@fortawesome/free-solid-svg-icons';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import './App.css';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory({
    basename: '/', 
    forceRefresh: false, 
    keyLength: 6, });



library.add(fas, faFilm, faSearch);

class App extends React.Component {

    componentDidMount() {
        this.props.postMDBConfig(`https://api.themoviedb.org/3/configuration?api_key=${this.props.apiKey}`);
        this.props.getMovieGenre(`https://api.themoviedb.org/3/genre/movie/list?api_key=${this.props.apiKey}&language=en-US
        `);
        this.props.getTVGenre(`https://api.themoviedb.org/3/genre/tv/list?api_key=${this.props.apiKey}&language=en-US
        `);
        this.props.setItemType('MOVIE');      
    }

    render() {      

        return ( 
        <BrowserRouter history={history}>
            <ScrollToTop />
            <div className="main">
            

                <Route path="/" exact component={Home} />
                <Route path="/details/:type/:id" exact component={ItemDetails} />
                <Route path="/category/:type" exact component="{CategoryTypes}" />
                <Route path="/search-results/:id" exact component="{SearchResults} "/>
                <Route path="/discover" exact component="{Discover}" />
                
                <Switch>

                    {/* Hanlde routing for authentication */}
                    <Route path="/log-in" exact component="{UserLogIn}" />
                    <Route path="/profile/:status" exact component="{UserProfile}" />

                    {!this.props.logInStatus || this.props.session.failure  ? <Redirect from='/profile' to="/log-in" /> : <Redirect from='/profile' to='/profile/approved' /> }
                    {!this.props.logInStatus || this.props.session.failure  ? <Redirect from='/profile/approved' to="/log-in" /> : <Redirect from='/log-in' to='/profile/approved' /> }
                    {!this.props.logInStatus === 'GUEST'  ? <Redirect from='/log-in' to='/profile/guest' /> : <Redirect from='/profile/guest' to="/log-in" /> }

                </Switch>

            </div>
        </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        config: state.PostMDBConfig,
        apiKey: state.PostMDBConfig.apiKey
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        postMDBConfig: url => dispatch(postMDBConfig(url)),
        getMovieGenre: url => dispatch(getMovieGenre(url)),
        getTVGenre: url => dispatch(getTVGenre(url)),
        setItemType: type => dispatch(setItemType(type))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);