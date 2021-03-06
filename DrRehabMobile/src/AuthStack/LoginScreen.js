import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { AuthContext } from '../Auth';

export function LoginScreen() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const { signIn } = React.useContext(AuthContext);

    return (
        <View style={{ marginTop: 100 }}>
            <TextInput
                placeholder="Username"
                value={username}
                onChangeText={setUsername} />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry />

            <Button title="Sign in" onPress={() => signIn({ username, password })} />
        </View>
    )
}