'use strict';

const scales = {
  dark: require('./scales/dark'),
  nick: require('./scales/nick'),
}

class Scale {
  constructor() {
    this.defaultTheme = 'nick';
  }

  currentTheme() {
    return this.defaultTheme;
  }

  changeTheme(theme) {
    this.defaultTheme = theme;
  }

  /**
   * get theme style by current theme, return {} if not found
   * @param componentName
   * @returns {{}}
   */
  getStyle(componentName:string, styleName:string, defaultValue = {}) {
    let scale = scales[this.defaultTheme];

    if (scale) {
      let component = scale[componentName];
      return component[styleName] ? component[styleName] : defaultValue[styleName];
    } else {
      return defaultValue[styleName];
    }
  }
}

module.exports = {
  Scale: new Scale(),
  StyleSheet: require('./lib/StyleSheet'),
};
