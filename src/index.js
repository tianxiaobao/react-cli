import "lib-flexible";
import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './store';
import AppRouter from "./router";
import "@/style/reset.scss";

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

const App = () => {
    return (
        <Provider store = {store}>
            <AppRouter />
        </Provider>
    );
};

ReactDom.render(<App/>, document.getElementById("app"));