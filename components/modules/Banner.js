import React from 'react'

import styles from "./Banner.module.scss"

function Banner() {
  return (
    <div className={styles.container}>
      <div className={styles.explanations}>
        <div className={styles.title}>
          <h2> BotoFood </h2>
          <span>  </span>
        </div>

        <h4> Food Delivery and Takeout! </h4>

        <p> BotoFood is an online food ordering and delivery plattform launched by Uber in 2014. Meals are delivered by couriers using cars, scooters, bikes or on foot. </p>

        <button> See All </button>

      </div>
        <img alt="food" src="/images/banner.png"/>
    </div>

  )
}

export default Banner