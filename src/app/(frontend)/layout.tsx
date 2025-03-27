import React from 'react'
import './styles.css'
import Footer from './components/layout/footer/Footer'
import SmoothScrollProvider from './components/SmoothScrollProvider'

export const metadata = {
  description: 'Two Sisters Beauty Bar - Professional Skincare & Beauty Services',
  title: 'Two Sisters Beauty Bar',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <SmoothScrollProvider>
          <main>{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
