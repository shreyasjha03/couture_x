import { View, Text, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Profile</Text>
      <Text style={styles.subtitle}>Personalize your experience</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF0F5', // Lavender blush background
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FF6B8B', // Soft pink
  },
  subtitle: {
    fontSize: 16,
    color: '#FFB6C1', // Light pink
  },
}); 