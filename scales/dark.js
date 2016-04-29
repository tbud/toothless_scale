'use strict';

import StyleSheet from '../lib/StyleSheet';

module.exports = {

  TView: StyleSheet.create({
    normal: {
      backgroundColor: '#000',
      margin: 0,
      padding: 0
    },
  }),

  TText: StyleSheet.create({
    normal: {
      fontSize: 14,
      color: '#77777F',
    },
  }),

  TButton: StyleSheet.create({
    buttonBox_default: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 36,
      borderRadius: 2,
      backgroundColor: '#2D4466',
      paddingLeft: 16,
      paddingRight: 16,
      margin: 4,
      fontWeight: 'bold',
    },
    buttonText_default: {
      fontSize: 14,
      color: '#8DACC1',
      textAlign: 'center',
    },

    buttonBox_default_disabled: {
      backgroundColor:'#31353D',
    },
    buttonText_default_disabled: {
      color:'#666',
    },

    buttonBox_primary:{
      alignItems: 'center',
      justifyContent: 'center',
      height: 36,
      borderRadius: 2,
      backgroundColor: '#17A8F9',
      paddingLeft: 16,
      paddingRight: 16,
      margin: 4,
      fontWeight: 'bold',
    },
    buttonText_primary:{
      fontSize: 14,
      color: '#000',
      textAlign: 'center',
    },

    buttonBox_primary_disabled: {
      backgroundColor:'#31353D',
    },
    buttonText_primary_disabled: {
      color:'#666',
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
      color: '#8DACC1',
      textAlign: 'center',
    },

    buttonBox_flat_disabled: {
    },
    buttonText_flat_disabled: {
      color:'#666',
    },
  }),

  TInput: StyleSheet.create({
    inputBox: {
      height: 40,
      borderColor: '#242424',
      borderWidth: 1,
      marginTop: 4,
      marginBottom: 4,
      marginLeft: 12,
      marginRight: 12,
      borderRadius: 2,
      backgroundColor: '#242424',
      borderStyle: 'solid',
    },
    inputText: {
      height: 40,
      color: '#949494',
      fontSize: 14,
      flex:1,
      paddingLeft: 8,
      paddingRight: 8,
    },

    inputBox_singleline: {
      height: 40,
      borderColor: '#000',
      borderBottomWidth: 1,
      borderTopWidth: 0,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      marginTop: 4,
      marginBottom: 4,
      marginLeft: 12,
      marginRight: 12,
      borderRadius: 0,
      backgroundColor: '#000',
      borderStyle: 'solid',
    },
    inputText_singleline: {
      height: 40,
      color: '#949494',
      fontSize: 14,
      flex:1,
    },

    inputBox_disabled: {
      borderColor: '#000',
      backgroundColor: '#000',
    },
    inputText_disabled: {
      color: '#666',
    },

    inputBox_error: {
      borderColor: '#ff0040',
    }



    //Todo add state style
  })
};

