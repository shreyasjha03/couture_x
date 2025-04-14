import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { getApparelItems } from '@/constants/apparelData';
import { useState, useRef } from 'react';
import { useWardrobe } from '@/context/WardrobeContext';

const SCREEN_HEIGHT = Dimensions.get('window').height;

export default function HomeScreen() {
  const [swipedItems, setSwipedItems] = useState<string[]>([]);
  const [currentItems, setCurrentItems] = useState(getApparelItems(6));
  const swiperRef = useRef<any>(null);
  const { addToWardrobe } = useWardrobe();

  const handleSwipedRight = (index: number) => {
    const item = currentItems[index];
    setSwipedItems([...swipedItems, item.id]);
    addToWardrobe(item);
    console.log('Added to wardrobe:', item.name);
    
    // If we're near the end of the current items, load more
    if (index >= currentItems.length - 3) {
      const newItems = getApparelItems(currentItems.length + 6);
      setCurrentItems(newItems);
    }
  };

  const renderCard = (item: typeof currentItems[0]) => {
    return (
      <View style={styles.card}>
        <Image 
          source={{ uri: item.image }} 
          style={styles.cardImage}
          resizeMode="cover"
        />
        <View style={styles.cardContent}>
          <View style={styles.textContainer}>
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.cardCategory}>{item.category}</Text>
            <Text numberOfLines={2} style={styles.cardDescription}>{item.description}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}></Text> */}
      <View style={styles.swiperContainer}>
        <Swiper
          ref={swiperRef}
          cards={currentItems}
          renderCard={renderCard}
          onSwipedRight={handleSwipedRight}
          onSwipedLeft={(index) => console.log('Skipped:', currentItems[index].name)}
          backgroundColor={'#FFF0F5'}
          stackSize={3}
          stackSeparation={15}
          animateOverlayLabelsOpacity
          animateCardOpacity
          swipeBackCard
          verticalSwipe={false}
          cardVerticalMargin={35}
          cardHorizontalMargin={10}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF0F5',
  },
  swiperContainer: {
    flex: 1,
  },
  card: {
    height: SCREEN_HEIGHT * 0.72,
    borderRadius: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardImage: {
    width: '100%',
    height: '85%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  cardContent: {
    padding: 12,
    height: '15%',
    justifyContent: 'center',
  },
  textContainer: {
    gap: 3,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF6B8B',
  },
  cardCategory: {
    fontSize: 13,
    color: '#FFB6C1',
  },
  cardDescription: {
    fontSize: 11,
    color: '#666',
    marginTop: 1,
  },
});
