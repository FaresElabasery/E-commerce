'use client';
import { SquareChevronUp } from "lucide-react";
import { motion } from 'motion/react';
import { useState } from "react";
import FilterGroup from "../FilterGroup/FilterGroup";
import SearchInput from "../SearchInput/SearchInput";

export default function BottomFilter() {
    const [isOpenFilter, setIsOpenFilter] = useState(false)
    return (
        <motion.div transition={{ type: 'spring', stiffness: 500 }} animate={{ height: isOpenFilter ? 450 : 55 }} className={`sm:hidden fixed z-10 transition-all flex items-end bg-Bg ${isOpenFilter ? '!bg-gradient-to-b from-secondary1 to-Bg' : ''} bottom-0 right-0 left-0 w-full px-4 py-2  border border-muted rounded-md shadow-md`}>
            <button onClick={() => setIsOpenFilter(!isOpenFilter)} className=" absolute bottom-full right-0 flex bg-text2 text-primary items-center px-2 py-1 rounded-t-md  border-b-0 active:scale-105">
                <SquareChevronUp size={20} />
            </button>
            <FilterGroup isOpenFilter={isOpenFilter} setIsOpenFilter={setIsOpenFilter} />
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
