import { StatusBar } from 'react-native';
import React from 'react';

import Navigation from './navigation';

export default function App() {
    return (
        <>
            <StatusBar 
                barStyle="default"
                backgroundColor="transparent"
                translucent
            />
            <Navigation />
        </>
    )
}