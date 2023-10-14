import { useEffect, useState } from 'react'

// Defining a prefix for the key
const PREFIX = 'kanban-board-'

export default function useLocalStorage(key, initialValue) {
  const prefixedKey = PREFIX + key

  const [value, setValue] = useState(() => {

    // Searching local storage and going through all the possibilities
    const jsonValue = localStorage.getItem(prefixedKey)
    if (jsonValue !== null) {
      return JSON.parse(jsonValue)
    }
    if (typeof initialValue === 'function') {
      return initialValue()
    } else {
      return initialValue
    }
  })

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value))
  }, [prefixedKey, value])

  // Returning the state
  return [value, setValue]
}