import { useEffect, useState } from "react";

const useLocalStorage = (itemName: string, value: string = '') => {
  const [state, setState] = useState(() => {
    return localStorage.getItem(itemName) || value
  })
  useEffect(() => {
    localStorage.setItem(itemName, state)
    return () => {
      localStorage.removeItem(itemName)
    }
  },[state])
  return [state, setState]
}