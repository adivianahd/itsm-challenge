"use client"

import { useState } from "react"

export function useFetchJSON<T>(url: string) {
    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const fetchData = async () => {
        try {
            setLoading(true)
            const response = await fetch(url)
            const result = await response.json()
            setData(result)
        } catch (err) {
            setError("Error fetching data")
        } finally {
            setLoading(false)
        }
    }

    return { data, loading, fetchData, error }
}
