import React from 'react';
import ViewTitle from "../components/ViewTitle";
import ViewMessage from "../components/ViewMessage";
import Button from "../components/Button";
import {getListings} from "../services/categoriesListService";



function BoostView() {
    let categories = getListings();
    return (
        <div>
            <ViewTitle/>
            <ViewMessage/>
            <Button data={"ddd"}/>
        </div>
    );
}

export default BoostView;