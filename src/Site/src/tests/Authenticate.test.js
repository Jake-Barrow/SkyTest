
import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import $ from 'jquery';

import Authenticate from '../components/Authenticate';

describe('<Authenticate />', function () {
    it('should have an a select box', function () {
        const wrapper = shallow(<Authenticate />);
        expect(wrapper.find('select')).to.have.length(1);
    });

    it('select box has only 1 option', function () {
        sinon.stub($, 'ajax').yieldsTo('success', JSON.stringify([]));

        const wrapper = mount(<Authenticate />);

        $.ajax.restore();

        expect(wrapper.find('select option')).to.have.length(1);
    });

    it('should have a button to continue', function () {
        const wrapper = shallow(<Authenticate />);
        expect(wrapper.find('button')).to.have.length(1);
    });

    it('$.ajax should be called once on mount', function () {
        sinon.stub($, 'ajax').yieldsTo('success', JSON.stringify([
            {
                Id: 'AD12DDE2-94BA-459F-BAA8-F2B4BE3CAEB8',
                Location: 'LEEDS'
            }
        ]));

        const wrapper = mount(<Authenticate />);
        var result = $.ajax.calledOnce;
        $.ajax.restore();

        expect(result).to.be.true;
    });

    it('error is returned and displayed', function () {
        const error = 'Error connecting to server';

        sinon.stub($, 'ajax').yieldsTo('success', JSON.stringify({
            error: error
        }));

        const wrapper = mount(<Authenticate />);
        
        $.ajax.restore();

        expect(wrapper.find('.Error p').text()).to.equal(error);
    });

    it('ajax error is returned and displayed', function () {
        const error = 'Error connecting to server';

        sinon.stub($, 'ajax').yieldsTo('error', {
            statusText: error
        });

        const wrapper = mount(<Authenticate />);

        $.ajax.restore();

        expect(wrapper.find('.Error p').text()).to.equal(error);
    });
});