import React from 'react';
import { mount, shallow } from 'enzyme';

import Header from '../components/header/Header';

describe('<Header />', function () {
    it('renders without crashing', () => {
        mount(<Header />);
    });
});
