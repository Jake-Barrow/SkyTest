
import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import $ from 'jquery';

import SelectProducts from '../components/SelectProducts';

describe('<SelectProducts />', function () {
    beforeEach(function () {
        sinon.stub($, 'ajax').yieldsTo('success', JSON.stringify([
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
                Category: 'Sports',
                Name: 'Hull TV',
                Locations: ['HULL']
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
        ]));
    });

    afterEach(function () {
        $.ajax.restore();
    });

    it('should have a button to continue', function () {
        const wrapper = shallow(<SelectProducts />);
        expect(wrapper.find('button')).to.have.length(1);
    });

    it('$.ajax should be called once on mount', function () {
        const mockNav = {
            state: {
                location: 'LEEDS',
                customer: 'AD12DDE2-94BA-459F-BAA8-F2B4BE3CAEB8'
            }
        };

        const wrapper = mount(<SelectProducts location={mockNav} />);
        expect($.ajax.calledOnce).to.be.true;
    });
});