import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'react-native'
import HomeScreen from './screens/HomeScreen'
import PostScreen from './screens/PostScreen'



export type StackParams = {
  home: undefined,
  post: { id: string, title: string }
}

export default function App() {
  const Stack = createNativeStackNavigator<StackParams>()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{ title: 'Афиша' }}
        />
        <Stack.Screen
          name="post"
          component={PostScreen}
          options={{ title: 'Кино' }}
        />
      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
  )
}
