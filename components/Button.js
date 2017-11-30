import React, { Component } from 'react';
import {
  TouchableOpacity,
  Platform,
} from 'react-native';

import { connectStyle } from '@shoutem/theme';
import { connectAnimation } from '@shoutem/animation';

class Button extends Component {
  render() {
    // The underlayColor is not a valid RN style
    // property, so we have to unset it here.
    const style = {
      ...this.props.style,
    };
    delete style.underlayColor;

    if (Platform.OS === 'android'){
      <TouchableNativeFeedback
        {...this.props}
        style={style}
      />
    } else {
      return (
        <TouchableOpacity
          {...this.props}
          style={style}
          underlayColor={this.props.style.underlayColor}
        />
      );
    } else 
  }
}

Button.propTypes = {
  ...TouchableOpacity.propTypes,
};

const AnimatedButton = connectAnimation(Button);
const StyledButton = connectStyle('shoutem.ui.Button')(AnimatedButton);
export {
  StyledButton as Button,
};
