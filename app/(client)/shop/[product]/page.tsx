'use client'

import RelatedProducts from '@/components/sections/RelatedProducts'
import SingleProduct from '@/components/sections/SingleProduct'
import { BreadCrumb } from '@/components/shared'

const Page = ({ params }: { params: { id: string } }) => {
    console.log(params)
    return (
        <>
            <div className='bg-[#F9F1E7] py-3 lg:py-5'>
                <BreadCrumb className='container' />
            </div>
            <SingleProduct />
            <RelatedProducts />
        </>
    )
}

export default Page
