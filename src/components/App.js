import React, { useState } from 'react'
import Display from './Display'
import ButtonPanel from './ButtonPanel'
import calculate from '../logic/calculate'
import styles from '../assets/styles.module.css'
import calcStyles from '../assets/app.module.css'

const App = () => {
  const initialState = { total: null, next: null, operation: null }
  const [state, setState] = useState(initialState)

  const handleClick = btnName => {
    setState(calculate(state, btnName))
  }

  const { total, next, operation } = state

  return (
    <div className='mainWrapper'>
      <div className={`${styles.flexContainer} ${calcStyles.calcContainer}`}>
        <Display total={total} next={next} operation={operation} />
        <ButtonPanel clickHandler={handleClick} />
      </div>
    </div>
  )
}

export default App
