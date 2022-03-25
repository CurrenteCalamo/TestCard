import React, { useState } from 'react'

export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue)
  const onChange = ({ target: { value } }) =>
    setValue((prev) => (/\d+/.test(Number(value)) ? value : prev))

  return {
    value,
    onChange,
  }
}
