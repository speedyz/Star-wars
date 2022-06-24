import HomePage from "../containers/HomePage";
import PeoplePage from "../containers/PeooplePage/PeoplePage";
import React, {Component} from 'react';
import PageNotFound from "../containers/PageNotFound";

const routesConfig = [
    {
        path: '/',
        element: <HomePage/>
    },
    {
        path: '/people',
        element: <PeoplePage/>
    },
    {
        path: "*",
        element: <PageNotFound/>
    },
]

export default routesConfig;