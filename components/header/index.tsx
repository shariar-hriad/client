'use client'

import Logo from '@/components/Logo'
import { Heart, Search, UserX } from 'lucide-react'
import { useState } from 'react'
import Cart from '../Cart'
import { Button } from '../ui/button'
import MobileMenu from './mobile-menu'
import { Navigation } from './navigation'
import SearchBar from './search'

const Index = () => {
    const [showSearch, setShowSearch] = useState<boolean>(false)

    return (
        <header className='sticky top-0 z-20 w-full bg-background/30 px-2 py-4 shadow backdrop-blur-md transition duration-300'>
            <div className='container'>
                <div className='flex items-center justify-between'>
                    <Logo />

                    <Navigation />

                    <div className='px-1'>
                        <ul className='flex gap-1'>
                            <li>
                                <Button size='icon' variant='outline'>
                                    <UserX className='h-5 w-5 text-primary' />
                                </Button>
                            </li>
                            <li>
                                <Button
                                    onClick={() => setShowSearch(true)}
                                    size='icon'
                                    variant='outline'
                                >
                                    <Search className='h-5 w-5 text-primary' />
                                </Button>
                            </li>
                            <li>
                                <Button size='icon' variant='outline'>
                                    <Heart className='h-5 w-5 text-primary' />
                                </Button>
                            </li>
                            <li>
                                <Cart />
                            </li>
                            <li className='lg:hidden'>
                                <MobileMenu />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Search Bar */}
            <SearchBar showSearch={showSearch} setShowSearch={setShowSearch} />
        </header>
    )
}

export default Index
