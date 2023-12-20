import React, { useState, useEffect } from "react"
import getData from "../Server/getData"

function useChanges() {
    
    const [changes, setChanges] = useState({ clicks: { initial: [], final: [] } })

    const fetchData = async () => {
        const data = await getData('images')
        const clicks = data?.images?.sort((a,b) => a.order < b.order)
        setChanges(prevState => ({
            clicks: {
                initial: clicks,
                final: clicks
            }
        }))
    }

    useEffect(() => {
        fetchData()
    }, [])

    return { changes, setChanges }

}

export default useChanges