import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput, Modal, Alert } from 'react-native';
import { useProfile } from '@/context/ProfileContext';
import { useWardrobe } from '@/context/WardrobeContext';
import { useState } from 'react';

export default function ProfileScreen() {
  const { profiles, currentProfile, login, logout, addProfile } = useProfile();
  const { getStats } = useWardrobe();
  const [modalVisible, setModalVisible] = useState(false);
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [selectedProfileId, setSelectedProfileId] = useState<string | null>(null);
  const [password, setPassword] = useState('');
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleAddProfile = () => {
    if (newName.trim() && newEmail.trim() && newPassword.trim()) {
      addProfile(newName.trim(), newEmail.trim(), newPassword.trim());
      setNewName('');
      setNewEmail('');
      setNewPassword('');
      setModalVisible(false);
    }
  };

  const handleLoginAttempt = () => {
    if (selectedProfileId && password) {
      const success = login(selectedProfileId, password);
      if (!success) {
        Alert.alert('Error', 'Incorrect password');
      }
      setPassword('');
      setLoginModalVisible(false);
    }
  };

  const handleProfileSelect = (profileId: string) => {
    setSelectedProfileId(profileId);
    setLoginModalVisible(true);
  };

  if (!currentProfile) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Choose a Profile</Text>
        <ScrollView contentContainerStyle={styles.profileList}>
          {profiles.map((profile) => (
            <TouchableOpacity
              key={profile.id}
              style={styles.profileCard}
              onPress={() => handleProfileSelect(profile.id)}
            >
              <Image source={profile.avatar} style={styles.avatar} />
              <View style={styles.profileInfo}>
                <Text style={styles.name}>{profile.name}</Text>
                <Text style={styles.email}>{profile.email}</Text>
              </View>
            </TouchableOpacity>
          ))}
          
          <TouchableOpacity
            style={styles.addProfileButton}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.addProfileText}>+ Add New Profile</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Login Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={loginModalVisible}
          onRequestClose={() => {
            setLoginModalVisible(false);
            setPassword('');
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Enter Password</Text>
              
              <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                placeholderTextColor="#999"
                secureTextEntry
              />
              
              <View style={styles.modalButtons}>
                <TouchableOpacity
                  style={[styles.modalButton, styles.cancelButton]}
                  onPress={() => {
                    setLoginModalVisible(false);
                    setPassword('');
                  }}
                >
                  <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                  style={[styles.modalButton, styles.addButton]}
                  onPress={handleLoginAttempt}
                >
                  <Text style={styles.addButtonText}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        {/* Add Profile Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Add New Profile</Text>
              
              <TextInput
                style={styles.input}
                placeholder="Name"
                value={newName}
                onChangeText={setNewName}
                placeholderTextColor="#999"
              />
              
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={newEmail}
                onChangeText={setNewEmail}
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="none"
              />

              <TextInput
                style={styles.input}
                placeholder="Password"
                value={newPassword}
                onChangeText={setNewPassword}
                placeholderTextColor="#999"
                secureTextEntry
              />
              
              <View style={styles.modalButtons}>
                <TouchableOpacity
                  style={[styles.modalButton, styles.cancelButton]}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                  style={[styles.modalButton, styles.addButton]}
                  onPress={handleAddProfile}
                >
                  <Text style={styles.addButtonText}>Add Profile</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }

  const stats = getStats();
  
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image source={currentProfile.avatar} style={styles.largeAvatar} />
        <Text style={styles.largeName}>{currentProfile.name}</Text>
        <Text style={styles.email}>{currentProfile.email}</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{stats.itemCount}</Text>
          <Text style={styles.statLabel}>Items</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{stats.likedCount}</Text>
          <Text style={styles.statLabel}>Liked</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{stats.listCount}</Text>
          <Text style={styles.statLabel}>Lists</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={logout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
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
  profileList: {
    paddingBottom: 20,
  },
  profileCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 12,
    marginBottom: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  profileInfo: {
    marginLeft: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF6B8B',
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: '#FFB6C1',
  },
  addProfileButton: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 16,
    alignItems: 'center',
    marginTop: 12,
    borderWidth: 2,
    borderColor: '#FF6B8B',
    borderStyle: 'dashed',
  },
  addProfileText: {
    color: '#FF6B8B',
    fontSize: 16,
    fontWeight: '600',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    width: '85%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF6B8B',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#FFF0F5',
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  modalButton: {
    flex: 1,
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  cancelButton: {
    backgroundColor: '#FFE4E8',
  },
  addButton: {
    backgroundColor: '#FF6B8B',
  },
  cancelButtonText: {
    color: '#FF6B8B',
    fontSize: 16,
    fontWeight: '600',
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 30,
  },
  largeAvatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  largeName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF6B8B',
    marginBottom: 8,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF6B8B',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#FFB6C1',
  },
  logoutButton: {
    backgroundColor: '#FFE4E8',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  logoutText: {
    color: '#FF6B8B',
    fontSize: 16,
    fontWeight: '600',
  },
}); 