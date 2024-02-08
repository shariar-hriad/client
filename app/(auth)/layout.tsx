import type { Metadata } from 'next'

import '@/app/globals.css'

export const metadata: Metadata = {
    title: 'Furniro Authentication',
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
                <main>{children}</main>
            </body>
        </html>
    )
}
