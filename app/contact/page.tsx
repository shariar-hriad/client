import ContactForm from '@/components/form/ContactForm'
import { PageHeader } from '@/components/shared'

const page = () => {
    return (
        <>
            <PageHeader title='contact' />
            <section className='py-[30px] lg:py-[60px]'>
                <div className='container'>
                    <div className='grid grid-cols-2'>
                        <div></div>
                        <div>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page
