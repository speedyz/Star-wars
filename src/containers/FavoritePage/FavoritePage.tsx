import React from 'react';
import {useSelector} from "react-redux";
import favoriteReducer from "../../store/reducers/favoriteReducer";

const FavoritePage = () => {

    const storeData = useSelector(state => state)
    return (
        <div>
            <h1>Favorite Page</h1>
        </div>
    );
};

export default FavoritePage;