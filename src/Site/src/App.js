import React, { Component } from 'react';

import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Authenticate from './components/Authenticate';
import SelectProducts from './components/SelectProducts';
import Confirmation from './components/Confirmation';

import './App.css';

class App extends Component {
    render() {
        return (
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
            </BrowserRouter>
        );
    }
}

export default App;
