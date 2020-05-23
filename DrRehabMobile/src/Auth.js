import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { State } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import { LoginScreen } from './AuthStack/LoginScreen';
import { BottomNav } from './Navigation/BottomNav';

const Stack = createStackNavigator();
export const AuthContext = React.createContext();

export function Auth({ navigation }) {
    const [state, dispatch] = React.useReducer(
        (prevState, action) => {
            switch (action.type) {
                case 'RESTORE_TOKEN':
                    return {
                        ...prevState,
                        userToken: action.token,
                        isLoading: false
                    };
                case 'SIGN_IN':
                    return {
                        ...prevState,
                        isSignout: false,
                        userToken: action.token,
                    };
                case 'SIGN_OUT':
                    return {
                        ...prevState,
                        isSignout: true,
                        userToken: null
                    };
            }
        },
        {
            isLoading: true,
            isSignout: false,
            userToken: null
        }
    );

    React.useEffect(() => {
        //Fetch the token from storage then navigate to our appropriate place
        const bootstrapAsync = async () => {
            let userToken;
            try {
                userToken = await AsyncStorage.get('userToken');
            } catch (err) {
                console.log(err)
                //Restoring token failed
            }

            //After restoring token, we may need to validate it in production app
            //This will switch to the App screen or Auth screen and this loading 
            //screen will be unmounted and thrown away
            dispatch({ type: 'RESTORE_TOKEN', token: userToken });;
        }
        bootstrapAsync();
    }, []);

    const authContext = React.useMemo(
        () => ({
            signIn: async data => {
                //In proudction app, send some data (username, password) to server and get a token
                //Handle errrors if sign in failed
                //After getting token, persist the token using 'AsyncStorage'
                //Dummy token used in this example
                dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
            },
            signOut: () => dispatch({ type: 'SIGN_OUT' }),
            signUp: async data => {
                //In proudction app, send some data (username, password) to server and get a token
                //Handle errrors if sign in failed
                //After getting token, persist the token using 'AsyncStorage'
                //Dummy token used in this example
                dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
            },
        }),
        []
    );
    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                <Stack.Navigator headerMode='none'>
                    {state.userToken == null ? (
                        <Stack.Screen name="LoginScreen" component={LoginScreen} />
                    ) : (
                            <Stack.Screen name="HomeScreen" component={BottomNav} />
                        )}
                </Stack.Navigator>
            </NavigationContainer>
        </AuthContext.Provider>
    );
}


