import React, { useState, useEffect }from 'react';

function Button() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });

    return (
        <button onClick={() => setCount(count + 1)}>
            {count}
        </button>
    );
}

export default Button;