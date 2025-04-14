import { View, Text, StyleSheet, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native';
import { useWardrobe } from '@/context/WardrobeContext';
import { ApparelItem } from '@/constants/apparelData';

const SCREEN_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = SCREEN_WIDTH / 2 - 24;

export default function WardrobeScreen() {
  const { wardrobeItems, removeFromWardrobe } = useWardrobe();

  const renderItem = ({ item }: { item: ApparelItem }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.itemContent}>
        <Text style={styles.itemTitle}>{item.name}</Text>
        <Text style={styles.itemCategory}>{item.category}</Text>
        <TouchableOpacity 
          onPress={() => removeFromWardrobe(item.id)}
          style={styles.removeButton}
        >
          <Text style={styles.removeButtonText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Wardrobe</Text>
      {wardrobeItems.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Your wardrobe is empty</Text>
          <Text style={styles.emptySubtext}>Swipe right on items to add them here</Text>
        </View>
      ) : (
        <FlatList
          data={wardrobeItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF0F5',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF6B8B',
    marginBottom: 20,
    textAlign: 'center',
  },
  listContainer: {
    paddingBottom: 20,
  },
  itemContainer: {
    width: ITEM_WIDTH,
    backgroundColor: 'white',
    borderRadius: 15,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemImage: {
    width: '100%',
    height: ITEM_WIDTH * 1.3,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  itemContent: {
    padding: 10,
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FF6B8B',
    marginBottom: 4,
  },
  itemCategory: {
    fontSize: 12,
    color: '#FFB6C1',
    marginBottom: 8,
  },
  removeButton: {
    backgroundColor: '#FFE4E8',
    padding: 6,
    borderRadius: 8,
    alignItems: 'center',
  },
  removeButtonText: {
    color: '#FF6B8B',
    fontSize: 12,
    fontWeight: '500',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#FF6B8B',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#FFB6C1',
    textAlign: 'center',
  },
}); 