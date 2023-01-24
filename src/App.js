import React, { useState } from 'react'
import colorBlock from './colorBlock'

function App(){
    let colors = [
        'violet', 'blue',
        'lightblue', 'green',
        'greenyellow', 'yellow',
        'orange', 'red'
    ]
    
    let colorMap = colors.map((color, i) => {
        return (
            <colorBlock key={i} color={color} />
        )
    })
}
export default App;