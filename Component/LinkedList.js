import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';


const Linkedlist = () => {
  const [linkedlist, setLinkedList] = useState([]);
  const [newItemText, setNewItemText] = useState('');
  const [editItemIndex, setEditItemIndex] = useState(null);

  const addItem = () => {
    if (newItemText) {
      if (editItemIndex !== null) {
        const updatedList = [...linkedlist];
        updatedList[editItemIndex] = newItemText;
        setLinkedList(updatedList);
        setEditItemIndex(null);
      } else {
        setLinkedList([...linkedlist, newItemText]);
      }
      setNewItemText('');
    }
  };

  const editItem = (index) => {
    setEditItemIndex(index);
    setNewItemText(linkedlist[index]);
  };

  const deleteItem = (index) => {
    const updatedList = [...linkedlist];
    updatedList.splice(index, 1);
    setLinkedList(updatedList);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Linked List</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter item"
        value={newItemText}
        onChangeText={(text) => setNewItemText(text)}
      />
      <Button title={editItemIndex !== null ? 'Update Item' : 'Add Item'} onPress={addItem} />

   

      <FlatList
        data={linkedlist}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={{justifyContent:"center",alignItems:"center"}}>
          <Text>
            . {"\n"}
            . {"\n"}
            . {"\n"}
            . {"\n"}
            . {"\n"}
          </Text>
          <View style={styles.listItem}>
        
            <Text>{item}</Text>
            <View style={styles.buttonsContainer}>
              <Button title="Edit" onPress={() => editItem(index)} />
              <Button title="Delete"  onPress={() => deleteItem(index)} />
            </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ADD8E6',
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
    borderWidth:1,
    marginHorizontal:20,
    paddingLeft:3,
 
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent:"space-evenly",
    paddingLeft:10
  },
});

export default Linkedlist;
