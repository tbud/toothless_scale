'use strict';

import {StyleSheet} from 'react-native';

module.exports = {
  TView: StyleSheet.create({
    normal: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
    },
  }),
  TText: StyleSheet.create({
    normal: {
      fontFamily: 'Cochin',
      fontSize: 20,
      fontWeight: 'bold',
      color: 'rgba(255,255,255,1)',
    },
  }),
  TButton: StyleSheet.create({
    buttonStyle: {
      backgroundColor: 'red',
    },
    buttonText: {}
  })
};
