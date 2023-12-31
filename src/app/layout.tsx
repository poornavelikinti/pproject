import React from 'react'

import './globals.css'
import { Inter } from 'next/font/google'
import CommonLayout from '../components/layout/CommonLayout'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Puma Task',
  description: 'Generated by Poorna',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white">
      <Header/>
        {children}
        <Footer/>
        </body>
      
    </html>
  )
}
