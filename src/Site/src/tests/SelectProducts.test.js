
import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import $ from 'jquery';

import SelectProducts from '../components/SelectProducts';

describe('<SelectProducts />', function () {
    beforeEach(function () {
    });

    afterEach(function () {
    });

    it('should have a button to continue', function () {
        const wrapper = shallow(<SelectProducts />);
        expect(wrapper.find('button')).to.have.length(1);
    });

    it('$.ajax should be called once on mount', function () {
        sinon.stub($, 'ajax').yieldsTo('success', JSON.stringify([
            {
                Id: 'CB8004BF-1D29-4CD0-82F3-1EDD6A138D3B',
                Category: 'Sports',
                Name: 'Leeds United TV',
                Locations: ['LEEDS']
            },
            {
                Id: 'D197B037-53EE-4F1D-91C6-6E0EAE448B4A',
                Category: 'Sports',
                Name: 'Leeds Rhinos TV',
                Locations: ['LEEDS']
            },
            {
                Id: '06BD6FE6-2CA3-401D-9E01-52271FA4059B',
                Category: 'News',
                Name: 'Sky News',
                Locations: []
            },
            {
                Id: '9894DB97-9E4C-4ECE-8F09-FC8A46FF392C',
                Category: 'News',
                Name: 'Sky Sports News',
                Locations: []
            }
        ]));

        const mockNav = {
            state: {
                location: 'LEEDS',
                customer: 'AD12DDE2-94BA-459F-BAA8-F2B4BE3CAEB8'
            }
        };

        const wrapper = mount(<SelectProducts location={mockNav} />);
        expect($.ajax.calledOnce).to.be.true;

        $.ajax.restore();
    });

    it('error received and displayed for invalid location', function () {
        const error = 'Supplied location is not valid.';
        sinon.stub($, 'ajax').yieldsTo('success', JSON.stringify({
            error: error
        }));

        const mockNav = {
            state: {
                location: 'LEEDS',
                customer: 'AD12DDE2-94BA-459F-BAA8-F2B4BE3CAEB8'
            }
        };

        const wrapper = mount(<SelectProducts location={mockNav} />);

        expect(wrapper.find('.Error')).to.have.length(1);
        expect(wrapper.find('.Error').text()).to.equal(error);

        $.ajax.restore();
    });
});