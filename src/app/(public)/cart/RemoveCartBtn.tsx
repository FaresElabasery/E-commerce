'use client'
import { Button } from "@/_Components/ui/button";
import useRemoveFromCart from "@/app/_hooks/useRemoveFromCart";

export default function RemoveCartBtn({ id }: { id: string }) {
    const { handleRemoveFromCart } = useRemoveFromCart({ id })
    return (
        <Button onClick={handleRemoveFromCart} variant={'destructive'} className="cursor-pointer hover:bg-hover-button2 duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </Button>
    )
}
