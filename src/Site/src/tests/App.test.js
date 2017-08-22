import React from 'react';
import { mount, shallow } from 'enzyme';

import App from '../components/App';

describe('<App />', function () {
    it('renders without crashing', () => {
        mount(<App />);
    });
});
