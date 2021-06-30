import { FC } from 'react';
import { PageLayout } from 'src/components/layout';

import logo from 'src/logo.svg';
import 'src/App.css';

const Home: FC = () => {
    return (
        <PageLayout>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </PageLayout>
    );
};

export default Home;
