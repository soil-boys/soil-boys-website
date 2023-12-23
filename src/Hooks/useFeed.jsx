import React, { useState, useEffect } from "react";

const ACCESS_TOKEN = process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN

function useFeed(limit: Number) {

    const [feed, setFeed] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const fetchData = async () => {
        setLoading(true)

        try {
            const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_types,permalink,media_type&limit=${limit}&access_token=${ACCESS_TOKEN}`
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)
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