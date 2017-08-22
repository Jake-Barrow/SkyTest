import React, { Component } from 'react';
import $ from 'jquery';

class Confirmation extends Component {
    constructor() {
        super();

        this.state = { customer: '', channels: [] };
    }

    componentDidMount() {
        this.setState({
            customer: this.props.location.state.customer,
            channels: this.props.location.state.channels
        });
    }

    render() {
        var channels = this.state.channels.map((item, i) => {
            return (
                <li key={i}>
                    {item.Name}
                </li>);
        });


        return (
            <div className='Confirmation'>
                <div className='Customer'>
                    {this.state.customer}
                </div>
                <ul>
                    {channels}
                </ul>
                <button type='button' className='btn btn-success'>
                    Checkout
                </button>
            </div>
        );
    }
}

export default Confirmation;