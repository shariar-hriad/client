import { Heart, UserX } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'
import Cart from '../Cart'
import { Button, buttonVariants } from '../ui/button'
import MobileMenu from './mobile-menu'
import SearchBar from './searchbar'

const HeaderCta: FC<{}> = () => {
    return (
        <div className='px-1'>
            <ul className='flex gap-1'>
                <li>
                    <Button size='icon' variant='outline'>
                        <UserX className='h-5 w-5 text-primary' />
                    </Button>
                </li>
                <li>
                    <SearchBar />
                </li>
                <li>
                    <Link
                        className={buttonVariants({
                            variant: 'outline',
                            size: 'icon',
                        })}
                        href='/wishlist'
                    >
                        <Heart className='h-5 w-5 text-primary' />
                    </Link>
                </li>
                <li>
                    <Cart />
                </li>
                <li className='lg:hidden'>
                    <MobileMenu />
                </li>
            </ul>
        </div>
    )
}

export default HeaderCta
