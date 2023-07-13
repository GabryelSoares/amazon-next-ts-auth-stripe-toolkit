import React, { ReactElement } from 'react'
import BottomHeader from './header/BottomHeader'
import Footer from './Footer'
import Header from './header/Header'

interface Props {
  children: ReactElement
}

export default function RootLayout({children}: Props) {
  return (
    <>
      <Header />
      <BottomHeader />
      {children}
      <Footer />
    </>
  )
}
