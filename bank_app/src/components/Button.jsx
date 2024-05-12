import React from 'react'

const Button = ({styles}) => {
  return (
    <button type="button" className={`${styles} py-4 px-6 font-poppins font-medium text-[18px] text-primary outline-none bg-blue-gradient rounded-[10px]`}>
      Get Started
    </button>
  )
}

export default Button
