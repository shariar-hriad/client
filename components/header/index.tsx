'use client'

import Logo from '@/components/Logo'
import { Stack } from '../shared'
import HeaderCta from './header-cta'
import { Navigation } from './navigation'

const Index = () => {
    return (
        <header className='sticky top-0 z-20 w-full bg-background/30 px-2 py-4 shadow backdrop-blur-md transition duration-300'>
            <div className='container'>
                <Stack className='items-center justify-between' direction='row'>
                    <Logo />

                    <Navigation />

                    <HeaderCta />
                </Stack>
            </div>
        </header>
    )
}

export default Index
