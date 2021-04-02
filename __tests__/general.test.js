import 'react-native';
import React from 'react';
import Home from '../src/screens/home';
import { act } from 'react-dom/test-utils';
import { render, fireEvent, waitFor, within } from '@testing-library/react-native';

import GeneralInfos from '../src/screens/infos/general';

test('should render general infos component', () => {
    render(<GeneralInfos         
        gender={'male'}
        hairColor={'blond'}
        skinColor={'fair'}
        eyeColor={'blue'}
        height={'172'}
        birth_year={'17/10/1890'}
    />)
});

test('should render general infos texts', () => {
    const { getAllByTestId } = render( <GeneralInfos 
        gender={'male'}
        hairColor={'blond'}
        skinColor={'fair'}
        eyeColor={'blue'}
        height={'172'}
        birth_year={'17/10/1890'}
    />)


    expect(getAllByTestId('infos')).toBeTruthy();
});



