'use client'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Facebook, Instagram, Linkedin, Plus, Star } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const ProductInformation = () => {
    const [selectedColor, setSelectedColor] = useState<string>('')
    const [selectedSize, setSelectedSize] = useState<string>('')

    const sizes: string[] = ['XS', 'S', 'M', 'L', 'XL', 'XXL']
    const colors: string[] = ['Red', 'Green', 'Yellow', 'Blue']

    const handleSizeChange = (size: string) => {
        setSelectedSize(size)
    }
    const handleColorChange = (color: string) => {
        setSelectedColor(color)
    }

    return (
        <div className='p-4'>
            <h1 className='mb-4 text-2xl lg:text-5xl'>Asgaard Sofa</h1>
            <p className='mb-3 text-2xl font-medium text-[#9F9F9F]'>
                Rs. 250,000.000
            </p>
            {/* Product Rating Start */}

            <div className='mb-3 flex items-center gap-3'>
                <ul className='flex items-center gap-1'>
                    {new Array(5).fill(undefined).map((_, idx) => (
                        <li key={idx}>
                            <Star className='h-4 w-4' />
                        </li>
                    ))}
                </ul>
                <div className='h-full w-[2px] bg-gray-500' />
                <p className='text-[13px] text-[#9F9F9F]'>5 Customer Review</p>
            </div>
            {/* Product Rating End */}

            <p className='mb-2 text-sm leading-relaxed text-gray-900'>
                Setting the bar as one of the loudest speakers in its class, the
                Kilburn is a compact, stout-hearted hero with a well-balanced
                audio which boasts a clear midrange and extended highs for a
                sound.
            </p>

            <div className='mb-4'>
                <h6 className='mb-3 text-base text-gray-500'>
                    Size :&nbsp;{selectedSize}
                </h6>

                <div className='flex items-center gap-4'>
                    {sizes.map((size: string) => (
                        <Button
                            onClick={() => handleSizeChange(size)}
                            key={size}
                            className={`h-[30px] w-[30px] ${
                                size === selectedSize
                                    ? 'bg-[#B88E2F] text-white'
                                    : 'bg-[#F9F1E7] text-black'
                            } p-0 text-[13px] transition-all duration-300 hover:bg-primary hover:text-white lg:h-[30px] lg:p-0`}
                        >
                            {size}
                        </Button>
                    ))}
                </div>
            </div>

            <div className='mb-2'>
                <h6 className='mb-2 text-base text-gray-500'>
                    Color :&nbsp;<span>{selectedColor}</span>
                </h6>

                <div className='mb-5 flex items-center gap-4'>
                    {colors.map((color: string) => (
                        <Button
                            onClick={() => handleColorChange(color)}
                            style={{
                                backgroundColor: color,
                            }}
                            key={color}
                            className={`h-[30px] w-[30px] ${
                                color === selectedColor
                                    ? 'outline outline-gray-200'
                                    : ''
                            } rounded-full p-0 shadow-md lg:h-[30px] lg:p-0`}
                        >
                            <span className='sr-only'>{color}</span>
                        </Button>
                    ))}
                </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className='mb-4 flex items-center gap-2 lg:mb-10'>
                <Button variant='outline'>Add To Cart</Button>
                <Button variant='secondary' className='gap-3'>
                    <Plus className='h-5 w-5' /> Compare
                </Button>
            </div>

            <Separator />

            <div className='mt-4 lg:mt-10'>
                <div className='flex items-center text-base text-[#9F9F9F]'>
                    <span className='w-[100px]'>Sku</span>
                    <span>: &nbsp;SS001</span>
                </div>

                <div className='flex items-center text-base text-[#9F9F9F]'>
                    <span className='w-[100px]'>Category</span>
                    <span>: &nbsp;Sofas</span>
                </div>

                <div className='flex items-center text-base text-[#9F9F9F]'>
                    <span className='w-[100px]'>Tags</span>
                    <span>: &nbsp;Sofa, Chair, Home, Shop</span>
                </div>

                <div className='flex items-center text-base text-[#9F9F9F]'>
                    <span className='w-[100px]'>Share</span>: &nbsp;
                    <ul className='inline-flex items-center gap-3'>
                        <li>
                            <Link href='facebook.com'>
                                <Facebook className='w-4 text-black' />
                            </Link>
                        </li>

                        <li>
                            <Link href='facebook.com'>
                                <Linkedin className='w-4 text-black' />
                            </Link>
                        </li>

                        <li>
                            <Link href='facebook.com'>
                                <Instagram className='w-4 text-black' />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProductInformation
