import React, { useState, useEffect } from "react"
import { getData } from "../Server"

interface Image {
    order: string,
    ref: string
}
interface Recent {
    title: string,
    description: string,
    logo: string,
    labels: {
        tools: string[],
        type: string
    },
    links: Array<{ name: string, url: string, icon: string[] }>
}

export interface Changes {
    clicks: {
        initial: Image[],
        final: Image[]
    },
    recent: {
        initial: Recent,
        final: Recent
    }
}

interface UseChangesResult {
    changes: Changes,
    setChanges: React.Dispatch<React.SetStateAction<Changes>>
}

const sampleObj = {
    title: "Product Title",
    description: "Product description",
    logo: "product logo",
    labels: {
        tools: [],
        type: "App"
    },
    links: []
}

function useChanges(): UseChangesResult {
    
    const [changes, setChanges] = useState<Changes>({
        clicks: {
            initial: [],
            final: []
        },
        recent: {
            initial: sampleObj,
            final: sampleObj
        }
    })

    const fetchData = async () => {

        try {
            const clicksData = await getData('clicks', 'images')
            const recentData = await getData('recent', 'recent')
            const clicks = clicksData?.images?.sort((a: any, b: any ) => a.order < b.order)
            const recent = {
                title: recentData?.title,
                description: recentData?.description,
                logo: recentData?.logo,
                labels: {
                    tools: recentData?.labels?.tools,
                    type: recentData?.labels?.type
                },
                links: recentData?.links
            }
            setChanges({
                clicks: {
                    initial: clicks,
                    final: clicks
                },
                recent: {
                    initial: recent,
                    final: recent
                }
            })
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