import CartCardProduct from "@/_Components/shared/CartCardProduct/CartCardProduct";
import { Button } from "@/_Components/ui/button";
import { IProduct } from "@/app/_interfaces/products";
import { getUserCart } from "@/app/_services/cart.services";
import { CheckCircle, Trash } from "lucide-react";
import Link from "next/link";


export type ItemType = {
  count: number,
  _id: string;
  price: number,
  product: IProduct
}
export default async function Cart() {

  const { numOfCartItems, data: { products, totalCartPrice } } = await getUserCart()
  if (products?.length <= 0) {
    return (
      <div className="min-h-110 bg-gradient-to-b from-secondary1 to-Bg my-5 rounded-2xl py-10">
        <h1 className="mb-10 text-center font-bold text-5xl text-text2"><span className="text-secondary2">Cart</span> Is Empty</h1>
      </div>
    )
  }
  return (
    <div className="min-h-110 bg-gradient-to-b from-secondary1 to-Bg my-5 rounded-2xl py-10">
      <h1 className="mb-10 text-center font-bold text-5xl text-"><span className="text-secondary2">Cart</span> Items</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {
            products.map((product: ItemType) => (
              <CartCardProduct key={product._id} product={product} />
            ))
          }
        </div>
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3 sticky top-40">
          <div className="flex justify-between">
            <p className="text-lg font-bold text-secondary2">Total</p>
            <div >
              <p className="mb-1 text-lg font-bold text-text2">${totalCartPrice} EGP</p>
              <p className="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          <Link href={'cart/payment'} className="mt-6 w-full rounded-md bg-button2 py-1.5 font-medium text-text hover:bg-hover-button2 cursor-pointer flex-center gap-2">Check out<CheckCircle /></Link>
          <Button className="button-primary w-full mt-2 !bg-black cursor-pointer flex items-center hover:!bg-secondary1 hover:!text-text2 border">Clear All Items<Trash /></Button>
        </div>
      </div>
    </div>

  )
}
