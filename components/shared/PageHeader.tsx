'use client'

import BreadCrumb from './BreadCrumb'

type PageHeaderProps = {
    title: string
}

const PageHeader = ({ title }: PageHeaderProps) => {
    return (
        <div
            className='relative z-[1] flex items-center justify-center py-[40px] lg:py-[80px]'
            style={{
                background: 'url("/pageheader-bg.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className='relative z-10 space-y-3 py-5 text-center'>
                <h3 className='text-2xl font-semibold capitalize tracking-wide text-gray-800 lg:text-5xl'>
                    {title}
                </h3>
                <BreadCrumb />
            </div>

            <div className='absolute inset-0 -z-0 bg-white/20 backdrop-blur-sm' />
        </div>
    )
}

export default PageHeader
