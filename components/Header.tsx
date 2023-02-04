import React from 'react'

interface IHeader {
   children: JSX.Element
}

function Header( { children }:IHeader ) {
  return (
    <header>
      { children }
    </header>
  )
}

export default Header