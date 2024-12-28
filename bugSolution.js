```javascript
import React, { useState } from 'react';
import { FlatList, Text, StyleSheet, Button } from 'react-native';

const data = [{
  id: 1,
  name: 'Item 1'
}, {
  id: 2,
  name: 'Item 2'
}, {
  id: 3,
  name: 'Item 3'
}];

const App = () => {
  const [items, setItems] = useState(data);

  const addItem = () => {
    setItems([...items, { id: items.length + 1, name: `Item ${items.length + 1}` }]);
  };

  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />
      <Button title="Add Item" onPress={addItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default App;
```