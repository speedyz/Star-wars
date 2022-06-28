import HomePage from "../containers/HomePage";
import PeoplePage from "../containers/PeooplePage/PeoplePage";
import PageNotFound from "../containers/PageNotFound";
import PersonPage from "../containers/PersonPage";
import FavoritePage from "../containers/FavoritePage";

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
        path: '/people/:id',
        element: <PersonPage/>
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