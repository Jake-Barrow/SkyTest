import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super();
    }

    render() {
        console.log(this.props.children);
        return (
            <div className='App'>
                <header>
                    This is my website!
                </header>

                <main>
                    {this.props.children}
                </main>

                <footer>
                    Your copyright message
                </footer>
            </div>
        );
    }
}

export default App;
