import ProductCard from '@/components/ProductCard'

const RelatedProducts = () => {
    return (
        <section className='py-8'>
            <div className='container'>
                <div className='mx-auto max-w-2xl text-center'>
                    <h2 className='text-3xl font-medium text-black lg:text-4xl'>
                        Related Products
                    </h2>
                </div>

                {/* ========== PRODUCTS GRID START =========== */}
                <div className='mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
                    <ProductCard
                        title='Syletherine'
                        description='Stylish cafe chair'
                        price='2,500.000'
                    />
                </div>
                {/* ========== PRODUCTS GRID END =========== */}
            </div>
        </section>
    )
}

export default RelatedProducts
