import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'purple' }}>
      <Tabs.Screen
        name={'home'}
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="home-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="favorites/index"
        options={{
          title: 'Favoritos',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="star-outline" color={color} />,
        }}
      />

      <Tabs.Screen
        name="(stack)"
        options={{
          title: 'Stack',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="settings-outline" color={color} />,
        }}
      />
    </Tabs>
  );
}
