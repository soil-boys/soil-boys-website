import React, { useRef, useState } from 'react'

import '../Image Preview/ImagePreview.styles.css'

function ImagePreview({ id, order = null, img, reference = null, index = null, tempFiles = null, setTempFiles = null, images = null, setImages = null, temp = false }) {

    const [empty, setEmpty] = useState(img ? false : true)
    const image = useRef(null)
    const imgHolder = useRef(null)

    function handleDragStart(e) {
        if (empty) return
        e.target.classList.add('dragging')
    }
    function handleDragEnd(e) {
        if (empty) return
        if (!index && images?.length === 10) return
        e.target.classList.remove('dragging')

        const dropables = [...document.querySelectorAll('.image-list .img-holder')]

        if (e.target.classList.contains('temp')) {
            e.target.classList.remove('temp')
            e.target.parentElement.classList.remove('empty')

            const dropables = [...document.querySelectorAll('.image-list .img-holder:not(.empty)')]

            setImages(prevState => dropables.map((_, index) => ({
                order: index + 1,
                url: dropables[index].querySelector('.temp-img').src,
                reference: dropables[index].querySelector('.temp-img').getAttribute('data-reference')
            })))
            setTempFiles(prevState => prevState?.filter(_ => _.id !== id))
            return
        }

        setImages(prevState => prevState?.map((_, index) => ({
            order: index + 1,
            url: dropables[index].querySelector('.temp-img').src,
            reference: dropables[index].querySelector('.temp-img').getAttribute('data-reference')
        })))
    }

    function handleDragOver(e) {
        e.preventDefault()
        
        const draggable = document.querySelector('.dragging')
        
        if (draggable.classList.contains('temp')) {
            const parent = e.target.classList.contains('img-holder') ? e.target : e.target.parentElement
            if (!parent.classList.contains('empty') && !parent.classList.contains('temp')) return console.log('a')

            const emptyDroppables = [...document.querySelectorAll('.img-holder.empty')]

            emptyDroppables[0].appendChild(draggable)
            return
        }
        if (empty || !index) return
        
        const parent = e.target.parentElement
        const prevParent = draggable?.parentElement
        const original = e.target.parentElement.querySelector('.temp-img:not(.empty)')

        prevParent.appendChild(original)
        parent.appendChild(draggable)
    }

    function handlePress(e) {
        e.preventDefault()

        if (index && (setImages && images && order)) {
            setEmpty(true)
            setImages(prevState => prevState?.filter(__ => __.order !== order)?.map((_, index) => ({
                order: index + 1,
                url: _.url,
                reference: reference
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
        <div key={index} className={`img-holder${empty ? ' empty' : ''}${temp ? ' temp' : ''}`} ref={imgHolder} select="false" onDragOver={handleDragOver}>
            {index && (<div className="order" select="false">{index}</div>)}
            {!empty && <img
                src={img}
                className={temp ? 'temp-img temp' : 'temp-img'}
                ref={image}
                data-reference={reference}
                data-draggable={!empty}
                // onLoad={() => URL.revokeObjectURL(image.current.src)}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
            />}
            {!empty && <button onClick={handlePress} className="remove-btn material-icons-round">delete_sweep</button>}
        </div>
    )
}

export default ImagePreview