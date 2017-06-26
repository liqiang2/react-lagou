import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory,IndexRoute,browserHistory } from 'react-router';
import App from './App';
import Job from './pages/job';
import Search from './pages/search';
import Mine from './pages/mine';
import PositionDetail from './pages/positionDetail';
import Login from './pages/login';
import Register from './pages/register';


import registerServiceWorker from './registerServiceWorker';
import './index.css';



ReactDOM.render(
    (
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Job} />
                <Route path="/search" component={Search}/>
                <Route path="/mine" component={Mine}/>

            </Route>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/jobs/:positionId" component={PositionDetail}/>

        </Router>
    )
    , document.getElementById('root'));
registerServiceWorker();
