import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image } from 'react-native';

class HelloWorldApp extends Component {
  
  render() {
    const pic = {
      uri: './public/identity-img.png'
     }
    return (
      <View style={styles.container}>
        
       <Image source={require('./public/identity-img.png')} />
       <Text style={styles.mainText}>Hello asdasdasdas world!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  mainText: {
    color: '#000'
  } 
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => HelloWorldApp);

export default HelloWorldApp
