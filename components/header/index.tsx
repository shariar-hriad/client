import { headerLinks } from '@/constants'
import { UserX, Search, Heart, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const index = () => {
    return (
        <header className='bg-background py-4 px-2'>
            <div className='container'>
                <div className='flex items-center justify-between'>
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

                    <nav className='px-3 flex-1 hidden lg:block'>
                        <ul className='flex gap-5 justify-center'>
                            {headerLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.route}>{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className='px-1'>
                        <ul className='flex gap-5'>
                            <li>
                                <UserX className='w-5' />
                            </li>
                            <li>
                                <Search className='w-5' />
                            </li>
                            <li>
                                <Heart className='w-5' />
                            </li>
                            <li>
                                <ShoppingCart className='w-5' />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default index
