import ProductCard from '@/components/ProductCard'
import { Button } from '@/components/ui/button'

const Products = () => {
    return (
        <section className='py-5 lg:py-10'>
            <div className='container'>
                {/* ========== SECTION TITLE START =========== */}
                <div className='mx-auto max-w-2xl text-center'>
                    <h2 className='mb-3 text-3xl font-semibold text-[#333333] dark:text-white lg:mb-5 lg:text-5xl'>
                        Our Products
                    </h2>
                </div>
                {/* ========== SECTION TITLE END =========== */}

                {/* ========== PRODUCTS GRID START =========== */}
                <div className='mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
                    <ProductCard
                        title='Syletherine'
                        description='Stylish cafe chair'
                        price='2,500.000'
                    />
                </div>
                {/* ========== PRODUCTS GRID END =========== */}

                {/* ========== PAGINATION START =========== */}
                <div className='mt-8 flex justify-center'>
                    <Button variant='outline'>See More</Button>
                </div>
                {/* ========== PAGINATION END =========== */}
            </div>
        </section>
    )
}

export default Products
