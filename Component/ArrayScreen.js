import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const ArrayManipulationComponent = () => {
  const [arraySize, setArraySize] = useState(5);
  const [arrayData, setArrayData] = useState(Array.from({ length: 5 }, (_, index) => `Item ${index + 1}`));
  const [editIndex, setEditIndex] = useState('');
  const [editValue, setEditValue] = useState('');



  const handleEditItem = () => {
    if (editIndex !== '' && editValue !== '') {
      const newArray = [...arrayData];
      newArray[editIndex] = editValue;
      setArrayData(newArray);
      setEditIndex('');
      setEditValue('');
    }
  };

  const handleDeleteItem = (index) => {
    const newArray = arrayData.filter((_, i) => i !== index);
    setArrayData(newArray);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Array Manipulation</Text>
      <TextInput
        style={styles.input}
        placeholder="Edit Index"
        value={editIndex}
        onChangeText={(text) => setEditIndex(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Edit Value"
        value={editValue}
        onChangeText={(text) => setEditValue(text)}
      />
      <Button style={{marginVertical:16}} title="Edit Item" onPress={handleEditItem} />
     
      <FlatList
        data={arrayData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.itemContainer}>
            <Text>{item}</Text>
            <Button title="Remove" onPress={() => handleDeleteItem(index)} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  flex:1,
  padding:15,
    backgroundColor: '#ADD8E6',
    
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8,
    paddingLeft: 8,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    marginTop:8,
    borderWidth:1,
    paddingLeft:5

  },
});

export default ArrayManipulationComponent;
