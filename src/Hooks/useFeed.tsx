import React, { useState, useEffect } from "react";

const ACCESS_TOKEN = process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN

export interface Feed {
    id: number,
    media_type: string,
    media_url: string,
    caption: string,
    permalink: string,
    timestamp: string
}

interface UseFeedResult {
    feed: Feed[] | null,
    loading: boolean,
    error: string
}

function useFeed(limit: number): UseFeedResult {

    const [feed, setFeed] = useState<Feed[] | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    const url = limit ? `https://instagram-scraper.onrender.com/feed?limit_given=true&limit=${limit}` : "https://instagram-scraper.onrender.com/feed"

    const fetchData = async () => {
        setLoading(true)

        try {
            const response = await fetch(url, {
                headers: {
                    'Authorization': ACCESS_TOKEN || ''
                }
            })
            const data = await response.json()
            setFeed(data)
            setLoading(false)
        } catch (err) {
            setError(err)
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