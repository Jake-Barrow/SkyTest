import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// You can choose your kind of history here (e.g. browserHistory)
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Authenticate from './components/Authenticate';
import SelectProducts from './components/SelectProducts';
import Confirmation from './components/Confirmation';

import './App.css';

ReactDOM.render(
    <BrowserRouter>
        <div className='App'>
            <header>
                This is my website!
                </header>

            <main>
                <Route exact path="/" component={Authenticate} />
                <Route path="/select-products" component={SelectProducts} />
                <Route path="/confirmation" component={Confirmation} />
            </main>

            <footer>
                Your copyright message
                </footer>
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();
