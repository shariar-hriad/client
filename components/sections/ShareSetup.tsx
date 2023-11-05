import Image from 'next/image'

const ShareSetup = () => {
    return (
        <section className='py-[30px] lg:py-[50px]'>
            <div className='container'>
                <div className='p-3 text-center space-y-2'>
                    <h4 className='font-semibold text-xl text-gray-600'>
                        Share your setup with
                    </h4>
                    <h2 className='font-bold text-4xl lg:text-5xl text-gray-800'>
                        #FuniroFurniture
                    </h2>
                </div>
            </div>
            <div>
                <Image
                    src='/furniture-grid-image.png'
                    alt='furnitures'
                    width={1440}
                    height={721}
                    className='w-full'
                />
            </div>
        </section>
    )
}

export default ShareSetup
