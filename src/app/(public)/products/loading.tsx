import ProductSkeleton from '@/_Components/shared/ProductSkeleton/ProductSkeleton'
import { Skeleton } from '@/_Components/ui/skeleton'
import React from 'react'

export default function loading() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10  h-screen my-20'>
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
        </div>
    )
}
