import React from 'react'

const Footer = ({value, styleContainer}) => {
  return (
    <footer style={styleContainer}>There are {value} {value === 1 ? "item" : "items"} on your list</footer>
  )
}

export default Footer