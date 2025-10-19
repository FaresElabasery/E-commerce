'use client'
import { Button } from "@/_Components/ui/button";
import useToggleCart from "@/app/_hooks/useToggleCart";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function AddToCartBtn({ id, from }: { id: string, from?: 'productDetails' | 'productCard' }) {
    const { cartIds } = useSelector((state: RootState) => state.cartCount)
    const isActive = cartIds.includes(id)
    console.log(cartIds);
    console.log(id);
    
    const { active, handleToggleCart, loading } = useToggleCart({ id, isActive })

    return (
        <Button onClick={handleToggleCart} className={`${from === 'productDetails' ? 'button-primary rounded-xs px-12 w-10/12' : `w-full absolute cursor-pointer rounded-none bottom-0 ${active && 'md:!bottom-0 !bg-hover-button2 hover:!bg-secondary2'} md:-bottom-10  bg-button dark:bg-Bg text-text hover:text-text  hover:bg-text1  group-hover:bottom-0 duration-200`} `}>
            {loading &&
                <div className="flex-center ">
                    <span className={`miniLoader`}></span>
                </div>
            }
            {
                active ? 'Remove From Cart' : 'Add To Cart'
            }
        </Button>
    )
}
