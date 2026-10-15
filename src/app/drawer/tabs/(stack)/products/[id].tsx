import { products } from '@/store/products.store';
import { Redirect, Stack, useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

const ProductScreen = () => {
  const params = useLocalSearchParams();

  const { id } = params;

  const product = products.find((p) => p.id === id);
  if (!product) return <Redirect href={'/'} />;

  return (
    <View className="mt-5 px-5">
      <Stack.Screen
        options={{
          title: product.title,
          headerStyle: { backgroundColor: 'lightblue' },
        }}
      />

      <Text className="font-work-black text-2xl">{product.title}</Text>
      <Text className="text-lg mt-4">{product.description}</Text>
      <View className="flex flex-row justify-end">
        <Text className="text-lg text-secondary font-bold">
          <Text className="text-black">Precio: </Text>${product.price}
        </Text>
      </View>
    </View>
  );
};

export default ProductScreen;
