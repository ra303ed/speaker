import Footer from '@/components/Footer'
import './globals.css'
import { Inter } from 'next/font/google'
import FooterTwo from '@/components/FooterTwo'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Speaker',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />
        <main>
          {children}
        </main>
        <Footer/>
        <FooterTwo/>
        </body>
    </html>
  )
}
