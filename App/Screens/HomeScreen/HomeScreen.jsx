// screens/HomeScreen.js
import React from 'react';
import { FlatList, Pressable, Text, StyleSheet,ScrollView } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const cardData = [
    { id: '1', name: 'Painting ' },
    { id: '2', name: 'cleaning' },
    { id: '3', name: 'washing' },
    { id: '4', name: 'gardening' },
    { id: '5', name: 'repairing' },
    { id: '5', name: 'repairing' },
   
  ];

  const renderItem = ({ item }) => (
    <Pressable
      style={styles.card}
      onPress={() => navigation.push('Details', { cardData: item.name })}
    >
      <Text style={styles.cardText}>{item.name}</Text>
    </Pressable>
  );
  numColumns=2;

  return (
    
        <FlatList
      data={cardData}
      
      numColumns={numColumns}  
      columnWrapperStyle={styles.row} 
      renderItem={renderItem}
      key={numColumns}
      contentContainerStyle={styles.contentContainer}
    />
    
    
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  row: {
    justifyContent: 'space-between',  // Add spacing between cards in the row
  },
  card: {
    
    borderRadius: 10,
    padding: 20,
    width:151,
    height:140,
    marginBottom: 15,
    borderWidth:3,
    shadowOpacity:3,
    shadowRadius:3 ,
    borderRadius:20,
    
    
    
    
  },
  cardText: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#333',
    textAlign:'center',
    paddingTop:23
  },
});

export default HomeScreen;
