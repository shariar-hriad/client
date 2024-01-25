import CartTable from '@/components/CartTable'
import { PageHeader, Stack } from '@/components/shared'
import { Button } from '@/components/ui/button'

const page = () => {
    return (
        <>
            <PageHeader title='Cart' />
            <section className='py-[30px] lg:py-[60px]'>
                <div className='container'>
                    <Stack className='items-start' direction='row' spacing='5'>
                        <div className='flex-1 p-3'>
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
                            <Button variant='outline' size='sm'>
                                Check Out
                            </Button>
                        </div>
                    </Stack>
                </div>
            </section>
        </>
    )
}

export default page
