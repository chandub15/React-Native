import React from 'react';
import { StyleSheet, SafeAreaView, TouchableOpacity, Text, View, Alert } from 'react-native';

export default function Home({  }) {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer} >
        <Text style={styles.titleText} >Recipe & Inventory Management</Text>
      </View>
      <View style={styles.buttonContainer} >
        <TouchableOpacity style={[styles.button, styles.boxShadow]} onPress={() => {
          Alert.alert("Oops!! ", `We are launching soon`)
        }}>
          <Text style={styles.buttonText}>Recipe Mangement</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.boxShadow]} onPress={() => {
          Alert.alert("Oops!! ", `We are launching soon`)
        }}>
          <Text style={styles.buttonText}>Inventory Mangement</Text>
        </TouchableOpacity>
      </View >
    </SafeAreaView >
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  titleContainer: {
    flex: 1,
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
  },
  buttonContainer: {
    flex: 2,
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "baseline",
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: "#FA6E3B",
    padding: 10,
    borderRadius: 10,
    width: 100,
    minHeight: 100,
    justifyContent: "center",
  },
  boxShadow: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600"
  }
});
