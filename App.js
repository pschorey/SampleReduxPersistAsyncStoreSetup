import React from 'react';
import { store, persistor } from './store';
import { SafeAreaView, ImageBackground, ScrollView, View, StyleSheet, StatusBar } from 'react-native';
import { Provider, connect } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';





const App: () => React$Node = () => {
  return (
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView style={styles.safeArea}>
            
         </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'rgb(176,196,222)', /*light steel blue */
    height:'100%',
    width:'100%',
    zIndex:0
  }
});


export default App;
