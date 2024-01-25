import ProductDetailsTab from '@/components/ProductDetailsTab'
import { ProductInformation } from '@/components/sections'
import { Separator } from '@/components/ui/separator'

const SingleProduct = () => {
    return (
        <section className='py-5 lg:py-10 lg:pb-0'>
            <div className='container'>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    {/* ============ PRODUCT SLIDER START =========== */}

                    {/* ============ PRODUCT SLIDER END =========== */}

                    {/* ============ PRODUCT DETAILS START =========== */}
                    <ProductInformation />
                    {/* ============ PRODUCT DETAILS END =========== */}
                </div>
            </div>

            <Separator orientation='horizontal' />
            {/* ============ PRODUCT DETAILS TAB START =========== */}
            <ProductDetailsTab />
            {/* ============ PRODUCT DETAILS TAB END =========== */}

            <Separator orientation='horizontal' />
        </section>
    )
}

export default SingleProduct
