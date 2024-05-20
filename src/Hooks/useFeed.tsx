import React, { useState, useEffect } from "react";

const ACCESS_TOKEN = process.env.REACT_APP_API_ACCESS_TOKEN

export interface Feed {
    id: number,
    low_res_url: string,
    high_res_url: string,
    caption: string,
    permalink: string,
    timestamp: string
}

interface UseFeedResult {
    feed: Feed[],
    loading: boolean,
    error: string
}

function useFeed(limit: number): UseFeedResult {

    const [feed, setFeed] = useState<Feed[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    let url: string = `https://instagram-scraper.onrender.com/feed?limit=${limit}`

    const fetchData = async () => {
        setLoading(true)

        try {
            const response = await fetch(url, {
                headers: {
                    'Authorization': ACCESS_TOKEN || ''
                }
            })
            const data = await response.json()
            setFeed(data || [])
            setLoading(false)
        } catch (err) {
            setError(err)
            setFeed([])
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return { feed, loading, error }

}

export default useFeed