import { getData, getBlobURI } from "../Server";

interface Link {
    name: string | undefined,
    url: string | undefined,
    icon: string[] | undefined
}

interface Recent {
    title: string | undefined,
    logo: string | undefined,
    labels: {
        tools: string[] | undefined,
        type: string | undefined
    },
    links: Array<Link> | undefined,
    description: string | undefined
}

async function getRecent(recent: Recent | null, reset = false) {

    if (!reset && !recent) return recent

    const data = await getData("recent", "recent")
    if (!data) return {}

    const obj: Recent = {
        title: data?.title,
        logo: URL.createObjectURL(await getBlobURI(data?.logo)),
        labels: {
            tools: data?.labels.tools,
            type: data?.labels.type
        },
        links: data?.links,
        description: data?.description
    }

    return obj

}

export default getRecent