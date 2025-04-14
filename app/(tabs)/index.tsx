import { View, Text, StyleSheet, Image, Dimensions, Alert } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { getApparelItems } from '@/constants/apparelData';
import { useState, useRef } from 'react';
import { useWardrobe } from '@/context/WardrobeContext';
import { useProfile } from '@/context/ProfileContext';
import { useRouter } from 'expo-router';

const SCREEN_HEIGHT = Dimensions.get('window').height;

export default function HomeScreen() {
  const { addToWardrobe, addToLiked, addToDisliked } = useWardrobe();
  const { currentProfile } = useProfile();
  const router = useRouter();
  const [swipedItems, setSwipedItems] = useState<string[]>([]);
  const [currentItems, setCurrentItems] = useState(getApparelItems(6));
  const swiperRef = useRef<any>(null);

  const promptLogin = () => {
    Alert.alert(
      'Login Required',
      'Please login to save items to your wardrobe',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Login',
          onPress: () => router.push('/(tabs)/profile')
        }
      ]
    );
    // Reset card position
    swiperRef.current?.swipeBack();
  };

  const handleSwipedRight = (index: number) => {
    if (!currentProfile) {
      promptLogin();
      return;
    }

    const swipedItem = currentItems[index];
    addToWardrobe(swipedItem);
    addToLiked(swipedItem);
    
    // Load more items if needed
    if (index === currentItems.length - 2) {
      loadMoreItems();
    }
  };

  const handleSwipedLeft = (index: number) => {
    if (!currentProfile) {
      promptLogin();
      return;
    }

    const swipedItem = currentItems[index];
    addToDisliked(swipedItem);
    
    // Load more items if needed
    if (index === currentItems.length - 2) {
      loadMoreItems();
    }
  };

  const loadMoreItems = () => {
    const newItems = getApparelItems(currentItems.length + 6);
    setCurrentItems(newItems);
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
          onSwipedLeft={handleSwipedLeft}
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
