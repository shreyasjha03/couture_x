import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#FF6B8B', // Soft pink
        tabBarInactiveTintColor: '#FFB6C1', // Light pink
        tabBarStyle: {
          paddingBottom: 5,
          paddingTop: 5,
          backgroundColor: '#FFF0F5', // Lavender blush
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
        },
        headerStyle: {
          backgroundColor: '#FFF0F5',
        },
        headerTitleStyle: {
          color: '#FF6B8B',
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="wardrobe"
        options={{
          title: 'Wardrobe',
          tabBarIcon: ({ color }) => <FontAwesome name="shopping-bag" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <FontAwesome name="user" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
