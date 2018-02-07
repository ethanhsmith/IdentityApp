import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import Camera from 'react-native-camera';

export default class BarcodeScan extends Component {

    render () {
        return (
            <View style={styles.container}>
            <Camera
                style={styles.preview}
                aspect={Camera.constants.Aspect.fill}
                ></Camera>
        </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center'
}
})
  