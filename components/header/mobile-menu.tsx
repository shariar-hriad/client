import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'
import { headerLinks } from '@/constants'
import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { buttonVariants } from '../ui/button'

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
                        <div className='px-1'>
                            <Link href='/'>
                                <Image
                                    src='/logo.png'
                                    alt='Furniro'
                                    width={185}
                                    height={41}
                                />
                            </Link>
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
