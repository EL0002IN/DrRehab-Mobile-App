import React from 'react';
import { View, Text, Button, SafeAreaView, ScrollView, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native'
import { AuthContext } from '../Auth';
import { Dashboard } from './Dashboard';
import { Calendar } from './CalendarStrip';
import moment from 'moment';
import ProgressCircle from 'react-native-progress-circle';

export function HomeScreen() {
    const { signOut } = React.useContext(AuthContext);
    return (

        <ScrollView style={{ backgroundColor: '#ffffff' }}>
            <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
                <Image source={require('../../Images/DREHAB.png')} style={{ marginTop: 10, marginBottom: 10, height: 45, resizeMode: 'contain' }} />
                <View style={styles.card1}>
                    <View style={{ flex: 0.3, padding: 15 }}>
                        <ProgressCircle
                            percent={60}
                            radius={50}
                            borderWidth={3}
                            color="#008AB2"
                            shadowColor="#999"
                            bgColor="#fff"
                        >
                            <Text style={{ color: '#1B3254', fontSize: 20, fontFamily: 'Montserrat-SemiBold' }}>3/5</Text>
                            <Text style={{ color: '#1B3254', fontSize: 10, fontFamily: 'Montserrat-Regular' }}>Completed</Text>
                        </ProgressCircle>

                    </View>
                    <View style={{ flex: 0.7, flexDirection: 'column' }}>
                        <Text style={styles.header1}>Exercise Today!</Text>
                        <Text style={{ color: '#1B3254', fontSize: 15, fontFamily: 'Montserrat-Regular', marginBottom: 15 }}>Estimated time: 5mins   </Text>
                        <TouchableOpacity style={styles.button1}>
                            <Text style={{ color: '#fff', fontSize: 15, fontFamily: 'Montserrat-Regular' }}>Start</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.card2}>
                    <Text style={styles.header2}>Progress report</Text>
                    <Dashboard />
                    <View style={styles.divider} />
                    <View style={{ flexDirection: 'row', alignContent: 'center' }}>
                        <Text style={styles.header2}>Weekly Schedule</Text>
                        <View style={{ height: 20, width: 3, backgroundColor: '#1B3254', marginLeft: 15, marginRight: 15, marginTop: 2 }} />
                        <Text style={styles.header2}>May 2020</Text>
                    </View>
                    <Calendar />
                    <Text style={styles.subheader1}>Next appointment: 25 May 2020</Text>
                    <View style={styles.divider} />
                    <Text style={styles.header2}>Physiotherapist</Text>
                </View>
            </View>
        </ScrollView>
    )
}


const windowH = Dimensions.get('window').height;
const windowW = Dimensions.get('window').width;

const styles = StyleSheet.create({
    card1: {
        width: 0.95 * windowW,
        height: 0.15 * windowH,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowOffset: {
            width: 0,
            height: 5
        },
        borderColor: '#E8EAF1',
        borderWidth: 1,
        shadowColor: '#E8EAF1',
        elevation: 10,
        flex: 1,
        flexDirection: 'row'
    },
    card2: {
        width: 0.95 * windowW,
        height: 0.7 * windowH,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowOffset: {
            width: 0,
            height: 2
        },
        borderColor: '#E8EAF1',
        borderWidth: 1,
        shadowColor: '#E8EAF1',
        elevation: 5,
        marginTop: 10,
        padding: 15
    },
    button1: {
        width: 95,
        height: 25,
        borderRadius: 15,
        backgroundColor: '#E34C67',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    button2: {
        width: 120,
        height: 25,
        borderRadius: 15,
        backgroundColor: '#E34C67',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    header1: {
        color: '#1B3254',
        fontSize: 25,
        marginTop: 10,
        fontFamily: 'Montserrat-SemiBold',
        marginBottom: 10
    },

    header2: {
        color: '#1B3254',
        fontSize: 20,
        fontFamily: 'Montserrat-SemiBold'
    },

    subheader1: {
        color: '#1B3254',
        fontSize: 15,
        fontFamily: 'Montserrat-Regular',
        marginTop: 10,
        marginBottom: 10
    },
    divider: {
        height: 0.5,
        backgroundColor: '#000',
        opacity: 0.2,
        marginTop: 0,
        marginBottom: 15
    }
})

{/* <View>
<Text>Welcome to the homescreen</Text>
<Button title="Sign out" onPress={() => signOut()} />
</View> */}