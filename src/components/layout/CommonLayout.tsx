import React from 'react'
import Header from './Header'
import Footer from './Footer'
import HomeComponent from '../home/HomeComponent'

function CommonLayout() {
  return (
    <>
    <Header/>
    <HomeComponent/>
    <Footer/>
    </>
  )
}

export default CommonLayout