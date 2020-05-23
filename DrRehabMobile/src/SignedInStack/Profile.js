import React from 'react';
import { View, Text, Button, SafeAreaView, ScrollView } from 'react-native';
import { AuthContext } from '../Auth';

export function ProfileScreen() {
    const { signOut } = React.useContext(AuthContext);
    return (
        <View style={{ marginTop: 100 }}>
            <Text>Welcome to the profile screen</Text>
            <Button title="Sign out" onPress={() => signOut()} />
        </View>
    )
}