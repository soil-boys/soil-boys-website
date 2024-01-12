import moment from "moment"
import { Feed } from "../Hooks/useFeed"

interface Section {
    date: string,
    images: Feed[]
}

const formatFeed = (feed: Feed[]): Section[] | undefined => {

    if (!feed || !feed.length) return

    let imageFeed = feed.filter(_ => _.media_type === 'IMAGE')

    let dateArr = Array.from(new Set(imageFeed.map(e => moment(e.timestamp).format('DD/MM/YYYY'))))
    let formattedArr: Section[] = Array(dateArr.length).fill(0).map((_, index) => ({ date: dateArr[index], images: [] }))

    for (let item of imageFeed) {
        let date = moment(item.timestamp).format('DD/MM/YYYY')
        let objIndex = formattedArr.findIndex(obj => obj.date === date)
        formattedArr[objIndex].images.push(item)
    }

    return formattedArr

}

export default formatFeed