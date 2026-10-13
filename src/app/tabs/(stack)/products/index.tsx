import { products } from '@/store/products.store';
import { Link } from 'expo-router';
import { FlatList, Text, View } from 'react-native';

const ProductScreen = () => {
  return (
    <View className="flex flex-1 px-4 mb-10">
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="mt-10">
            <Text className="font-work-black text-2xl">{item.title}</Text>
            <Text className="font-work-medium mt-1 items-justify">{item.description}</Text>
            <View className="flex flex-row justify-between mt-2">
              <Text className="text-secondary font-work-medium text-lg">{item.price}</Text>
              <Link
                href={`/tabs/(stack)/products/${item.id}`}
                className="text-tertiary font-work-light text-lg"
              >
                Ver detalles
              </Link>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ProductScreen;
