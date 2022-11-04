import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './src/components/Sign-in';
import Signup from './src/components/Sign-up';
import Home from './src/components/Home';
import Profile from './src/components/User-Profile';
import Contact from './src/components/Contact';
import Team from './src/components/Our-Team';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Sign In"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#FA7D50',
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen name="Sign In" component={SignIn}  />
        <Stack.Screen name="Sign Up" component={Signup} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Team" component={Team} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

