import React from 'react';
import './App.css';

class App extends React.Component {

    componentDidMount() {

    }

    render() {
        const apiKey = '150d7fd25460a548b06c13686a6bad55';

        return (<div>App</div>);
    }
}

export default App;

// /discover/movie?sort_by=popularity.desc

// discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1

// discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=1&timezone=TW&include_null_first_air_dates=false
