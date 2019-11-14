import React from 'react';
import {hello} from '../services/printHello'

function ViewTitle() {
    return (
        <div>{hello()}</div>
    );
}

export default ViewTitle;