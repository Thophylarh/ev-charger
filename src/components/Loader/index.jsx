import React from 'react'
import './style.css'
import logo from "../../assets/svg/logo.svg";

export default function Loader() {
  return (
      <div class="pulse-wrapper">
      <div class="pulse">
      <img src={logo} alt="EVcharger logo"  />
            </div>  
    </div>
  )
}
