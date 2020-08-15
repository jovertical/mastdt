import * as React from 'react'

/**
 * @return {output}
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
    // 
  }, [running])

  return {
    running,
    start,
    stop,
    time,
    reset
  }
}

const output = {
  running: Boolean,
  stop: Function,
  start: Function,
  time: Number,
  reset: Function
}