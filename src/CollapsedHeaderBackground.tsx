import * as React from 'react';
import { Animated, View } from 'react-native';

const CollapsedHeaderBackground = ({
  translateY,
  opacity,
  backgroundColor,
  collapsedColor,
  elevation
}) => () => (
  <Animated.View style={{ flex: 1, transform: [{ translateY }] }}>
    <View
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: collapsedColor || backgroundColor,
      }}
    />
    <Animated.View
      style={{
        backgroundColor,
        flex: 1,
        opacity,
        elevation: elevation
      }}
    />
  </Animated.View>
);

export { CollapsedHeaderBackground };
