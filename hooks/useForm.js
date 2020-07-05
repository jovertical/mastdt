import * as React from 'react'

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
