import React, { Component } from 'react';

import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Header from './header/Header';
import Authenticate from './Authenticate';
import SelectProducts from './SelectProducts';
import Confirmation from './Confirmation';
import Footer from './footer/Footer';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className='App'>
                    <Header />

                    <main>
                        <Route exact path="/" component={Authenticate} />
                        <Route path="/select-products" component={SelectProducts} />
                        <Route path="/confirmation" component={Confirmation} />
                    </main>

                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
