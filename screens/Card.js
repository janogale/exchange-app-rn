import React from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from 'react-native';

const Card = (props) => {
  const {children, elevation, opacity, cornerRadius} = props;

  const cardStyle = Platform.select({
    ios: () =>
      StyleSheet.create({
        container: {
          shadowRadius: elevation,
          shadowColor: '#757575',
          shadowOpacity: opacity,
          shadowOffset: {width: 0, height: elevation},
          borderRadius: cornerRadius,
          backgroundColor: props.backgroundColor,
          width: Dimensions.get('window').width - 100,
        },
      }),
    android: () =>
      StyleSheet.create({
        container: {
          elevation: elevation,
          borderRadius: cornerRadius,
          backgroundColor: props.backgroundColor,
          width: Dimensions.get('window').width - 40,
        },
      }),
  })();

  return <View style={[cardStyle.container, props.style]}>{children}</View>;
};

Card.defaultProps = {
  backgroundColor: '#ffffff',
  elevation: 10,
  cornerRadius: 10,
  opacity: 0.8,
};

export default Card;
