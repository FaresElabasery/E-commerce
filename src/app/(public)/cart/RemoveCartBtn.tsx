'use client'
import { Button } from "@/_Components/ui/button";
import { removeProductFromCart } from "./cart.actions";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { update } from "@/redux/slices/CartCountSlice";

export default function RemoveCartBtn({ id }: { id: string }) {
    const dispatch =useDispatch()
    const handleRemoveFromCart = async () => {
        const res = await removeProductFromCart(id)
        if (res === null) {
            toast.error('Failed to remove product from cart')
        }
        else {
            toast.success('Product removed from cart successfully')
            dispatch(update(res))
        }

    }
    return (
        <Button onClick={handleRemoveFromCart} variant={'destructive'} className="cursor-pointer hover:bg-hover-button2 duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </Button>
    )
}
