import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import 'reflect-metadata';
import InterLightFont from '@assets/fonts/Inter-Light.otf';
import InterRegularFont from '@assets/fonts/Inter-Regular.otf';
import InterMediumFont from '@assets/fonts/Inter-Medium.otf';
import InterSemiBoldFont from '@assets/fonts/Inter-SemiBold.otf';
import TaskContext from '@contexts/TaskContext';
import HomeScreen from '@screens/HomeScreen';
import LoadingScreen from '@screens/LoadingScreen';
import RegisterScreen from '@screens/RegisterScreen';
import WelcomeScreen from '@screens/WelcomeScreen';

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
    const loadFonts = async () => {
      await Font.loadAsync({
        'inter-light': InterLightFont,
        'inter-regular': InterRegularFont,
        'inter-medium': InterMediumFont,
        'inter-semibold': InterSemiBoldFont,
      })

      dispatch({ type: 'SET_FONT_LOADED' })
    }

    loadFonts();
  }, [])

  return (
    <NavigationContainer>
      <TaskContext.Provider>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {state.loading || !state.fontLoaded ? (
            <Stack.Screen name="Loading" component={LoadingScreen} />
          ) : (
              <React.Fragment>
                {/* <Stack.Screen name="Welcome" component={WelcomeScreen} /> */}
                {/* <Stack.Screen name="Register" component={RegisterScreen} /> */}
                <Stack.Screen name="Home" component={HomeScreen} />
              </React.Fragment>
            )}
        </Stack.Navigator>
      </TaskContext.Provider>
    </NavigationContainer >
  );
}

export default App;