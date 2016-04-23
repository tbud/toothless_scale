'use strict';

import StyleSheet from '../lib/StyleSheet';

module.exports = {
  TView: StyleSheet.create({
    normal: {
      backgroundColor: 'rgba(255, 255, 255, 1)',
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
      backgroundColor: '#ff8400',
    },
    buttonDisable:{
      backgroundColor: '#ddd',
    },
    buttonDanger: {
      backgroundColor: '#ED3D3D',
    }
  })
};

