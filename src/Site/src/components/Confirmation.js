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
            <div className='col-md-offset-3 col-md-6'>
                <div className='Confirmation'>
                    <div className='Customer'>
                        Customer ID:
                        <span>{this.state.customer}</span>
                    </div>
                    <span className='Products'>Products</span>
                    <ul>
                        {channels}
                    </ul>
                    <div className='Price'>
                        <span className='PriceTitle'>Price</span>
                        <span className='SubTotal'>Sub Total: <p>£0.00</p></span>
                        <span className='VAT'>VAT (20%): <p>£0.00</p></span>
                        <span className='Total'>Total: <p>£0.00</p></span>
                    </div>
                    <div className='Checkout'>
                        <button type='button' className='btn btn-success'>
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Confirmation;