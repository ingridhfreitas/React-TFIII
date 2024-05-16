import React from 'react'
import { FaSun, FaMoon } from "react-icons/fa"

const ContextApi = () => {
  const darkTheme = true;
  return (
    <div>
      <span className='icon'>
        { darkTheme ? <FaSun /> : <FaMoon />}
      </span>
      <button onClick={toogleTheme}>
        {darkTheme ? <h1>Enable Light Theme : Enable Dark Theme}
      </button>
    </div>
  )
}

export default ContextApi