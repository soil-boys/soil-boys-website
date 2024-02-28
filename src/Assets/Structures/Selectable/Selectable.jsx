import React, { useState } from 'react'

import IntuitiveSelectable from './IntuitiveSelectable.jsx'
import TextSelectable from './TextSelectable.jsx'
import MinimalSelectable from './MinimalSelectable.jsx'

import './Selectable.styles.css'

function Selectable({ limit = 1, defaultSelected = [], type = "intuitive" }) {

    return (
        <div className="selectable">
            {
                (type === "Intuitive")
                    ?
                <IntuitiveSelectable defaultSelected={defaultSelected} limit={limit} />
                    :
                (type === "Text")
                    ?
                <TextSelectable defaultSelected={defaultSelected} limit={limit} />
                    :
                <MinimalSelectable defaultSelected={defaultSelected} limit={limit} />
            }
        </div>
    )
}

export default Selectable