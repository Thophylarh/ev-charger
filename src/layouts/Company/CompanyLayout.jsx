import React from 'react'
import CompanyNavBar from './NavBar'

export default function CompanyLayout({children}) {
  return (
    <>
    <CompanyNavBar/>
    {children}
    </>
  )
}
