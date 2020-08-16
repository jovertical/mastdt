import * as React from 'react'
import { BackHandler } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import * as Font from 'expo-font'
import * as Permissions from 'expo-permissions'
import 'reflect-metadata'

import InterLightFont from '@assets/fonts/Inter-Light.otf'
import InterRegularFont from '@assets/fonts/Inter-Regular.otf'
import InterMediumFont from '@assets/fonts/Inter-Medium.otf'
import InterSemiBoldFont from '@assets/fonts/Inter-SemiBold.otf'
import TaskContext from '@contexts/TaskContext'
import seeder from '@database/seeds'
import LoadingScreen from '@screens/LoadingScreen'
import WelcomeScreen from '@screens/WelcomeScreen'
import RegisterScreen from '@screens/RegisterScreen'
import HomeScreen from '@screens/HomeScreen'
import ReactionTimeTaskScreen from '@screens/Tasks/ReactionTimeTaskScreen'

const Stack = createStackNavigator()

function App() {
  const [state, dispatch] = React.useReducer((prevState, action) => {
    switch (action.type) {
      case 'SET_BOOTSTRAPPED':
        return {
          ...prevState,
          bootstrapped: true
        }
    }
  }, {
    bootstrapped: false,
    loading: false,
  })

  async function askPermissions() {
    const { status } = await Permissions.askAsync(Permissions.CALENDAR)

    if (status !== 'granted') {
      return BackHandler.exitApp()
    }

    return seeder.run()
  }

  async function checkPermissions() {
    const { status } = await Permissions.getAsync(
      Permissions.CALENDAR,
    )

    if (status !== 'granted') {
      askPermissions()
    }
  }

  function loadFonts() {
    return Font.loadAsync({
      'inter-light': InterLightFont,
      'inter-regular': InterRegularFont,
      'inter-medium': InterMediumFont,
      'inter-semibold': InterSemiBoldFont,
    })
  }

  React.useEffect(() => {
    const bootstrap = async () => {
      await checkPermissions()
      await loadFonts()

      dispatch({ type: 'SET_BOOTSTRAPPED' })
    }

    bootstrap()
  }, [])

  return (
    <NavigationContainer>
      <TaskContext.Provider>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {state.loading || !state.bootstrapped ? (
            <Stack.Screen name="Loading" component={LoadingScreen} />
          ) : (
              <React.Fragment>
                {/* <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} /> */}
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="ReactionTimeTask" component={ReactionTimeTaskScreen} />
              </React.Fragment>
            )}
        </Stack.Navigator>
      </TaskContext.Provider>
    </NavigationContainer >
  )
}

export default App