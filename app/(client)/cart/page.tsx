import CartTable from '@/components/CartTable'
import { PageHeader, Stack, Support } from '@/components/shared'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'

const page = () => {
    return (
        <>
            <PageHeader title='Cart' />
            <section className='py-[30px] lg:py-[60px]'>
                <div className='container'>
                    <div className='grid grid-cols-1 lg:grid-cols-3'>
                        <div className='p-3 lg:col-span-2'>
                            <CartTable />
                        </div>
                        <div className='flex w-full max-w-sm flex-col items-center gap-2 rounded-md bg-[#F9F1E7] p-3 text-center shadow-md'>
                            <h3 className='text-[32px] font-semibold text-black'>
                                Cart Totals
                            </h3>
                            <Stack
                                className='items-center'
                                direction='row'
                                spacing='5'
                            >
                                <h5 className='text-sm font-semibold text-black'>
                                    Subtotal
                                </h5>
                                <span className='text-gray-500'>
                                    Rs. 250,000.00
                                </span>
                            </Stack>
                            <Stack
                                className='items-center'
                                direction='row'
                                spacing='5'
                            >
                                <h5 className='text-sm font-semibold text-black'>
                                    Total
                                </h5>
                                <span className='text-xl font-semibold text-primary'>
                                    Rs. 250,000.00
                                </span>
                            </Stack>
                            <Link
                                className={buttonVariants({
                                    variant: 'outline',
                                })}
                                href='/checkout'
                            >
                                Check Out
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <Support />
        </>
    )
}

export default page
