import React from 'react';
import { View, Text, Button, SafeAreaView, ScrollView, StyleSheet, Dimensions, Image, FlatList, TouchableHighlight } from 'react-native';
import { AuthContext } from '../Auth';
import axios from 'axios';

const IP = "http://192.168.1.9:3000";



export function ExerciseListScreen() {
    const { signOut } = React.useContext(AuthContext);
    const [error, setError] = React.useState('');
    const [list, setList] = React.useState('');
    const [patientDB, setPatientDB] = React.useState('');

    const newArr = [];

    const fetchPatientData = async () => {
        axios.post(IP + '/api/Physiotherapist/ViewPatientsDetails',
            { patient_username: 'Jasmine_Tan' })
            .then(response => {
                setPatientDB(response.data.data);
                Object.keys(response.data.data).map((key, index) => {
                    newArr.push(response.data.data[key]);
                })
            })
            .catch(error => console.log(error));

        setList(newArr);
    }

    React.useEffect(() => {
        fetchPatientData();
    }, [])

    console.log(patientDB);

    return (
        <ScrollView style={{ backgroundColor: '#fff' }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <Image source={require('../../Images/DREHAB.png')} style={{ marginTop: 10, height: 45, resizeMode: 'contain' }} />
                <View style={styles.card}>
                    <Text style={styles.header}>Exercises</Text>
                    <Text style={styles.content}>Estimated time: 10mins</Text>
                    <View style={{ flexDirection: 'row', alignContent: 'center' }}>
                        <View style={{ height: 30, width: 4, backgroundColor: '#008AB2', marginRight: 15 }} />
                        <Text style={styles.barcontent}>5 Exercises</Text>
                    </View>
                    <View style={styles.divider} />
                    <FlatList
                        data={list}
                        renderItem={({ item }) =>
                            <View style={{ flex: 0.1, flexDirection: 'row' }}>
                                <View>
                                    <Text style={styles.flatlistText}>{item.ExerciseID}</Text>
                                    <Text style={styles.content}>Estimated time:5 minutes</Text>
                                </View>
                                {item.ActiveExercise == 0 ?
                                    <View style={styles.circleGradientCompleted}>
                                        <Text style={styles.buttontext}>Completed</Text>
                                    </View>
                                    : <View style={styles.circleGradient}>
                                        <TouchableHighlight onPress={() => navigate('Instruction')}>
                                            <Text style={styles.buttontext}>Start</Text>
                                        </TouchableHighlight>
                                    </View>
                                }
                            </View>}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

const windowH = Dimensions.get('window').height;
const windowW = Dimensions.get('window').width;

const styles = StyleSheet.create({
    card: {
        width: 0.95 * windowW,
        height: 0.9 * windowH,
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
        padding: 15,
        flex: 1
    },
    header: {
        color: '#1B3254',
        fontSize: 25,
        fontFamily: 'Montserrat-SemiBold',
        marginBottom: 10
    },
    content: {
        color: '#777D7E',
        fontSize: 15,
        fontFamily: 'Montserrat-Regular',
        marginBottom: 15
    },
    barcontent: {
        color: '#1B3254',
        fontSize: 15,
        fontFamily: 'Montserrat-Regular',
        marginTop: 5
    },
    divider: {
        height: 0.5,
        backgroundColor: '#000',
        opacity: 0.2,
        marginTop: 15,
        marginBottom: 15
    },
    flatlistText: {
        color: '#1B3254',
        fontSize: 25,
        fontFamily: 'Montserrat-Regular',
        marginBottom: 10
    },
    circleGradientCompleted: {
        width: 95,
        height: 25,
        borderRadius: 15,
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        marginLeft: 30,
        height: 35,
        width: 120,
        marginTop: 10

    },

    circleGradient: {
        width: 95,
        height: 25,
        borderRadius: 15,
        backgroundColor: '#E34C67',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        alignContent: 'flex-end'
    },
    buttontext: {
        color: 'white',
        fontFamily: 'Montserrat-Regular',
        fontSize: 15
    }
})