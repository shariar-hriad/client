import { ranges } from '@/constants';
import RangeCard from '../RangeCard';

const BrowseRange = () => {
    return (
        <section className='py-5 lg:py-10'>
            <div className='container'>
                <div className='mx-auto max-w-2xl text-center'>
                    <h2 className='mb-3 text-3xl font-semibold text-[#333333] dark:text-white lg:mb-5 lg:text-5xl'>
                        Browse The Range
                    </h2>
                    <p className='text-base text-[#333333]'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Sapiente laborum reprehenderit culpa nulla
                        doloribus harum perspiciatis labore minus esse rerum.
                    </p>
                </div>

                <div className='mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3'>
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
    );
};

export default BrowseRange;
