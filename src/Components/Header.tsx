import React from 'react'
import logo from '../assets/images/todoapp.png'
import menu from '../assets/icons/menu.png'
import './header.scss'

type HeaderProps = {}

function Header({}: HeaderProps) {
  return (
    <div className="header">
      <div className="menu">
        <img src={menu} alt="menu" />
      </div>
      <div className="logo">
        <a href="/">
          <img src={logo} alt="logo"></img>
        </a>
      </div>
      <div className="nav">
        <a href="/">Make</a>
        <a href="/">Check</a>
        <a href="/">Result</a>
      </div>
      <div className="login">
        <a href="/">login</a>
      </div>
    </div>
  )
}

export default Header
