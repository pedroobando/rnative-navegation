import { CustomButton } from '@/components';
import { router } from 'expo-router';
import { View } from 'react-native';

const HomeScreen = () => {
  return (
    <View className="mt-5 mx-2 flex flex-col gap-4">
      <CustomButton variant="primary" onPress={() => router.push('/tabs/(stack)/products')}>
        Productos
      </CustomButton>
      <CustomButton variant="secondary" onPress={() => router.push('/tabs/(stack)/profile')}>
        Profile
      </CustomButton>
      <CustomButton variant="tertiary" onPress={() => router.push('/tabs/(stack)/settings')}>
        Ajustes
      </CustomButton>
      <CustomButton
        variant="secondary"
        textOnly
        onPress={() => router.push('/tabs/(stack)/products')}
      >
        Productos
      </CustomButton>

      {/* <Link href={'/products'} className="text-lg text-blue-500 font-work-black">
          Products
        </Link>
        <Link href={'/profile'} className="text-lg text-blue-500 font-work-black">
          Profile
        </Link>
        <Link href={'/settings'} className="text-lg text-blue-500 font-work-black">
          Settings
        </Link> */}
    </View>
  );
};

export default HomeScreen;
