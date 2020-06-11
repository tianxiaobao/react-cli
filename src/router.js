import React from "react";
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import LoadableComponent from "./common/loadable";

const Layout = LoadableComponent(() => import("./pages/layout"));
const Demo = LoadableComponent(() => import("./pages/demo"));

const AppRouter = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/" render={() =>
                    <Layout>
                        <Redirect path="/" to="/demo" />
                        <Route exact path="/demo" component={Demo} />
                    </Layout>
                } />
            </Switch>
        </HashRouter>
    );
};

export default AppRouter;