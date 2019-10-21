import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store, persistor} from './store';
import './index.css';
import App from './components/App/App';
import Loader from './components/Loader/Loader';
import * as serviceWorker from './serviceWorker';
import { PersistGate } from 'redux-persist/integration/react'
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
    <PersistGate loading={Loader} persistor={persistor}>
        <Provider store={store}>
            <App />
        </Provider> 
    </PersistGate>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
