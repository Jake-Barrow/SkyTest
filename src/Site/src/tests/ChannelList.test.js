
import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import $ from 'jquery';

import ChannelList from '../components/ChannelList';

describe('<ChannelList />', function () {
    it('Should display 4 channels', function () {
        const onSelectionChanged = function () { }
        const channels = [
            {
                Category: 'Sports',
                Name: 'Leeds United TV',
                Locations: ['LEEDS']
            },
            {
                Category: 'Sports',
                Name: 'Leeds Rhinos TV',
                Locations: ['LEEDS']
            },
            {
                Category: 'News',
                Name: 'Sky News',
                Locations: []
            },
            {
                Category: 'News',
                Name: 'Sky Sports News',
                Locations: []
            }
        ];

        const wrapper = shallow(<ChannelList channels={channels} onchange={onSelectionChanged} />);

        expect(wrapper.find('li')).to.have.length(4);
    });

    it('renders null when no channels', function () {
        const onSelectionChanged = function () { }
        const channels = [];

        const wrapper = shallow(<ChannelList channels={channels} onchange={onSelectionChanged} />);

        expect(wrapper.get(0)).to.equal(null);
    });
});