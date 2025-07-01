'use client';

import { useEffect, useState, useCallback } from 'react'

export default function useMedia(
  queries: string[],
  values: number[],
  defaultValue: number
): number {
  const match = useCallback(() => {
    const query = queries.findIndex(q => window.matchMedia(q).matches)
    return values[query] || defaultValue
  }, [queries, values, defaultValue]);
  
  const [value, set] = useState(match)
  useEffect(() => {
    const handler = () => set(match)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [match])
  return value
}