import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Home} from '../views'

export default () => {
    return (
        <Router>
            <Route path='/' component={Home}></Route>
        </Router>
    )
}
