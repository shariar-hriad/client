'use client'

import { PageHeader } from '@/components/shared'

const Page = ({ params }: { params: { id: string } }) => {
    console.log(params)
    return (
        <>
            <PageHeader title='product details' />
        </>
    )
}

export default Page
