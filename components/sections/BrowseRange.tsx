import { ranges } from '@/constants'
import RangeCard from '../RangeCard'

const BrowseRange = () => {
    return (
        <section className='py-5 lg:py-10'>
            <div className='container'>
                <div className='text-center max-w-2xl mx-auto'>
                    <h2 className='font-semibold text-3xl lg:text-5xl mb-3 lg:mb-5 text-[#333333] dark:text-white'>
                        Browse The Range
                    </h2>
                    <p className='text-base text-[#333333]'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Sapiente laborum reprehenderit culpa nulla
                        doloribus harum perspiciatis labore minus esse rerum.
                    </p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10'>
                    {ranges &&
                        ranges.map((range) => (
                            <RangeCard
                                key={range.title}
                                image={range.url}
                                title={range.title}
                            />
                        ))}
                </div>
            </div>
        </section>
    )
}

export default BrowseRange
