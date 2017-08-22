
import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import $ from 'jquery';

import Confirmation from '../components/Confirmation';

describe('<Confirmation />', function () {

    it('should have a button to continue', function () {
        const wrapper = shallow(<Confirmation />);
        expect(wrapper.find('button')).to.have.length(1);
    });

    it('2 channels should be shown', function () {
        const mockNav = {
            state: {
                customer: 'AD12DDE2-94BA-459F-BAA8-F2B4BE3CAEB8',
                channels: [
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
                    }
                ]
            }
        };

        const wrapper = mount(<Confirmation location={mockNav} />);

        expect(wrapper.find('li')).to.have.length(2);
    });

    it('correct customer id is shown', function () {
        const CustomerId = 'AD12DDE2-94BA-459F-BAA8-F2B4BE3CAEB8';

        const mockNav = {
            state: {
                customer: CustomerId,
                channels: [
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
                    }
                ]
            }
        };

        const wrapper = mount(<Confirmation location={mockNav} />);

        expect(wrapper.find('.Customer span').text()).to.equal(CustomerId);
    });
});