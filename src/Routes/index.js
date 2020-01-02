import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "../Containers/Home";
import Tasks from "../Containers/Tasks";
import Layout from "../Components/Layout/Layout";
import EditTask from "../Containers/EditTask";

const App = () => {
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/tasks" component={Tasks} />
                    <Route exact path="/tasks/:id" component={EditTask}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App;