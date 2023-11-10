import type { Metadata } from 'next'
import {
    Banner,
    BrowseRange,
    Products,
    Explore,
    ShareSetup,
} from '@/components/sections'

export const metadata: Metadata = {
    title: 'Furniro - Home',
    description: 'A Modern Ineterior Website',
}

export default async function Home() {
    return (
        <>
            <Banner />
            <BrowseRange />
            <Products />
            <Explore />
            <ShareSetup />
        </>
    )
}
