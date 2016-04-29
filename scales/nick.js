'use strict';

import StyleSheet from '../lib/StyleSheet';

module.exports = {

  TView: StyleSheet.create({
    normal: {
      backgroundColor: '#fff',
      margin: 0,
      padding: 0
    },
  }),

  TText: StyleSheet.create({
    normal: {
      fontSize: 14,
      color: '#333',
    },
  }),

  TButton: StyleSheet.create({
    buttonBox_default: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 36,
      borderRadius: 2,
      backgroundColor: '#ff8400',
      paddingLeft: 16,
      paddingRight: 16,
      margin: 4,
      fontWeight: 'bold',
    },
    buttonText_default: {
      fontSize: 14,
      color: '#fff',
      textAlign: 'center',
    },

    buttonBox_default_disabled: {
      backgroundColor:'#efefef',
    },
    buttonText_default_disabled: {
      color:'#bbb',
    },

    buttonBox_primary:{
      alignItems: 'center',
      justifyContent: 'center',
      height: 36,
      borderRadius: 2,
      backgroundColor: '#ED3D3D',
      paddingLeft: 16,
      paddingRight: 16,
      margin: 4,
      fontWeight: 'bold',
    },
    buttonText_primary:{
      fontSize: 14,
      color: '#fff',
      textAlign: 'center',
    },

    buttonBox_primary_disabled: {
      backgroundColor:'#efefef',
    },
    buttonText_primary_disabled: {
      color:'#bbb',
    },

    buttonBox_flat: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 36,
      borderRadius: 2,
      backgroundColor: 'rgba(0,0,0,0)',
      paddingLeft: 16,
      paddingRight: 16,
      margin: 4,
      fontWeight: 'bold',
    },
    buttonText_flat: {
      fontSize: 14,
      color: '#333',
      textAlign: 'center',
    },

    buttonBox_flat_disabled: {
    },
    buttonText_flat_disabled: {
      color:'#bbb',
    },
  }),

  TInput: StyleSheet.create({
    inputStyle: {
      height: 40,
      borderColor: '#efefef',
      borderWidth: 1,
      marginTop: 4,
      marginBottom: 4,
      marginLeft: 12,
      marginRight: 12,
      borderRadius: 2,
      color: '#000',
      backgroundColor: '#efefef',
      paddingLeft: 8,
      paddingRight: 8,
      fontSize: 14,
    }
  })
};

