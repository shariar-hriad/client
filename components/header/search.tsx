'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { FC } from 'react'

const dropVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
}

const SearchBar: FC<{
    showSearch?: boolean
    setShowSearch: (value: boolean) => void
}> = ({ showSearch, setShowSearch }) => {
    return (
        <AnimatePresence>
            {showSearch && (
                <motion.div
                    className='absolute inset-0 z-30 flex items-center bg-black/30 backdrop-blur-3xl'
                    initial='hidden'
                    animate='visible'
                    exit='hidden'
                    variants={dropVariants}
                    transition={{ duration: 0.5 }}
                >
                    <div className='container'>
                        <div className='flex items-center justify-between gap-1'>
                            <div className='flex w-full max-w-md flex-1 items-center justify-center gap-1'>
                                <Input placeholder='Search your product...' />
                                <Button type='submit'>Search</Button>
                            </div>

                            <Button
                                className=''
                                onClick={() => setShowSearch(false)}
                                size='icon'
                                variant='outline'
                            >
                                <X className='h-5 w-5 text-primary' />
                            </Button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default SearchBar
