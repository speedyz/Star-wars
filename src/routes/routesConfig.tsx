import HomePage from "../containers/HomePage";
import PageNotFound from "../containers/PageNotFound";
import PersonPage from "../containers/PersonPage";
import FavoritePage from "../containers/FavoritePage";
import SearchPage from "../containers/SearchPage";
import React,{Suspense} from "react";
import UiLoading from "../components/UI/UiLoading";

// import PeoplePage from "../containers/PeoplePage/PeoplePage";
const PeoplePage = React.lazy( () =>import( "../containers/PeoplePage/PeoplePage"))


const routesConfig = [
    {
        path: '/',
        element: <HomePage/>
    },
    {
        path: '/people',
        element: <Suspense fallback={<UiLoading theme=""/>}> <PeoplePage/></Suspense>
    },
    {
        path: '/people/:id',
        element: <PersonPage/>
    },
    {
        path: '/search',
        element: <SearchPage/>
    },
    {
        path: '/favorites',
        element: <FavoritePage/>
    },
    {
        path: "*",
        element: <PageNotFound/>
    },
]

export default routesConfig;