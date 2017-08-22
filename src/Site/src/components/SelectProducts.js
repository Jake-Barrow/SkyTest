import React, { Component } from 'react';
import $ from 'jquery';
import ChannelList from './ChannelList';
import SelectedProductsStore from './SelectedProductsStore';

class SelectProducts extends Component {
    constructor() {
        super();

        this.state = { location: '', channels: [], selectedChannels: [] };
        this.onChannelSelectionChanged = this.onChannelSelectionChanged.bind(this);
        this.confirm = this.confirm.bind(this);
    }

    componentDidMount() {
        var self = this;
        var locale = this.props.location.state.location;
        var customer = this.props.location.state.customer;

        $.ajax("http://localhost:8080/catalogueService/getChannelsForLocation/" + locale, {
            method: 'GET',
            crossDomain: true,
            success: function (r) {
                self.setState({
                    location: locale,
                    customer: customer,
                    channels: JSON.parse(r),
                    selectedChannels: SelectedProductsStore.get(locale)
                });
            }
        });
    }

    componentWillUnmount() {
        SelectedProductsStore.save(this.state.selectedChannels, this.state.location);
    }

    onChannelSelectionChanged() {
        var channelsDOM = $('.channel:checked');
        var selected = [];
        for (var i = 0; i < channelsDOM.length; i++) {
            var channelId = channelsDOM.eq(i).attr('id');

            selected.push(channelId);
        }

        this.setState({
            selectedChannels: $.grep(this.state.channels, function (item, i) {
                return selected.indexOf(item.Id) !== -1;
            })
        });
    }

    confirm() {
        if (this.state.selectedChannels.length <= 0) {
            alert('You must select at least one product to continue');
            return;
        }

        this.props.history.push({
            pathname: "/confirmation",
            state: { channels: this.state.selectedChannels, customer: this.state.customer }
        });
    }

    render() {
        var self = this;
        var sportsChannels = $.grep(this.state.channels, function (item, i) {
            var isInSelected = $.grep(self.state.selectedChannels, function (s, k) {
                return item.Id === s.Id;
            }).length > 0;

            if (isInSelected)
                item.Selected = true;
            else
                item.Selected = false;

            return item.Category === 'Sports';
        });
        var newsChannels = $.grep(this.state.channels, function (item, i) {
            var isInSelected = $.grep(self.state.selectedChannels, function (s, k) {
                return item.Id === s.Id;
            }).length > 0;

            if (isInSelected)
                item.Selected = true;
            else
                item.Selected = false;

            return item.Category === 'News';
        });

        return (
            <div className='SelectProducts container'>
                <div className='Location'>
                    Selected Location: <b>{this.state.location}</b>
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        <ChannelList category='Sports' channels={sportsChannels} onchange={this.onChannelSelectionChanged} />
                    </div>
                    <div className='col-md-4'>
                        <ChannelList category='News' channels={newsChannels} onchange={this.onChannelSelectionChanged} />
                    </div>
                    <div className='col-md-4'>
                        <div className='Basket'>
                            <span className='Basket-Title'>Checkout Basket</span>
                            <ul>
                                {this.state.selectedChannels.map(function (item, i) {
                                    return (
                                        <li key={i}>
                                            {item.Name}
                                        </li>
                                    );
                                })}
                            </ul>
                            <button type='button' className='btn btn-success' onClick={this.confirm}>
                                Confirm Purchase
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SelectProducts;