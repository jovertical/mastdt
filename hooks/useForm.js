import * as React from 'react'

/**
 * @param {Object.<string, any>} defaultValues
 * @return {{ values: Object.<string, any>, onChange: Function }}
 */
export default function useForm(defaultValues) {
  const [values, setValues] = React.useState(defaultValues)

  function handleChange(key, value) {
    setValues(values => ({
      ...values,
      [key]: value,
    }));
  }

  return { values, onChange: handleChange }
}
