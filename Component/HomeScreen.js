import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ justifyContent: "space-between", flexDirection: "row", }}>
        <TouchableOpacity  style={styles.buttonContainer}
          onPress={() => {
            navigation.navigate("Array");
          }}
        >
          <Text style={styles.buttonText}>ArrayScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}
          onPress={() => {
            navigation.navigate("Linklist");
          }}
        >
          <Text  style={styles.buttonText}>LinkListScreen</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#ADD8E6',
  },
  buttonContainer: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    marginLeft:20
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }
});
