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
  flex: 1,
  flexDirection: 'column',
//  backgroundColor: 'red',
  width: 2,
  alignItems: 'stretch',
  transform: [{translate: [-1, 1, -5]}],
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
    // <Pano source={asset('chess-world.jpg')}/>
    return (
      <View style={{backgroundColor: 'black'}}>
        <Text>AVL</Text>
        <View style={viewStyle}>
          <View style={{ margin: 0.1, height: 0.3, backgroundColor: 'red'}}>
            <Text style={{fontSize: 0.2, textAlign: 'center'}}>Red</Text>
          </View>
        </View>
      </View>
    );
  }
};

AppRegistry.registerComponent('AVL', () => AVL);
