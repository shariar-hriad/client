import FilterBar from '@/components/FilterBar'
import { Products } from '@/components/sections'
import { PageHeader, Support } from '@/components/shared'
import { Fragment } from 'react'

const Page = () => {
    return (
        <Fragment>
            <PageHeader title='shop' />
            <FilterBar />
            <Products />
            <Support />
        </Fragment>
    )
}

export default Page
