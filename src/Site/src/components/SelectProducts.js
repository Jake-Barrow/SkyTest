import React, { Component } from 'react';
import $ from 'jquery';

class SelectProducts extends Component {
    constructor() {
        super();

        this.state = { location: '', channels: [] };
    }

    componentDidMount() {

        var self = this;
        var location = this.props.location.state.location;

        $.get("http://localhost:8080/catalogueService/getChannelsForLocation/" + location, {}, function (r) {

            self.setState({
                location: self.props.location.state.location,
                channels: JSON.parse(r)
            });

        });

    }

    render() {
        var channels = this.state.channels.map((item, i) => {
            return (
                <li key={i}>
                    <span>{item.Name} ({item.Category})</span>
                </li>);
        });
        return (
            <div className='SelectProducts'>
                Selected Location: <b>{this.state.location}</b>
                <ul>
                    {channels}
                </ul>
            </div>
        );
    }
}

export default SelectProducts;