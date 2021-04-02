import 'react-native';
import React from 'react';
import Home from '../src/screens/home';
import { act } from 'react-dom/test-utils';
import { render, fireEvent, waitFor } from '@testing-library/react-native';

import Homeworld from '../src/screens/infos/homeworld';

test('should render homeworld', () => {
    render(<Homeworld homeWorld={'https://swapi.dev/api/planets/1/'} />)
});
