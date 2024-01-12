import React, { useState, useEffect } from "react"
import { getData } from "../Server"

interface Image {
    order: string,
    ref: string
}

export interface Changes {
    clicks: {
        initial: Image[],
        final: Image[]
    }
}

interface UseChangesResult {
    changes: Changes,
    setChanges: React.Dispatch<React.SetStateAction<Changes>>
}

function useChanges(): UseChangesResult {
    
    const [changes, setChanges] = useState<Changes>({ clicks: { initial: [], final: [] } })

    const fetchData = async () => {

        try {
            const data = await getData('images')
            const clicks = data?.images?.sort((a: any, b: any ) => a.order < b.order)
            setChanges((prevState) => ({
                clicks: {
                    initial: clicks,
                    final: clicks
                }
            }))
        } catch (err) {
            console.error(err)
        }

    }

    useEffect(() => {
        fetchData()
    }, [])

    return { changes, setChanges }

}

export default useChanges