import React from "react"

export interface FilterProductSortingProps {
    sortType: '-price' | '-sold' | '-priceAfterDiscount' | '-ratingsAverage' | null,
    setSortType: React.Dispatch<React.SetStateAction<'-price' | '-sold' | '-priceAfterDiscount' | '-ratingsAverage' | null>>
}
export default function FilterProductSorting({sortType, setSortType}: FilterProductSortingProps) {
    return (
        <div>
            <div className="flex items-center justify-between">
                <h3 className="!text-lg font-medium">Sort The Products</h3>
                {sortType != null && <span onClick={() => setSortType(null)} className="text-sm text-muted-foreground cursor-pointer underline-offset-3 underline">clear Filter</span>}
            </div>
            <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span onClick={() => setSortType('-price')} className={`filterBtn duration-500 ${sortType === '-price' ? '!bg-secondary2 !text-text' : ''}`}>Price</span>
                <span onClick={() => setSortType('-sold')} className={`filterBtn duration-500 ${sortType === '-sold' ? '!bg-secondary2 !text-text' : ''}`}>Sold</span>
                <span onClick={() => setSortType('-priceAfterDiscount')} className={`filterBtn duration-500 ${sortType === '-priceAfterDiscount' ? '!bg-secondary2 !text-text' : ''}`}>Discount</span>
                <span onClick={() => setSortType('-ratingsAverage')} className={`filterBtn duration-500 ${sortType === '-ratingsAverage' ? '!bg-secondary2 !text-text' : ''}`}>Ratings Average</span>
            </div>
        </div>
    )
}
