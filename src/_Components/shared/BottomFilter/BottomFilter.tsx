'use client';
import { Button } from "@/_Components/ui/button";
import { ICategory } from "@/app/_interfaces/products";
import { handleFilter } from "@/lib/utils";
import { SquareChevronUp } from "lucide-react";
import { motion } from 'motion/react';
import { useRouter } from "next/navigation";
import { useState } from "react";
import FilterByCategories from "../FilterByCategories/FilterByCategories";
import FilterByPriceRange from "../FilterByPriceRange/FilterByPriceRange";
import FilterProductSorting, { FilterProductSortingProps } from "../FilterProductSorting/FilterProductSorting";
import SearchInput from "../SearchInput/SearchInput";

export default function BottomFilter() {
    const [isOpenFilter, setIsOpenFilter] = useState(false)
    const route = useRouter()
    const [categoryId, setCategoryId] = useState<ICategory['_id'] | null>(null)

    const [value, setValue] = useState([100, 50000])
    const [sortType, setSortType] = useState<FilterProductSortingProps['sortType']>(null)

    const handleApplyFilter = () => {
        const filterUrl = handleFilter(categoryId, sortType, value);
        route.push(`/products?${filterUrl}`);
        setIsOpenFilter(false);
    }

    return (
        <motion.div transition={{ type: 'spring', stiffness: 500 }} animate={{ height: isOpenFilter ? 450 : 55 }} className={`sm:hidden fixed z-10 transition-all flex items-end bg-Bg ${isOpenFilter ? '!bg-gradient-to-b from-secondary1 to-Bg' : ''} bottom-0 right-0 left-0 w-full px-4 py-2  border border-muted rounded-md shadow-md`}>
            <button onClick={() => setIsOpenFilter(!isOpenFilter)} className=" absolute bottom-full right-0 flex bg-text2 text-primary items-center px-2 py-1 rounded-t-md  border-b-0 active:scale-105">
                <SquareChevronUp size={20} />
            </button>
            <div className={`absolute duration-1000 p-5 inset-0 ${isOpenFilter ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-all flex flex-col gap-4`}>
                <FilterByCategories categoryId={categoryId} setCategoryId={setCategoryId} />
                <FilterByPriceRange value={value} setValue={setValue} />
                <FilterProductSorting sortType={sortType} setSortType={setSortType} />
                <Button onClick={() => handleApplyFilter()} className="button-primary">Apply Filter</Button>
            </div>
            <div className="flex items-center gap-2 w-full">
                <div className="!text-xs font-medium flex-3">
                    <SearchInput />
                </div>
                <button className="button-primary py-2 px-2 flex-center rounded-md text-sm flex-1">
                    Search
                </button>
            </div>
        </motion.div>
    )
}
