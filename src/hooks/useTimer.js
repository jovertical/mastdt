import * as React from 'react'

/**
 * @return {returnType}
 */
export default function useTimer() {
  const [running, setRunning] = React.useState(false)
  const [time, setTime] = React.useState(0)

  function stop() {
    setRunning(false)
  }

  function start() {
    setRunning(true)
  }

  function reset() {
    setTime(0)
  }

  React.useEffect(() => {
    if (!running) {
      return
    }

    const interval = setInterval(() => {
      setTime(prevTime => prevTime + 0.1)
    }, 100)

    return () => {
      clearInterval(interval)
    }
  }, [running])

  return {
    running,
    start,
    stop,
    time,
    reset
  }
}

const returnType = {
  running: Boolean,
  stop: Function,
  start: Function,
  time: Number,
  reset: Function
}