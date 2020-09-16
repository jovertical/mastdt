import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import * as Font from 'expo-font'

import InterLightFont from '~/assets/fonts/Inter-Light.otf'
import InterRegularFont from '~/assets/fonts/Inter-Regular.otf'
import InterMediumFont from '~/assets/fonts/Inter-Medium.otf'
import InterSemiBoldFont from '~/assets/fonts/Inter-SemiBold.otf'
import SessionContext from '~/contexts/SessionContext'
import connect from '~/database'
import * as taskQueries from '~/queries/task'
import LoadingScreen from '~/screens/LoadingScreen'
import WelcomeScreen from '~/screens/WelcomeScreen'
import RegisterScreen from '~/screens/RegisterScreen'
import HomeScreen from '~/screens/HomeScreen'
import ScoreCardScreen from '~/screens/ScoreCardScreen'
import ReactionTimeTaskScreen from '~/screens/Tasks/ReactionTimeTaskScreen'
import DotCountingTaskScreen from '~/screens/Tasks/DotCountingTaskScreen'
import DotComparisonTaskScreen from '~/screens/Tasks/DotComparisonTaskScreen'

const Stack = createStackNavigator()

function App() {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'SET_BOOTSTRAPPED':
          return {
            ...prevState,
            bootstrapped: true,
          }

        case 'SET_SESSION':
          return {
            ...prevState,
            session: action.session,
          }
      }
    },
    {
      session: {},
      bootstrapped: false,
    },
  )

  function startSession(user) {
    dispatch({
      type: 'SET_SESSION',
      session: {
        startedAt: new Date().toISOString(),
        user,
      },
    })
  }

  async function preloadData() {
    try {
      const tasksLoaded = await taskQueries.tasksLoaded()

      if (!tasksLoaded) {
        await taskQueries.createInitialTasks()
      }
    } catch (error) {
      alert(JSON.stringify(error))
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
      try {
        await connect()
        await preloadData()
        await loadFonts()

        dispatch({ type: 'SET_BOOTSTRAPPED' })
      } catch (error) {
        alert(JSON.stringify(error))
      }
    }

    bootstrap()
  }, [])

  return (
    <NavigationContainer>
      <SessionContext.Provider
        value={{ ...state.session, start: startSession }}
      >
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {!state.bootstrapped ? (
            <Stack.Screen name="Loading" component={LoadingScreen} />
          ) : (
            <React.Fragment>
              <Stack.Screen name="Welcome" component={WelcomeScreen} />
              <Stack.Screen name="Register" component={RegisterScreen} />
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="ScoreCard" component={ScoreCardScreen} />
              <Stack.Screen
                name="ReactionTimeTask"
                component={ReactionTimeTaskScreen}
              />
              <Stack.Screen
                name="DotCountingTask"
                component={DotCountingTaskScreen}
              />
              <Stack.Screen
                name="DotComparisonTask"
                component={DotComparisonTaskScreen}
              />
            </React.Fragment>
          )}
        </Stack.Navigator>
      </SessionContext.Provider>
    </NavigationContainer>
  )
}

export default App
