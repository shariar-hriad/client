'use client'

import { Fragment, useEffect, useState } from 'react'
import { usePathname, useParams } from 'next/navigation'
import { BreadCrumb, PageHeader } from '@/components/shared'

const Page = () => {
    return (
        <Fragment>
            <PageHeader title='shop' />
        </Fragment>
    )
}

export default Page
