import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Dimensions, TouchableHighlight, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialIcons';

const screenH = Dimensions.get('window').height;

export function Execute({ route, navigation }) {
    const id = route.params.exerciseID;
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={{ marginTop: 50 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" color='#008AB2' size={40} />
                </TouchableOpacity>
                <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, padding: 15 }}>
                    <Text style={styles.header}>{id}</Text>
                    <View style={styles.circleGradient}>
                        <RNCamera
                            ref={ref => {
                                this.camera = ref;
                            }}
                            style={styles.preview}
                            type={RNCamera.Constants.Type.back}
                            flashMode={RNCamera.Constants.FlashMode.on}
                            androidCameraPermissionOptions={{
                                title: 'Permission to use camera',
                                message: 'We need your permission to use your camera',
                                buttonPositive: 'Ok',
                                buttonNegative: 'Cancel',
                            }}
                            androidRecordAudioPermissionOptions={{
                                title: 'Permission to use audio recording',
                                message: 'We need your permission to use your audio',
                                buttonPositive: 'Ok',
                                buttonNegative: 'Cancel',
                            }}
                            onGoogleVisionBarcodesDetected={({ barcodes }) => {
                                console.log(barcodes);
                            }}
                        />
                        <TouchableHighlight>
                            <Text style={styles.buttontext}>Start</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    header: {
        fontFamily: 'Montserrat',
        color: '#008AB2',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 15
    },
    content: {
        fontFamily: 'Montserrat',
        color: '#777D7E',
        fontSize: 15,
        marginTop: 15,
    },
    circleGradient: {
        width: 120,
        height: 35,
        borderRadius: 25,
        backgroundColor: '#E34C67',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        marginTop: 45
    },
    buttontext: {
        color: 'white',
        fontFamily: 'Montserrat-Regular',
        fontSize: 15
    }
})