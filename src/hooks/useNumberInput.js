import * as React from 'react'

/**
 * @param {Number} maxDigits
 *
 * @return {output}
 */
export default function useNumberInput(maxDigits = 2) {
  const [numbers, setNumbers] = React.useState([])

  function handleReset() {
    setNumbers([])
  }

  function handleAdd(number) {
    if (numbers.length >= maxDigits) {
      return
    }

    setNumbers((prevNumbers) => prevNumbers.concat(number))
  }

  return {
    numbers,
    onReset: handleReset,
    onAdd: handleAdd,
  }
}

const output = {
  numbers: Array,
  onReset: Function,
  onAdd: Function,
}
