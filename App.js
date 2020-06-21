import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import InterLightFont from '@assets/fonts/Inter-Light.otf';
import InterRegularFont from '@assets/fonts/Inter-Regular.otf';
import InterSemiBoldFont from '@assets/fonts/Inter-SemiBold.otf';
import HomeScreen from '@screens/HomeScreen';
import LoadingScreen from '@screens/LoadingScreen';
import RegisterScreen from '@screens/RegisterScreen';

const Stack = createStackNavigator();

function App() {
  const [state, dispatch] = React.useReducer((prevState, action) => {
    switch (action.type) {
      case 'SET_FONT_LOADED':
        return {
          ...prevState,
          fontLoaded: true
        }
    }
  }, {
    fontLoaded: false,
    loading: false,
  })

  React.useEffect(() => {
    const bootstrap = async () => {
      await Font.loadAsync({
        'inter-light': InterLightFont,
        'inter-regular': InterRegularFont,
        'inter-semibold': InterSemiBoldFont,
      })

      dispatch({ type: 'SET_FONT_LOADED' })
    }

    bootstrap();
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {state.loading || !state.fontLoaded ? (
          <Stack.Screen name="Loading" component={LoadingScreen} />
        ) : (
            <React.Fragment>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Register" component={RegisterScreen} />
            </React.Fragment>
          )}
      </Stack.Navigator>
    </NavigationContainer >
  );
}

export default App;