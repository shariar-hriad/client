import type { Metadata } from 'next'

import Footer from '@/components/footer'
import Header from '@/components/header'

import '@/app/globals.css'

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
            <body className='font-poppins' suppressHydrationWarning>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}
