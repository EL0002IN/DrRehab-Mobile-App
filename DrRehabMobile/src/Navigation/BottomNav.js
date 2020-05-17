import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../SignedInStack/HomeScreen';
import { ExerciseListScreen } from '../SignedInStack/ExerciseList';
import { ProfileScreen } from '../SignedInStack/Profile';

const Tab = createBottomTabNavigator();


export function BottomNav() {
    return (
        <Tab.Navigator headerMode="none">
            <Tab.Screen name="Dashboard" component={HomeScreen} />
            <Tab.Screen name="ExerciseList" component={ExerciseListScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    )
}