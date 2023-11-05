'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

const BreadCrumb = () => {
    const pathname = usePathname()
    const splitedPath = pathname?.split('/')
    const routes = splitedPath?.slice(1)

    console.log(routes)

    const lastSegment = routes?.[routes?.length - 1] || false

    return (
        <div className='px-3'>
            <ul className='flex items-center gap-2'>
                <li className='text-base text-gray-700 capitalize'>
                    <Link
                        className='flex items-center justify-start gap-1'
                        href='/'
                    >
                        <span>Home</span>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                            aria-hidden='true'
                            className='shrink-0 w-6 h-6'
                        >
                            <path
                                fillRule='evenodd'
                                d='M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z'
                                clipRule='evenodd'
                            ></path>
                        </svg>
                    </Link>
                </li>
                {routes?.map((link) => {
                    if (lastSegment) {
                        return (
                            <Link
                                key={link}
                                href={`/${link}`}
                                className='flex items-center justify-start gap-1'
                            >
                                <span>{link}</span>
                            </Link>
                        )
                    }

                    return (
                        <li
                            key={link}
                            className='text-base text-gray-700 capitalize'
                        >
                            <Link
                                href={`/${link}`}
                                className='flex items-center justify-start gap-1'
                            >
                                <span>{link}</span>
                                {lastSegment && (
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 20 20'
                                        fill='currentColor'
                                        aria-hidden='true'
                                        className='shrink-0 w-6 h-6'
                                    >
                                        <path
                                            fillRule='evenodd'
                                            d='M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z'
                                            clipRule='evenodd'
                                        ></path>
                                    </svg>
                                )}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default BreadCrumb
