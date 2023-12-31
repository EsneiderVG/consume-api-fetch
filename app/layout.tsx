import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header';
import SideBar from '@/components/SideBar'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Recycle App',
  description: 'recycle app envigado university',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
      
      <Header/>
      
      <div className="flex">
        <SideBar/>
 
        {children}
      
      </div>
      
      
      </body>

      
      
      
    </html>
  )
}
