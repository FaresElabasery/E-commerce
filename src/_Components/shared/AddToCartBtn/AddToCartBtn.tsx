'use client'
import { Button } from "@/_Components/ui/button";
import { addProductToCart } from "@/app/(public)/cart/cart.actions";
import { update } from "@/redux/slices/CartCountSlice";
import { FormEvent } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

export default function AddToCartBtn({ id,from }: { id: string,from?: 'productDetails' | 'productCard' }) {
    const dispatch = useDispatch()
    const handleAddToCart = async (e: FormEvent) => {
        e.preventDefault()
        const res = await addProductToCart(id)
        if (res) {
            toast.success('Item added to cart')
            dispatch(update(res))
        } else {
            toast.error(res?.message || 'Failed to add item to cart')
        }
    }

    return (
        <Button onClick={handleAddToCart} className={`${from === 'productDetails' ? 'button-primary rounded-xs px-12 w-10/12' : 'w-full absolute cursor-pointer rounded-none -bottom-10 bg-button dark:bg-Bg text-text hover:text-text  hover:bg-text1  group-hover:bottom-0 duration-200'} `}>Add To Cart</Button>
    )
}
