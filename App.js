import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore , combineReducers} from 'redux'
import { Provider} from 'react-redux'

import productsReducer from './store/reducers/product'

const roorReducer = combineReducers({
  products : productsReducer
})
const store = createStore(roorReducer)
export default function App() {
  return (
 <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
