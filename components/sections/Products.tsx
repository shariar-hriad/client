import ProductCard from '../ProductCard'
import { Button } from '../ui/button'

const Products = () => {
    return (
        <section className='py-5 lg:py-10'>
            <div className='container'>
                {/* ========== SECTION TITLE START =========== */}
                <div className='text-center max-w-2xl mx-auto'>
                    <h2 className='font-semibold text-3xl lg:text-5xl mb-3 lg:mb-5 text-[#333333] dark:text-white'>
                        Our Products
                    </h2>
                </div>
                {/* ========== SECTION TITLE END =========== */}

                {/* ========== PRODUCTS GRID START =========== */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10'>
                    <ProductCard
                        title='Syletherine'
                        description='Stylish cafe chair'
                        price='2,500.000'
                    />
                </div>
                {/* ========== PRODUCTS GRID END =========== */}

                {/* ========== PAGINATION START =========== */}
                <div className='mt-8 flex items-center gap-3 justify-center'>
                    <Button
                        className='border-primary hover:text-primary bg-primary dark:hover:bg-gray-100 text-white dark:text-white dark:border-gray-400'
                        variant='outline'
                    >
                        1
                    </Button>
                    <Button
                        className='border-primary hover:text-white hover:bg-primary dark:hover:bg-gray-100 text-primary dark:text-white dark:border-gray-400'
                        variant='outline'
                    >
                        2
                    </Button>
                    <Button
                        className='border-primary hover:text-white hover:bg-primary dark:hover:bg-gray-100 text-primary dark:text-white dark:border-gray-400'
                        variant='outline'
                    >
                        3
                    </Button>
                    <Button
                        className='border-primary hover:text-white hover:bg-primary dark:hover:bg-gray-100 text-primary dark:text-white dark:border-gray-400'
                        variant='outline'
                    >
                        Next
                    </Button>
                </div>
                {/* ========== PAGINATION END =========== */}
            </div>
        </section>
    )
}

export default Products
