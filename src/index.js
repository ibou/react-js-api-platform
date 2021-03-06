import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {applyMiddleware, createStore} from "redux";
import {createBrowserHistory} from "history";
import {Provider} from "react-redux";
import rootReducer from "./reducer";

import {Route, Router} from "react-router";
import App from './components/App';
import {logger} from "redux-logger";
import thunkMiddleware from "redux-thunk";
import {tokenMiddleware} from "./middleware";

const middlewares = [thunkMiddleware, tokenMiddleware];
if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger);
}
const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
);

const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}/>
        </Router>
    </Provider>,
    document.getElementById('root')
);

