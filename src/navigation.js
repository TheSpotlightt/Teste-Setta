import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AntDesign, Feather } from '@expo/vector-icons';

import Home from './screens/home';
import Film from './screens/movies/films-screen';
import Infos from './screens/infos-page';
import StarShipsInfo from './screens/starship-infos';
import ModalScreen from './screens/modal-screen';
import FilmInfos from './screens/movies/film-infos';

const Stack = createStackNavigator();
const RootStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const icons = {
    Home: {
        lib: AntDesign,
        name: 'home'
    },

    Film: {
        lib: Feather,
        name: 'film'
    }
};


function Tabs () {
    return (
        <Tab.Navigator  
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    const { lib: Icon, name } = icons[route.name];
                    return <Icon name={name} size={size} color={color} />
                }
            })}

            tabBarOptions={{
                style: {
                    backgroundColor: '#242526', 
                    borderTopColor: '#242526'
                }, 
                activeTintColor: '#fefefe',
            }}
            >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Film" component={Film} />
        </Tab.Navigator>
    )
};

function Navigation() {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen 
                name="Home" 
                component={Tabs} 
                options={{ 
                    title: '', 
                    headerStyle: {
                        backgroundColor: '#000'
                    }, 
                    headerTintColor: '#FFF',
                    headerShown: false,
                }}
                />
                <Stack.Screen 
                    name="Infos" 
                    component={Infos} 
                    options={({ route }) => ({ 
                        title: route.params.name, 
                        headerStyle: {
                            backgroundColor:'#18191A'
                        },
                        headerTintColor: '#fff'
                    })} 
                />

                <Stack.Screen 
                    name="StarShipsInfo" 
                    component={StarShipsInfo} 
                    options={{ 
                    title: '', 
                    headerStyle: {
                        backgroundColor:'#18191A'
                    }, 
                    headerTintColor: '#FFF',
                }} 
                />

                <Stack.Screen 
                    name="FilmInfos" 
                    component={FilmInfos} 
                    options={{ 
                    title: '', 
                    headerStyle: {
                        backgroundColor:'#18191A'
                    }, 
                    headerTintColor: '#FFF',
                }} 
                />
            </Stack.Navigator>
        </>
    )
};

export default function App() {
    return (
        <NavigationContainer mode="modal" headerMode="none">
            <RootStack.Navigator>
                <RootStack.Screen 
                    name="main"
                    component={Navigation} 
                    options={{ headerShown: false }}  
                />

                <RootStack.Screen
                    name="modal" 
                    component={ModalScreen} 
                    options={{ headerShown: false }} 
                />
            </RootStack.Navigator>
        </NavigationContainer>
    )
}