'use client'

import Image from 'next/image'
import Link from 'next/link'

type ProductCardProps = {
    title: string
    imageUrl?: string
    description: string
    price: string
}

const ProductCard = ({
    title,
    imageUrl,
    description,
    price,
}: ProductCardProps) => {
    return (
        <div className='overflow-hidden bg-[#F4F5F7] shadow-sm'>
            {/* ========== PRODUCT CARD HEADER START ========== */}
            <div className='relative z-0 overflow-hidden p-0'>
                {/* PRODUCT IMAGE */}
                <Link href='/shop/12'>
                    <Image
                        src={`${imageUrl ? imageUrl : '/product-1.png'}`}
                        alt={title}
                        width={285}
                        height={301}
                        className='w-full'
                    />
                </Link>
                <div className='absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-white bg-amber-900/50 text-sm font-medium text-white shadow-xl'>
                    -30%
                </div>
            </div>
            {/* ========== PRODUCT CARD HEADER END ========== */}

            {/* ========== PRODUCT CARD CONTENT START ========== */}
            <div className='space-y-1 p-4'>
                {/* PRODUCT TITLE */}
                <Link href='/shop/12'>
                    <h3 className='text-2xl font-semibold text-[#3A3A3A]'>
                        {title}
                    </h3>
                </Link>

                {/* PRODUCT DESCRIPTION */}
                <div className='space-y-1'>
                    <p className='text-base font-medium text-[#898989]'>
                        {description}
                    </p>

                    <div className='flex items-center justify-between gap-2'>
                        <span className='text-xl font-semibold text-[#3A3A3A]'>
                            Rp:&nbsp;{price}
                        </span>
                        <span className='text-base font-normal text-[#B0B0B0] line-through dark:text-gray-200'>
                            Rp:&nbsp;3,498.000
                        </span>
                    </div>
                </div>
            </div>
            {/* ========== PRODUCT CARD CONTENT END ========== */}

            {/* ========== HOVER STATE START ========== */}

            {/* <div className='absolute inset-0 z-[1] flex flex-col items-center justify-center border border-primary bg-black/40 p-3'>
                    <Button
                        className='border-primary text-primary hover:bg-primary hover:text-white dark:border-gray-400 dark:text-white dark:hover:bg-gray-100'
                        variant='outline'
                        size='default'
                    >
                        Add to cart
                    </Button>
                    <div className='flex flex-wrap items-center gap-3'>
                        <Button
                            className='gap-1 bg-transparent p-0 text-sm text-white hover:bg-transparent hover:text-primary lg:p-0'
                            variant='ghost'
                        >
                            <Share className='w-4' />
                            Share
                        </Button>
                        <Button
                            className='gap-1 bg-transparent p-0 text-sm text-white hover:bg-transparent hover:text-primary lg:p-0'
                            variant='ghost'
                        >
                            <GitCompare className='w-4' />
                            Compare
                        </Button>
                        <Button
                            className='gap-1 bg-transparent p-0 text-sm text-white hover:bg-transparent hover:text-primary lg:p-0'
                            variant='ghost'
                        >
                            <Heart className='w-4' />
                            Like
                        </Button>
                    </div>
                </div> */}

            {/* ========== HOVER STATE END ========== */}
        </div>
    )
}

export default ProductCard
