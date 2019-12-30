import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "../Containers/Home";
import Tasks from "../Containers/Tasks";
import Layout from "../Components/Layout/Layout";

const App = () => {
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/tasks" component={Tasks}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App;