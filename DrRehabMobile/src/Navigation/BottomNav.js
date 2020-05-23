import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../SignedInStack/HomeScreen';
import { ExerciseListScreen } from '../SignedInStack/ExerciseList';
import { ProfileScreen } from '../SignedInStack/Profile';
import { Instruction } from '../SignedInStack/ExerciseStack/Instruction';
import { Execute } from '../SignedInStack/ExerciseStack/PerformExercise';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();
const ExerciseStack = createStackNavigator();

function ExerciseStackFunct() {
    return (
        <ExerciseStack.Navigator headerMode='none'>
            <ExerciseStack.Screen name="ExerciseList" component={ExerciseListScreen} />
            <ExerciseStack.Screen name="Instruction" component={Instruction} />
            <ExerciseStack.Screen name="Execute" component={Execute} />
        </ExerciseStack.Navigator>
    )
}


export function BottomNav() {
    return (
        <Tab.Navigator headerMode="none" screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Dashboard') {
                    iconName = focused ? 'home' : 'home';
                } else if (route.name === 'Exercise') {
                    iconName = focused ? 'dumbbell' : 'dumbbell';
                } else if (route.name === 'Profile') {
                    iconName = focused ? 'user' : 'user';
                }

                return <Icon name={iconName} size={20} color={color} />
            },
        })}
            tabBarOptions={{
                activeTintColor: '#008AB2',
                inactiveTintColor: 'grey'
            }}
        >
            <Tab.Screen name="Dashboard" component={HomeScreen} />
            <Tab.Screen name="Exercise" component={ExerciseStackFunct} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    )
}