import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    SafeAreaView
} from 'react-native';
import Header from './Header';

export default function Profile({ navigation }) {

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <View style={styles.bodyContainer}>
                <View style={styles.titleContainer} >
                    <Text style={styles.titleText} >Profile</Text>
                </View>
                <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
                <View style={styles.buttonContainer} >
                    <View style={styles.button}>
                        <Text style={styles.text}>Chandra Prakash</Text>
                    </View>
                </View >
                <View style={styles.buttonContainer} >
                    <View style={styles.button}>
                        <Text style={styles.text}>chandraprakashb15@gmail.com</Text>
                    </View>
                </View >
                <View style={styles.buttonContainer} >
                    <View style={styles.button}>
                        <Text style={styles.text} onPress={()=>navigation.reset({ index:0, routes:[{name:'Landing Page'}]})}>Logout</Text>
                    </View>
                </View >
            </View>
        </SafeAreaView >
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1
    },
    bodyContainer: {
        backgroundColor: '#fff',
        justifyContent: "center",
        height: "100%"
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        alignSelf: 'center',
        marginBottom: 100
    },
    titleContainer: {
        fontWeight: "600",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "flex-end",
        flexDirection: "row"
    },
    titleText: {
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 25,
        fontWeight: "600",
        textAlign: "center",
        marginBottom: 100,
    },
    buttonContainer: {
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    button: {
        backgroundColor: "#FA6E3B",
        padding: 10,
        borderRadius: 10,
        minWidth: 100
    },
    text: {
        color: "#fff",
        textAlign: "center"
    }
});
