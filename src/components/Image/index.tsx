import React, {useEffect} from 'react';
import {useState} from 'react';
import {useTheme} from 'react-native-paper';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import {Props} from './types';
import styles from './styles';

// @ts-ignore
const AnimatedFastImage = Animated.createAnimatedComponent(FastImage);

export default React.forwardRef<ShimmerPlaceHolder, Props>(function (
  {source, aspectRatio},
  ref,
) {
  const {colors} = useTheme();

  const opacity = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  const [isLoaded, setIsLoaded] = useState(false);

  function onLoadStart() {
    setIsLoaded(false);
  }

  function onLoadEnd() {
    setIsLoaded(true);
  }

  function onError() {
    setIsLoaded(true);
  }

  useEffect(() => {
    opacity.value = withTiming(isLoaded ? 1 : 0, {
      duration: 500,
    });
  }, [isLoaded]);

  return (
    <AnimatedFastImage
      source={source}
      style={[animatedStyle, {aspectRatio}]}
      onLoadStart={onLoadStart}
      onLoadEnd={onLoadEnd}
      onError={onError}>
      <ShimmerPlaceHolder
        ref={ref}
        LinearGradient={LinearGradient}
        duration={1500}
        style={styles.shimmer}
        shimmerColors={colors.imageShimmer}
        visible={isLoaded}
      />
    </AnimatedFastImage>
  );
});
