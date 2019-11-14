import React from 'react';
import ViewTitle from "../components/ViewTitle";
import ViewMessage from "../components/ViewMessage";
import Button from "../components/Button";



function BoostView() {
    return (
        <div>
            <ViewTitle/>
            <ViewMessage/>
            <Button data={"ddd"}/>
        </div>
    );
}

export default BoostView;