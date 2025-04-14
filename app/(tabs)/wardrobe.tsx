import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Dimensions, Modal } from 'react-native';
import { useWardrobe } from '@/context/WardrobeContext';
import { useState } from 'react';
import { ApparelItem } from '@/constants/apparelData';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = (width - 48) / 2;

export default function WardrobeScreen() {
  const { wardrobeItems, removeFromWardrobe } = useWardrobe();
  const [selectedItem, setSelectedItem] = useState<ApparelItem | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleItemPress = (item: ApparelItem) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const renderItem = ({ item }: { item: ApparelItem }) => (
    <TouchableOpacity 
      style={styles.itemContainer}
      onPress={() => handleItemPress(item)}
    >
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemCategory}>{item.category}</Text>
      </View>
    </TouchableOpacity>
  );

  if (wardrobeItems.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Your wardrobe is empty</Text>
        <Text style={styles.emptySubText}>Swipe right on items to add them here</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={wardrobeItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.listContent}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {selectedItem && (
              <>
                <Image 
                  source={{ uri: selectedItem.image }} 
                  style={styles.modalImage} 
                />
                <View style={styles.modalInfo}>
                  <Text style={styles.modalTitle}>{selectedItem.name}</Text>
                  <Text style={styles.modalCategory}>{selectedItem.category}</Text>
                  <Text style={styles.modalDescription}>{selectedItem.description}</Text>
                  
                  <View style={styles.detailsContainer}>
                    <View style={styles.detailRow}>
                      <Text style={styles.detailLabel}>Price:</Text>
                      <Text style={styles.detailValue}>${selectedItem.price || '99.99'}</Text>
                    </View>
                    <View style={styles.detailRow}>
                      <Text style={styles.detailLabel}>Available at:</Text>
                      <Text style={styles.detailValue}>{selectedItem.store || 'Fashion Store'}</Text>
                    </View>
                    <View style={styles.detailRow}>
                      <Text style={styles.detailLabel}>Size:</Text>
                      <Text style={styles.detailValue}>{selectedItem.size || 'S, M, L'}</Text>
                    </View>
                    <View style={styles.detailRow}>
                      <Text style={styles.detailLabel}>Color:</Text>
                      <Text style={styles.detailValue}>{selectedItem.color || 'Multiple'}</Text>
                    </View>
                  </View>

                  <View style={styles.modalButtons}>
                    <TouchableOpacity
                      style={[styles.modalButton, styles.removeButton]}
                      onPress={() => {
                        removeFromWardrobe(selectedItem.id);
                        setModalVisible(false);
                      }}
                    >
                      <Text style={styles.removeButtonText}>Remove from Wardrobe</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[styles.modalButton, styles.closeButton]}
                      onPress={() => setModalVisible(false)}
                    >
                      <Text style={styles.closeButtonText}>Close</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF0F5',
  },
  listContent: {
    padding: 16,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  itemContainer: {
    width: ITEM_WIDTH,
    backgroundColor: 'white',
    borderRadius: 15,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemImage: {
    width: '100%',
    height: ITEM_WIDTH * 1.2,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  itemInfo: {
    padding: 12,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FF6B8B',
    marginBottom: 4,
  },
  itemCategory: {
    fontSize: 14,
    color: '#FFB6C1',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF0F5',
    padding: 20,
  },
  emptyText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF6B8B',
    marginBottom: 8,
  },
  emptySubText: {
    fontSize: 16,
    color: '#FFB6C1',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    maxHeight: '90%',
  },
  modalImage: {
    width: '100%',
    height: 300,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  modalInfo: {
    padding: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF6B8B',
    marginBottom: 8,
  },
  modalCategory: {
    fontSize: 18,
    color: '#FFB6C1',
    marginBottom: 12,
  },
  modalDescription: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 20,
  },
  detailsContainer: {
    backgroundColor: '#FFF0F5',
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  detailLabel: {
    fontSize: 16,
    color: '#FF6B8B',
    fontWeight: '600',
  },
  detailValue: {
    fontSize: 16,
    color: '#666',
  },
  modalButtons: {
    gap: 10,
  },
  modalButton: {
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  removeButton: {
    backgroundColor: '#FFE4E8',
  },
  closeButton: {
    backgroundColor: '#FF6B8B',
  },
  removeButtonText: {
    color: '#FF6B8B',
    fontSize: 16,
    fontWeight: '600',
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
}); 