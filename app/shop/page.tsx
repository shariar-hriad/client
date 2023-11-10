import { Fragment } from 'react'
import { PageHeader, Support } from '@/components/shared'
import FilterBar from '@/components/FilterBar'
import { Products } from '@/components/sections'

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
