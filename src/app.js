import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import {Provider} from "react-redux";
import reducer from './reducers'
import Router from './router';

const store = createStore(reducer);

const App = () => {
    return (
        <Provider store={store}>
            <Router/>
        </Provider>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));

