'use client'

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { Minus, Plus, Trash } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { Stack } from './shared'
import { Button, buttonVariants } from './ui/button'

const CartTable = () => {
    const [quantity, setQuantity] = useState<string | number>(1)

    const decrementQuantity = () => {
        const parseQuantity = Number(quantity)
        if (parseQuantity === 1) {
            return
        }

        setQuantity(parseQuantity - 1)
    }
    const incrementQuantity = () => {
        const parseQuantity = Number(quantity)

        setQuantity(parseQuantity + 1)
    }

    return (
        <Table>
            <TableHeader className='bg-[#F9F1E7]'>
                <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Subtotal</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell className='flex items-center gap-5'>
                        <div className='relative h-[105px] w-[105px] overflow-hidden rounded-md'>
                            <Image
                                src='/furniture/image-2.png'
                                alt='asgard sofa'
                                fill
                                className='object-fill'
                                sizes='105px'
                            />
                        </div>
                        <h3 className='text-base font-normal text-[#9F9F9F]'>
                            Asgard Sofa
                        </h3>
                    </TableCell>
                    <TableCell className='text-base font-normal text-[#9F9F9F]'>
                        Rs. 250,000.00
                    </TableCell>
                    <TableCell>
                        <Stack direction='row'>
                            <Button
                                className='shrink-0'
                                size='icon'
                                variant='outline'
                                onClick={decrementQuantity}
                                disabled={Number(quantity) === 1 ? true : false}
                            >
                                <Minus className='h-5 w-5 text-primary' />
                            </Button>
                            <input
                                className={buttonVariants({
                                    size: 'icon',
                                    variant: 'outline',
                                    className: 'text-center',
                                })}
                                type='text'
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                            />
                            <Button
                                className='shrink-0'
                                size='icon'
                                variant='outline'
                                onClick={incrementQuantity}
                            >
                                <Plus className='h-5 w-5 text-primary' />
                            </Button>
                        </Stack>
                    </TableCell>
                    <TableCell>
                        <Stack
                            className='items-center justify-between'
                            direction='row'
                        >
                            <span className='text-lg font-semibold text-primary'>
                                Rs. 250,000.00
                            </span>
                            <Button size='icon' variant='ghost'>
                                <Trash className='h-5 w-5 text-primary' />
                            </Button>
                        </Stack>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}

export default CartTable
