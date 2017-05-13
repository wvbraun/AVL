import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
  Model,
  AmbientLight,
} from 'react-vr';

const viewStyle = {
  flex: 1,
  flexDirection: 'column',
  width: 2,
  alignItems: 'stretch',
//  transform: [{translate: [-1, 1, -5]}],
};

const textStyle = {
  backgroundColor: 'black', //'#777879',
  fontSize: 0.8,
  fontWeight: '400',
  layoutOrigin: [0.5, 0.5],
  paddingLeft: 0.2,
  paddingRight: 0.2,
  textAlign: 'center',
  textAlignVertical: 'center',
  transform: [{translate: [0, 0, -3]}],
};

const spacePano = {
  uri: [
    '../static_assets/stars/fuzzy_stars_right1.png',
    '../static_assets/stars/fuzzy_stars_left2.png',
    '../static_assets/stars/fuzzy_stars_top3.png',
    '../static_assets/stars/fuzzy_stars_bottom4.png',
    '../static_assets/stars/fuzzy_stars_back6.png',
    '../static_assets/stars/fuzzy_stars_front5.png',
  ]
};

const earth = {
  obj: asset('planet-earth/earth.obj'),
  mtl: asset('planet-earth/earth.mtl'),
};

export default class AVL extends React.Component {
  render() {
    return (
      <View>
        <Pano source={spacePano} />
        <Text style={textStyle}>
          COPE SUX
        </Text>
        <AmbientLight intensity={ 2.6 }  />
        <Model source={earth} lit={true} />
      </View>
    );
  }
};

AppRegistry.registerComponent('AVL', () => AVL);
