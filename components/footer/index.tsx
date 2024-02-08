import { footerLinks, headerLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import { buttonVariants } from '../ui/button'
import Newsletter from './Newsletter'

const index = () => {
    return (
        <footer className='border-b border-t pb-5 pt-[30px]'>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-2 md:grid-cols-3 lg:grid-cols-4'>
                    <div className='space-y-2 py-3'>
                        <Link href='/'>
                            <Image
                                src='/logo.png'
                                alt='Furniro'
                                width={185}
                                height={41}
                            />
                        </Link>
                        <address className='text-base text-[#9F9F9F]'>
                            400 University Drive Suite 200 Coral Gables, FL
                            33134 USA
                        </address>
                    </div>

                    <div className='space-y-3 py-3'>
                        <h4 className='text-base font-normal text-[#9F9F9F]'>
                            Links
                        </h4>
                        <ul className='space-y-4'>
                            {headerLinks.map((link) => (
                                <li key={link.name} className='text-base'>
                                    <Link href={link.route}>{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='space-y-3 py-3'>
                        <h4 className='text-base font-normal text-[#9F9F9F]'>
                            Help
                        </h4>
                        <ul className='space-y-4'>
                            {footerLinks.map((link) => (
                                <li key={link.name} className='text-base'>
                                    <Link href={link.route}>{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='space-y-3 py-3'>
                        <h4 className='text-base font-normal text-[#9F9F9F]'>
                            Newsletter
                        </h4>
                        <Newsletter />
                    </div>
                </div>
            </div>
            <div className='container border-t pt-5'>
                <p className='text-center'>
                    &copy; Furino. All rights reversed.
                    <Link
                        className={buttonVariants({ variant: 'link' })}
                        href='https://www.facebook.com/shariar.hriad'
                    >
                        Shariar Hossain Riad
                    </Link>
                </p>
            </div>
        </footer>
    )
}

export default index
