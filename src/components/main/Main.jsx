import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Form from "../../pages/form/Form";
import Preview from "../../pages/preview/Preview";
import ChildrenList from "../childrensList/ChildrenList";

import './main.scss';

const Main = () => {
    return (
        <div className={"main"}>
            <Switch>
                <Route path="/preview">
                    <Preview/>
                </Route>
                <Route path="/">
                    <Form/>
                    <ChildrenList/>
                </Route>
                <Redirect to={"/"}/>
            </Switch>
        </div>
    );
};

export default Main;