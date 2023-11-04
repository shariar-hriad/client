import { headerLinks, footerLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import Newsletter from './Newsletter'

const index = () => {
    return (
        <footer className='border-t pt-[30px] pb-5 border-b'>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-2 md:grid-cols-3 lg:grid-cols-4'>
                    <div className='py-3 space-y-2'>
                        <Link href='/'>
                            <Image
                                src='/logo.png'
                                alt='Furniro'
                                width={185}
                                height={41}
                            />
                        </Link>
                        <address className='text-[#9F9F9F] text-base'>
                            400 University Drive Suite 200 Coral Gables, FL
                            33134 USA
                        </address>
                    </div>

                    <div className='py-3 space-y-3'>
                        <h4 className='text-[#9F9F9F] text-base font-normal'>
                            Links
                        </h4>
                        <ul className='space-y-4'>
                            {headerLinks.map((link) => (
                                <li key={link.id} className='text-base'>
                                    <Link href={link.route}>{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='py-3 space-y-3'>
                        <h4 className='text-[#9F9F9F] text-base font-normal'>
                            Help
                        </h4>
                        <ul className='space-y-4'>
                            {footerLinks.map((link) => (
                                <li key={link.id} className='text-base'>
                                    <Link href={link.route}>{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='py-3 space-y-3'>
                        <h4 className='text-[#9F9F9F] text-base font-normal'>
                            Newsletter
                        </h4>
                        <Newsletter />
                    </div>
                </div>
            </div>
            <div className='container border-t pt-5'>
                <p className=''>&copy; furino. All rights reversed</p>
            </div>
        </footer>
    )
}

export default index
