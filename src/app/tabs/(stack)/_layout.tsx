import { Stack } from 'expo-router';

const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        // headerShown: false,
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: 'white',
        },
      }}
    >
      <Stack.Screen name={'home'} options={{ title: 'Inicio' }} />
      <Stack.Screen
        name={'products/index'}
        options={{ title: 'Productos', animation: 'ios_from_right' }}
      />
      <Stack.Screen name={'profile/index'} options={{ title: 'Perfiles de Usuario' }} />
      <Stack.Screen name={'settings/index'} options={{ title: 'Ajustes de Pantalla' }} />
      {/* <Stack.Screen
        name={'products/[id]'}
        options={{ title: 'Detalle Producto', animation: 'ios_from_right' }}
      /> */}
    </Stack>
  );
};

export default StackLayout;
