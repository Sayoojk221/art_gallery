import React from 'react'
import Image from 'next/image'

//components
import Button from '@/components/Button'
//assets
import styles from "../styles/onboarding.module.scss"

function OnBoarding() {
  return (
    <div className={styles.onboarding_wrapper}>
      <Image alt='onboard_image'  src="/images/onboard_one.jpg"/>
      <Image alt='onboard_image'  src="/images/onboard_one.jpg"/>
      <Image alt='onboard_image'  src="/images/onboard_one.jpg"/>
      <Image alt='onboard_image'  src="/images/onboard_one.jpg"/>
      <div className={styles.get_start_container}>
      </div>
      <Image alt='onboard_image'  src="/images/onboard_one.jpg"/>
      <Image alt='onboard_image'  src="/images/onboard_one.jpg"/>
      <Image alt='onboard_image'  src="/images/onboard_one.jpg"/>
    </div>
  )
}

export default OnBoarding