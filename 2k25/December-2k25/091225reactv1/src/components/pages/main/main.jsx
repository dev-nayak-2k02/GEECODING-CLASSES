import React, { useState } from 'react'
import styles from './main.module.css'
const main = () => {
    const[color, setColor] = useState('')
  return (
    <div>
        <div className={styles.colorBox}>

        </div>
        <button onClick={handleClick}>
            click to change color
        </button>
    </div>
  )
}

export default main