import React, { useState, useEffect } from "react";

const ACCESS_TOKEN = process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN

function useFeed(limit: Number) {

    const [feed, setFeed] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const url = limit ? `https://instagram-scraper.onrender.com/feed?limit_given=true&limit=${limit}` : "https://instagram-scraper.onrender.com/feed"

    const fetchData = async () => {
        setLoading(true)

        try {
            const response = await fetch(url, {
                headers: {
                    'Authorization': ACCESS_TOKEN
                }
            })
            const data = await response.json()
            setFeed(data)
            setLoading(false)
        } catch (err) {
            setError(err)
            console.log(err)
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