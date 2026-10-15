import { Text, View } from 'react-native';

const HomeScreen = () => {
  return (
    <View className="flex flex-1 justify-center flex-col">
      <Text className="text-center text-3xl mb-2 text-green-800 font-bold">Tabs</Text>
      <Text className="text-center text-4xl font-work-black text-primary">Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
