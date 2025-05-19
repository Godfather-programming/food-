import React from 'react'
import Apple from '../icons/Apple'
import Binance from '../icons/Binance'
import SpaceX from '../icons/SpaceX'
import Tesla from '../icons/Tesla'

import styles from './Sign.module.scss'

function Sign() {
  return (
    <div className={styles.container}>
        <div className={styles.signs}>
        <div className={styles.section}> <Apple /> </div>
        <div className={styles.section}> <SpaceX /> </div>
        <div className={styles.section}> <Binance /> </div>
        <div className={styles.section}> <Tesla /> </div>
        </div>
        <div className={styles.distance}>
            <p className={styles.text}> x </p>
        </div> 
    </div>
  )
}

export default Sign