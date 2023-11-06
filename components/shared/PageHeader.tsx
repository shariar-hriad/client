'use client'

import BreadCrumb from './BreadCrumb'

type PageHeaderProps = {
    title: string
}

const PageHeader = ({ title }: PageHeaderProps) => {
    return (
        <div
            className='flex items-center justify-center py-[40px] lg:py-[80px] relative z-[1]'
            style={{
                background: 'url("/pageheader-bg.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className='text-center py-5 relative z-10 space-y-3'>
                <h3 className='text-gray-800 capitalize font-semibold text-2xl lg:text-5xl tracking-wide'>
                    {title}
                </h3>
                <BreadCrumb />
            </div>
            <div className='bg-white/20 backdrop-blur-sm absolute inset-0 -z-0' />
        </div>
    )
}

export default PageHeader
