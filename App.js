import React from 'react';
import { store, persistor } from './store';

import { SafeAreaView, ImageBackground, ScrollView, View, StyleSheet, StatusBar } from 'react-native';
import { Provider, connect } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { StackNavigator } from 'react-navigation';

import AppNavigator from './components/appNavigator';




const App: () => React$Node = () => {
  return (
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView style={styles.safeArea}>
            <View 
              style={{
                height:'100%'
              }}
            >  
              <AppNavigator />
            </View>
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


/*          <KeyboardAvoidingView
            style={{padding height position}}
            /*behavior="height"
          >
*/
export default App;
