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

interface GroupedPosts {
    date: string,
    posts: Feed[]
}

interface UseGalleryResult {
    groupedPosts: GroupedPosts[] | null,
    currentPage: number,
    loading: boolean,
    error: string,
    refetch: Function
}

function useGallery(page: number): UseGalleryResult {
    const [groupedPosts, setGroupedPosts] = useState<GroupedPosts[]>([])
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [totalPages, setTotalPages] = useState<number>(1)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    let url: string = `https://instagram-scraper.onrender.com/feed?page=${page}`

    const fetchData = async (url: string) => {
        setLoading(true)

        try {
            const response = await fetch(url, {
                headers: {
                    'Authorization': ACCESS_TOKEN || ''
                }
            })
            const data = await response.json()
            setGroupedPosts([
                ...groupedPosts,
                ...data?.posts
            ])
            setCurrentPage(Math.min(data?.current_page, data.total_pages) || page)
            setTotalPages(data?.total_pages || 1)
            setLoading(false)
        } catch (err) {
            setGroupedPosts([])
            setTotalPages(1)
            setCurrentPage(1)
            setError(err)
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    async function refetch(page: number) {
        let url = `https://instagram-scraper.onrender.com/feed?page=${page}`
        if (page > totalPages) return
        fetchData(url)
    }

    useEffect(() => {
        fetchData(url)
    }, [])

    return { groupedPosts, currentPage, loading, error, refetch }
}

export default useGallery