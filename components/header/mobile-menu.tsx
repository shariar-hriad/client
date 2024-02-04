import { Button, buttonVariants } from '@/components/ui/button'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'
import { headerLinks } from '@/constants'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const MobileMenu = () => {
    return (
        <Sheet>
            <SheetTrigger
                className={buttonVariants({ variant: 'outline', size: 'icon' })}
            >
                <Menu className='h-5 w-5 text-primary' />
            </SheetTrigger>

            <SheetContent>
                <SheetHeader className='px-2 py-4'>
                    <SheetTitle>
                        <div className='flex items-center justify-between gap-2 px-1'>
                            <Link href='/'>
                                <Image
                                    src='/logo.png'
                                    alt='Furniro'
                                    width={185}
                                    height={41}
                                />
                            </Link>
                            <SheetClose asChild>
                                <Button variant='outline' size='icon'>
                                    <X className='h-5 w-5' />
                                </Button>
                            </SheetClose>
                        </div>
                    </SheetTitle>
                </SheetHeader>

                <nav className='px-3'>
                    <ul className='space-y-3'>
                        {headerLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    className={buttonVariants({
                                        variant: 'ghost',
                                        className: 'text-primary',
                                    })}
                                    href={link.route}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileMenu
