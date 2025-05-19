import React from 'react'
import Banner from '../modules/Banner'
import Introduction from '../modules/Introduction'
import Explanation from '../modules/Explanation'
import Sign from '../modules/Sign'

import styles from './HomePage.module.scss'

function HomePage() {
  return (
    <>
    <Banner />
    <Introduction />
    <Explanation />
    <Sign />
    </>
  )
}

export default HomePage