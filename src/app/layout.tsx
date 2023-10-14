import './globals.css'
import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Layout from '@/components/layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fondation Lyon El Nsele',
  description: 'Fondation Lyon El Nsele - www.fondationlyonelnsele.org',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Layout >
          {children}
        </Layout>
      </body>
    </html>
  )
}
