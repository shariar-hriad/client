import CartItem from '@/components/CartItem'
import { Badge } from '@/components/ui/badge'
import { Button, buttonVariants } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'
import { ShoppingBag } from 'lucide-react'
import Link from 'next/link'

const Cart = () => {
    return (
        <Sheet>
            <SheetTrigger
                className={buttonVariants({
                    variant: 'outline',
                    size: 'icon',
                    className: 'relative',
                })}
            >
                <ShoppingBag className='h-5 w-5 text-primary' />
                <Badge className='absolute -right-3 -top-3'>3</Badge>
            </SheetTrigger>

            <SheetContent>
                <SheetHeader className='px-2 py-4'>
                    <SheetTitle className='mb-2'>
                        <div className='px-1'>
                            <h2 className='text-2xl font-semibold text-gray-700'>
                                Shopping Bag
                            </h2>
                        </div>
                    </SheetTitle>
                    <Separator />
                </SheetHeader>

                <div className='space-y-2 px-2'>
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </div>

                <SheetFooter className='absolute bottom-0 left-0 right-0 w-full border border-t bg-white p-2'>
                    <SheetClose asChild>
                        <Link
                            className={buttonVariants({
                                variant: 'outline',
                                size: 'sm',
                                className: 'text-primary',
                            })}
                            href='/cart'
                        >
                            Cart
                        </Link>
                    </SheetClose>

                    <SheetClose asChild>
                        <Button
                            className='text-primary'
                            size='sm'
                            variant='outline'
                        >
                            Checkout
                        </Button>
                    </SheetClose>

                    <SheetClose>
                        <Button
                            className='text-primary'
                            size='sm'
                            variant='outline'
                        >
                            Comparision
                        </Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}

export default Cart
