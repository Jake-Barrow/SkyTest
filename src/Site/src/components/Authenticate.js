import React, { Component } from 'react';
import $ from 'jquery';

class Authenticate extends Component {
    constructor() {
        super();

        this.state = { customers: [] };
        this.continue = this.continue.bind(this);
    }

    componentDidMount() {
        var self = this;
        $.ajax("http://localhost:8080/customers", {
            method: 'GET',
            success: function (r) {
                self.setState({ customers: JSON.parse(r) });
            }
        });
    }

    continue() {
        var customerSelection = $('#customerSelection').val();
        var self = this;

        $.ajax("http://localhost:8080/customerLocationService/getLocationForCustomer/" + customerSelection, {
            method: 'GET',
            success: function (r) {
                var customer = JSON.parse(r);

                self.props.history.push({
                    pathname: "/select-products",
                    state: { location: customer.Location, customer: customer.Id }
                });
            }
        });
    }

    render() {
        var customers = this.state.customers.map((item, i) => {
            return (
                <li id={item.Id} key={i}>
                    <span>{item.Location} ({item.Id})</span>
                </li>);
        });
        var customersOptions = this.state.customers.map((item, i) => {
            return (
                <option value={item.Id} key={i}>
                    {item.Location}
                </option>);
        });

        return (
            <div className='Authenticate container'>
                <ul>{customers}</ul>
                <div className='SelectCustomer'>
                    <p>Please select a customer to continue:</p>
                    <select id='customerSelection' className='form-control'>
                        {customersOptions}
                    </select>
                    <button type='button' className='btn btn-success' onClick={() => { this.continue(this); }}>
                        Continue
                    </button>
                </div>
            </div>
        );
    }
}

export default Authenticate;