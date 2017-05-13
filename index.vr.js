import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
} from 'react-vr';

const viewStyle = {
  backgroundColor: 'red',
};

const textStyle = {
  backgroundColor: '#777879',
  fontSize: 0.8,
  fontWeight: '400',
  layoutOrigin: [0.5, 0.5],
  paddingLeft: 0.2,
  paddingRight: 0.2,
  textAlign: 'center',
  textAlignVertical: 'center',
  transform: [{translate: [0, 0, -3]}],
};

export default class AVL extends React.Component {
  render() {
    return (
      <View style={viewStyle}>
        <Pano source={asset('chess-world.jpg')}/>
        <Text style={textStyle}>
          AVL
        </Text>
      </View>
    );
  }
};

AppRegistry.registerComponent('AVL', () => AVL);
