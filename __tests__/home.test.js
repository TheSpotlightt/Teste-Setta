import 'react-native';
import React from 'react';
import Home from '../src/screens/home';

import renderer from 'react-test-renderer';

test('should render home', () => {
    renderer.create(<Home />)
})
