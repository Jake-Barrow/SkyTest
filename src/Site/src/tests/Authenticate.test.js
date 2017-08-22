
import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter, history } from 'react-router-dom';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import $ from 'jquery';

import Authenticate from '../components/Authenticate';

describe('<Authenticate />', function () {
    beforeEach(function () {
        sinon.stub($, 'ajax').yieldsTo('success', JSON.stringify([
            {
                Id: 'AD12DDE2-94BA-459F-BAA8-F2B4BE3CAEB8',
                Location: 'LEEDS'
            }
        ]));
    });

    afterEach(function () {
        $.ajax.restore();
    });

    it('should have an a select box', function () {
        const wrapper = shallow(<Authenticate />);
        expect(wrapper.find('select')).to.have.length(1);
    });

    it('should have a button to continue', function () {
        const wrapper = shallow(<Authenticate />);
        expect(wrapper.find('button')).to.have.length(1);
    });

    it('$.ajax should be called once on mount', function () {
        const wrapper = mount(<Authenticate />);
        expect($.ajax.calledOnce).to.be.true;
    });
});