import React from 'react';

// am not sure what you want me to do here with the light and dark mode

export const App = () => {

    return (
        <Main/>
    );

}


export const Main = () => {

    return (
        <div>
            <Settings/>
        </div>
    );

}

export const Settings = () => {

    const toggleMode = React.useCallback(() => {

    }, []);

    return (
        <button onClick={toggleMode}>toggle light/dark mode</button>
    );

}



