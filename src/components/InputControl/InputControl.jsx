import React from 'react'
import styles from './InputControl.module.css'


function InputControl(prop) {
    const { label, ...props } = prop;
  return (
    <div className={styles.container}>
        {label && <label>{label}</label>}
        <input type='text' {...props} />
    </div>
  )
}

export default InputControl