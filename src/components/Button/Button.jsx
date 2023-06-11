import React from 'react'
import {clsx} from 'clsx'

//assets
import styles from "./button.module.scss"

const Button = ({ variant='outline', leftIcon, rightIcon, className,label }) => {
  
  return (
    <button className={clsx(styles.button_wrapper, styles[variant])}>
      {label}
    </button>
  )
}

export default Button