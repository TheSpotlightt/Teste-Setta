import 'react-native';
import React from 'react';
import Home from '../src/screens/home';
import { act } from 'react-dom/test-utils';
import { render, fireEvent, waitFor } from '@testing-library/react-native';

import 'react-test-renderer';

test('should render home correctly', () => {
    render(<Home />);
});


test('should render title', () => {
    const { getByTestId } = render(<Home />);

    expect(getByTestId('title').props.children).toBe(' Star Wars Characters ');

});
