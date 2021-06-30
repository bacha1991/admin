// import React from 'react';
import { ThemeProvider } from 'src/theme';
import { UserProvider } from 'src/context/user';

// import Routes from './Routes';
import Routes from 'src/routes';

function App() {
    return (
        <ThemeProvider>
            <UserProvider>
                <Routes />
            </UserProvider>
        </ThemeProvider>
    );
}

export default App;
