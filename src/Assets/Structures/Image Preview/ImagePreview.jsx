import React, { useRef, useState } from 'react'

import '../Image Preview/ImagePreview.styles.css'

function ImagePreview({ id, order = null, img, index = null, tempFiles = null, setTempFiles = null, images = null, setImages = null }) {

    const [empty, setEmpty] = useState(img ? false : true)
    const image = useRef(null)
    const imgHolder = useRef(null)

    function handlePress(e) {
        e.preventDefault()

        if (index && (setImages && images && order)) {

            setEmpty(true)

            setImages(prevState => prevState?.filter(__ => __.order !== order)?.map((_, index) => ({
                order: index + 1,
                url: _.url
            })))
            
            image.current.src = ''
        }
        else {
            if (!tempFiles && !setTempFiles) return
            const tempArr = tempFiles
            const filtered = tempArr.filter(__ => __.id !== id)
            setTempFiles(filtered)
        }
    }

    return (
        <div key={index} className="img-holder" ref={imgHolder}>
            {index && (<div className="order" select="false">{index}</div>)}
            <img
                src={img}
                className={empty ? 'temp-img empty' : 'temp-img'}
                ref={image}
                onLoad={() => URL.revokeObjectURL(image.current.src)}
            />
            {!empty && <button onClick={handlePress} className="remove-btn material-icons-round">delete_sweep</button>}
        </div>
    )
}

export default ImagePreview