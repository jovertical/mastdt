import * as React from 'react'

/**
 * @return {{ time: Number, reset: Function }}
 */
export default function useTimer() {
  const [time, setTime] = React.useState(0)

  function handleReset() {
    setTime(0)
  }

  React.useEffect(() => {
    const timer = setInterval(() => {
      console.log('Yow')
    }, 10)

    return () => {
      clearInterval(timer)
    }
  })

  return { time, reset: handleReset }
}