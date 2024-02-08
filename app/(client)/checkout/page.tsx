import { Checkout } from '@/components/sections'
import { PageHeader, Support } from '@/components/shared'

const page = () => {
    return (
        <>
            <PageHeader title='Checkout' />
            <Checkout />
            <Support />
        </>
    )
}

export default page
