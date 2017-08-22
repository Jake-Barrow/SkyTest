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
                        Category: 'Sports',
                        Name: 'Leeds United TV',
                        Locations: ['LEEDS']
                    },
                    {
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
});