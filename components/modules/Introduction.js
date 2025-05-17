import React from 'react'
import Fast from '../icons/Fast'

import styles from "./introduction.module.scss"
import Food from '../icons/Food'
import Choice from '../icons/Choice'
import Clock from '../icons/Clock'

function Introduction() {
  return (
    <div className={styles.container}>
        <h3> Why us? </h3>
        <div className={styles.wrapper}>
            <div className={styles.box}>
            <div className={styles.details}>
               <Fast />
               <p> fast </p>
            </div>
            </div>
            
            <div className={styles.box}>
                <div className={styles.details}>
               <Food />
               <div className={styles.title}>
                 <p> Best </p>
                 <p> Restaurant </p>
               </div>
                </div>
            </div>

            <div className={styles.box}>
                <div className={styles.details}>
               <Choice />
                <div className={styles.title}>
                <p> Your </p>
                <p> Choice </p>
                </div>
                </div>
            </div>

            <div className={styles.box}>
                <div className={styles.details}>
               <Clock />
               <p> 24-7 </p>
                </div>
            </div> 
        </div>  
    </div>
  )
}

export default Introduction