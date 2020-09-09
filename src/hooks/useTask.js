import * as React from 'react'
import useTimer from '~/hooks/useTimer'
import * as taskActivityQueries from '~/queries/taskActivity'

export default function useTask({ items, screenProps }) {
  const clock = useTimer()
  const [entries, setEntries] = React.useState([])
  const [currentItem, setCurrentItem] = React.useState(items[0])
  const [completed, setCompleted] = React.useState(false)
  const { route, navigation } = screenProps

  function answer(data = {}) {
    setEntries((prevEntries) =>
      prevEntries.concat({
        time: clock.time,
        ...data,
      }),
    )

    clock.reset()
  }

  async function complete() {
    await taskActivityQueries.completeTask(route.params.activity, { entries })
    await taskActivityQueries.unlockTask(route.params.nextActivity)

    navigation.navigate('ScoreCard')
  }

  React.useEffect(() => {
    if (!completed) {
      return
    }

    complete()
  }, [completed])

  React.useEffect(() => {
    if (entries.length === items.length) {
      return setCompleted(true)
    }

    if (entries.length > 0) {
      setCurrentItem(items[entries.length])
    }

    clock.start()
  }, [entries])

  return {
    currentItem,
    completed,
    answer,
  }
}
