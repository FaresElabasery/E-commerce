'use client'
import useToggleWishlist from "@/app/_hooks/useToggleWishlist";
import { RootState } from "@/redux/store";
import { Heart } from "lucide-react";
import { useSelector } from "react-redux";

export default function AddToWishlistBtn({ productId }: { productId: string }) {
    const { wishlistIds } = useSelector((state: RootState) => state.wishlist);
    const isWishlisted = wishlistIds.includes(productId);
    const { handleToggle, loading, isActive } = useToggleWishlist({ productId, isWishlisted })
    
    return (
        <>
            {

                loading ?
                    <div className="flex-center">
                        <div className="miniLoader"></div>
                    </div>
                    :
                    <span onClick={handleToggle} className='bg-Bg size-[34] rounded-full flex-center cursor-pointer group-hover:scale-105 duration-200'>
                        <Heart className={`hover:scale-110 duration-200 hover:text-red-500 hover:fill-red-500 ${isActive ? 'fill-red-500 text-red-500' : ''}`} color="currentColor" strokeWidth={1.5} />
                    </span >
            }
        </>
    )
}
