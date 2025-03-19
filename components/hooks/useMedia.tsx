'use client';

import { useEffect, useState } from 'react'

export default function useMedia(
  queries: string[],
  values: number[],
  defaultValue: number
): number {
  const match = () => {
    const query = queries.findIndex(q => window.matchMedia(q).matches)
    return values[query] || defaultValue
  }
  
  const [value, set] = useState(match)
  useEffect(() => {
    const handler = () => set(match)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])
  return value
}