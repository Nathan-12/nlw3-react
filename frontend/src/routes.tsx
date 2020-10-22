import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrpahnagesMap from './pages/OrphanagesMap';
import Orpahnage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';
import CreateOrphanageSuccess from './pages/CreateOrphanageSuccess';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/app" component={OrpahnagesMap} />
                <Route path="/orphanage/create" component={CreateOrphanage} />
                <Route path="/orphanage/:id" component={Orpahnage} />
                <Route path="/createsuccess" component={CreateOrphanageSuccess} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;