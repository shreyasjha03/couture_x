import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { apparelItems } from '@/constants/apparelData';
import { useState } from 'react';

export default function HomeScreen() {
  const [swipedItems, setSwipedItems] = useState<string[]>([]);

  const handleSwipedRight = (index: number) => {
    const swipedItem = apparelItems[index];
    setSwipedItems([...swipedItems, swipedItem.id]);
    // Here you would typically save the item to the wardrobe
    console.log('Added to wardrobe:', swipedItem.name);
  };

  const renderCard = (item: typeof apparelItems[0]) => {
    return (
      <View style={styles.card}>
        <Image source={item.image} style={styles.cardImage} />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{item.name}</Text>
          <Text style={styles.cardCategory}>{item.category}</Text>
          <Text style={styles.cardDescription}>{item.description}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Discover New Styles</Text>
      <View style={styles.swiperContainer}>
        <Swiper
          cards={apparelItems}
          renderCard={renderCard}
          onSwipedRight={handleSwipedRight}
          onSwipedLeft={(index) => console.log('Skipped:', apparelItems[index].name)}
          backgroundColor={'#FFF0F5'}
          stackSize={3}
          stackSeparation={15}
          animateOverlayLabelsOpacity
          animateCardOpacity
          swipeBackCard
          verticalSwipe={false}
          cardVerticalMargin={80}
          cardHorizontalMargin={20}
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF6B8B',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  swiperContainer: {
    flex: 1,
    marginTop: 20,
  },
  card: {
    flex: 1,
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
    marginHorizontal: 20,
    marginVertical: 10,
  },
  cardImage: {
    width: '100%',
    height: '70%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  cardContent: {
    padding: 15,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF6B8B',
    marginBottom: 5,
  },
  cardCategory: {
    fontSize: 16,
    color: '#FFB6C1',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
  },
});
