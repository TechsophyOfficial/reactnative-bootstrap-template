import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  FlatList,
  Dimensions,
  Animated,
  StyleProp,
  ViewStyle,
} from 'react-native';

const {width: screenWidth} = Dimensions.get('window');

// Define types for the props
interface CustomCarouselProps<T> {
  data: T[];
  renderItem: ({item, index}: {item: T; index: number}) => JSX.Element;
  itemWidth?: number;
  inactiveSlideScale?: number;
  inactiveSlideOpacity?: number;
  containerCustomStyle?: StyleProp<ViewStyle>;
  loop?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const CustomCarousel = <T,>({
  data,
  renderItem,
  itemWidth = screenWidth, // Default item width to full screen width
  inactiveSlideScale = 1,
  inactiveSlideOpacity = 1,
  containerCustomStyle = {},
  loop = true,
  autoPlay = true,
  autoPlayInterval = 3000,
}: CustomCarouselProps<T>) => {
  const flatListRef = useRef<FlatList<T>>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Calculate scroll position for animation or loop
  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: Array<{index: number}>}) => {
      if (viewableItems.length > 0) {
        const newIndex = viewableItems[0].index!;
        setCurrentIndex(newIndex);
      }
    }
  ).current;

  const viewConfig = useRef({
    viewAreaCoveragePercentThreshold: 50,
  }).current;

  // Handle auto-loop
  const scrollToNext = () => {
    if (loop) {
      const nextIndex = currentIndex === data.length - 1 ? 0 : currentIndex + 1;
      flatListRef.current?.scrollToIndex({index: nextIndex, animated: true});
    }
  };

  // Auto-play effect
  useEffect(() => {
    if (autoPlay) {
      const autoPlayTimer = setInterval(scrollToNext, autoPlayInterval);
      return () => clearInterval(autoPlayTimer);
    }
  }, [currentIndex]);

  return (
    <View
      style={[{width: screenWidth, height: itemWidth}, containerCustomStyle]}>
      <FlatList
        ref={flatListRef}
        data={data}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item, index}) => (
          <Animated.View
            style={{
              width: itemWidth,
              transform: [
                {scale: index === currentIndex ? 1 : inactiveSlideScale},
              ],
              opacity: index === currentIndex ? 1 : inactiveSlideOpacity,
            }}>
            {renderItem({item, index})}
          </Animated.View>
        )}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewConfig}
      />
    </View>
  );
};

export default CustomCarousel;
