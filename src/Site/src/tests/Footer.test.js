import React from 'react';
import { mount, shallow } from 'enzyme';

import Footer from '../components/footer/Footer';

describe('<Footer />', function () {
    it('renders without crashing', () => {
        mount(<Footer />);
    });
});
