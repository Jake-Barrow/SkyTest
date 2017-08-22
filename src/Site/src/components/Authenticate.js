import React, { Component } from 'react';
import $ from 'jquery';

class Authenticate extends Component {
    constructor() {
        super();

        this.state = { customers: [], error: '' };
        this.continue = this.continue.bind(this);
    }

    componentDidMount() {
        var self = this;
        $.ajax("http://localhost:8080/customers", {
            method: 'GET',
            crossDomain: true,
            success: function (r) {
                var result = JSON.parse(r);

                if (result.error !== undefined && result.error !== '') {
                    self.setState({ error: result.error });
                    return;
                }

                result.push({
                    Id: 'A58C27D3-3248-434F-AFAD-EFE788C86D9B',
                    Location: 'LEEDS'
                });

                self.setState({ customers: result });
            },
            error: function (e, x, r) {
                if (e.statusText !== undefined && e.statusText !== '') {
                    self.setState({ error: e.statusText });
                    return;
                }
            }
        });
    }

    continue() {
        var customerSelection = $('#customerSelection').val();
        var self = this;

        $.ajax("http://localhost:8080/customerLocationService/getLocationForCustomer/" + customerSelection, {
            method: 'GET',
            crossDomain: true,
            success: function (r) {
                var result = JSON.parse(r);

                if (result.error !== undefined && result.error !== '') {
                    self.setState({ error: result.error });
                    return;
                }

                self.props.history.push({
                    pathname: "/select-products",
                    state: { location: result.Location, customer: result.Id }
                });
            },
            error: function (e, x, r) {
                if (e.statusText !== undefined && e.statusText !== '') {
                    self.setState({ error: e.statusText });
                    return;
                }
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
                <ul>
                    <li>Stored Customers</li>
                    {customers}
                </ul>
                <div className='SelectCustomer'>
                    <p>Please select a customer to continue:</p>
                    <select id='customerSelection' className='form-control'>
                        {customersOptions}
                    </select>
                    <button type='button' className='btn btn-success' onClick={this.continue}>
                        Continue
                    </button>
                    <div className='Error'>
                        <p>{this.state.error}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Authenticate;