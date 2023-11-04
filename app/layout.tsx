import type { Metadata } from 'next'

import Header from '@/components/header'
import Footer from '@/components/footer'

import './globals.css'

export const metadata: Metadata = {
    title: 'Furniro',
    description: 'A Modern Ineterior Website',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang='en'>
            <body className='font-poppins'>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}
