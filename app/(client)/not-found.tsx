import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='flex h-[70vh] items-center justify-center bg-slate-50'>
            <div className='space-y-4 p-5 text-center'>
                <h2 className='text-8xl font-bold'>Not Found</h2>
                <p className='text-gray-700'>
                    Could not find requested resource
                </p>
                <Link className={buttonVariants({})} href='/'>
                    Return Home
                </Link>
            </div>
        </div>
    )
}
