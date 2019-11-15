import React from 'react';
import {hi} from '../services/printHello'

function ViewMessage() {
    return (
        <div>{hi()}</div>
    );
}

export default ViewMessage;