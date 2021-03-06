import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrpahnagesMap from './pages/OrphanagesMap';
import Orpahnage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';
import CreateOrphanageSuccess from './pages/CreateOrphanageSuccess';
import CreateUser from './pages/Login/CreateUser';
import Login from './pages/Login/Login';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/app" component={OrpahnagesMap} />
                <Route path="/orphanage/create" component={CreateOrphanage} />
                <Route path="/orphanage/:id" component={Orpahnage} />
                <Route path="/createsuccess" component={CreateOrphanageSuccess} />
                <Route path="/createuserHAPPYURLANONIMA" component={CreateUser} />
                <Route path="/login" component={Login} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;