'use client'

import Image from 'next/image'
import { Share, GitCompare, Heart } from 'lucide-react'
import { motion } from 'framer-motion'

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from './ui/card'
import { Button } from './ui/button'
import { useState } from 'react'

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
    const [isHovered, setIsHovered] = useState<boolean>(false)

    return (
        <Card className='overflow-hidden border-none shadow-none rounded-none bg-[#F4F5F7] relative z-0'>
            {/* ========== CARD HEADER START ========== */}
            <CardHeader className='p-0 overflow-hidden relative z-0'>
                <Image
                    src={`${imageUrl ? imageUrl : '/product-1.png'}`}
                    alt={title}
                    width={285}
                    height={301}
                    className='w-full'
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                />
                <div className='absolute top-5 right-5 w-12 h-12 rounded-full bg-[#E97171] flex items-center justify-center text-sm font-medium text-white'>
                    -30%
                </div>
            </CardHeader>
            {/* ========== CARD HEADER END ========== */}

            {/* ========== CARD CONTENT START ========== */}
            <CardContent className='space-y-1 pt-3'>
                <CardTitle className='text-2xl text-gray-800'>
                    {title}
                </CardTitle>
                <CardDescription className='space-y-1'>
                    <p>{description}</p>
                    <div className='flex items-center justify-between gap-2'>
                        <span className='font-semibold text-gray-800 text-base'>
                            Rp:&nbsp;{price}
                        </span>
                        <span className='line-through text-gray-400 dark:text-gray-200 font-medium text-sm'>
                            Rp:&nbsp;3,498.000
                        </span>
                    </div>
                </CardDescription>
            </CardContent>
            {/* ========== CARD CONTENT END ========== */}

            {/* ========== HOVER STATE START ========== */}
            <motion.div
                initial={{ opacity: 0 }}
                whileHover={{
                    opacity: 1,
                }}
                exit={{ opacity: 0 }}
                className='absolute z-[1] inset-0 bg-black/40 p-3 flex justify-center items-center flex-col'
            >
                <Button
                    className='border-primary hover:text-white hover:bg-primary dark:hover:bg-gray-100 text-primary dark:text-white dark:border-gray-400'
                    variant='outline'
                    size='default'
                >
                    Add to cart
                </Button>
                <div className='flex items-center gap-3 flex-wrap'>
                    <Button
                        className='text-white gap-2 bg-transparent hover:text-primary hover:bg-transparent p-0'
                        variant='ghost'
                    >
                        <Share className='w-4' />
                        Share
                    </Button>
                    <Button
                        className='text-white bg-transparent gap-2 hover:text-primary hover:bg-transparent p-0'
                        variant='ghost'
                    >
                        <GitCompare className='w-4' />
                        Compare
                    </Button>
                    <Button
                        className='text-white bg-transparent gap-2 hover:text-primary hover:bg-transparent p-0'
                        variant='ghost'
                    >
                        <Heart className='w-4' />
                        Like
                    </Button>
                </div>
            </motion.div>
            {/* ========== HOVER STATE END ========== */}
        </Card>
    )
}

export default ProductCard
