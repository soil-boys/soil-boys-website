import moment from "moment"

const formatFeed = (feed: Array) => {

    if (!feed || !feed.length) return

    let imageFeed = feed.filter(_ => _.media_type === 'IMAGE')

    let dateArr = Array.from(new Set(imageFeed.map(e => moment(e.timestamp).format('DD/MM/YYYY'))))
    let formattedArr = Array(dateArr.length).fill(0).map((_, index) => ({ date: dateArr[index], images: [] }))

    for (let i = 0; i < imageFeed.length; i++) {
        let date = moment(imageFeed[i].timestamp).format('DD/MM/YYYY')
        let objIndex = formattedArr.findIndex(_ => _.date === date)
        formattedArr[objIndex].images.push(imageFeed[i])
    }

    return formattedArr

}

export default formatFeed