'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type BreadCrumbType = {
    className?: string
}

const BreadCrumb = ({ className }: BreadCrumbType) => {
    const pathname = usePathname()
    const segments = pathname?.split('/').filter((segment) => segment !== '')

    return (
        <div className={cn('py-3', className)}>
            <ul className='flex items-center gap-2'>
                <li className='text-base capitalize text-gray-700'>
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
                            className='h-6 w-6 shrink-0'
                        >
                            <path
                                fillRule='evenodd'
                                d='M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z'
                                clipRule='evenodd'
                            ></path>
                        </svg>
                    </Link>
                </li>

                {segments?.map((link, index) => {
                    return (
                        <li
                            key={link}
                            className='text-base capitalize text-gray-700'
                        >
                            <Link
                                href={`/${link}`}
                                className='flex items-center justify-start gap-1'
                            >
                                <span>{link}</span>
                                {index !== segments.length - 1 && (
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 20 20'
                                        fill='currentColor'
                                        aria-hidden='true'
                                        className='h-6 w-6 shrink-0'
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
