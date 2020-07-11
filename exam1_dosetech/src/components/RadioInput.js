import React from 'react'

const RadioInput = ({value, name, onChange, checked}) => {
  return (
    <div>
      <input type="radio" name={name} value={value} onChange={onChange} checked={checked} />
      <label htmlFor={name}>{name}</label><br />
    </div>
  )
}

export default RadioInput
