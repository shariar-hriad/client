import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const Logo: FC<{ className?: string }> = ({ className }) => {
    return (
        <div className={cn('px-1', className)}>
            <Link href='/'>
                <Image src='/logo.png' alt='Furniro' width={185} height={41} />
            </Link>
        </div>
    )
}

export default Logo
