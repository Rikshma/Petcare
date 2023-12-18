import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import ServiceScreen from './ServiceScreen';
import SignUpScreen from './SignUpScreen';
const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ServiceScreen" component={ServiceScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />

    </Stack.Navigator>
  );
}

export default AppNavigator;
