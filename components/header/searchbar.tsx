'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from '@/components/ui/sheet'
import { Search } from 'lucide-react'

export default function SearchBar() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant='outline' size='icon'>
                    <Search className='h-5 w-5 text-primary' />
                </Button>
            </SheetTrigger>
            <SheetContent side='top' className='px-5 py-4'>
                <div className='container'>
                    <div className='flex items-center justify-center'>
                        <div className='flex w-full max-w-md flex-1 items-center justify-center gap-1'>
                            <Input placeholder='Search your product...' />
                            <SheetClose asChild>
                                <Button variant='destructive' type='submit'>
                                    Search
                                </Button>
                            </SheetClose>
                        </div>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}
