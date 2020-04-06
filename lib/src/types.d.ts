import { Animated } from 'react-native';
export declare type Collapsible = {
    onScroll: Function;
    containerPaddingTop: number;
    scrollIndicatorInsetTop: number;
    translateY: Animated.AnimatedInterpolation;
    progress: Animated.AnimatedInterpolation;
    opacity: Animated.AnimatedInterpolation;
};
export declare type CollapsibleStackConfig = {
    collapsedColor?: string;
    elevation?: number;
};
