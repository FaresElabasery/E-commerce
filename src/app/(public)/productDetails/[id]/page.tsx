import { Icons } from "@/_Components/icons/icons";
import ProductDetailsSlider from "@/_Components/ProductDetailsSlider/ProductDetailsSlider";
import Incrementer from "@/_Components/shared/Incrementer/Incrementer";
import Stars from "@/_Components/shared/Stars/Stars";
import { Button } from '@/_Components/ui/button';
import { GetSpecificProduct } from "@/app/_services/products.services";
import { Inter } from "next/font/google";

const inter = Inter({
    weight: ['400', '600'],
    subsets: ['latin']
})
type ProductDetailsProps = {
    params: { id: string }
}
export default async function ProductDetails(props: ProductDetailsProps) {
    const product = await GetSpecificProduct(props.params.id);
    return (
        <div className="my-10 gap-8  flex items-center flex-col sm:flex-row ">
            <div className=" sm:w-2/3">
                <ProductDetailsSlider title={product?.title || ''} imageCover={product?.imageCover || ""} images={product?.images || []} />
            </div>
            <div className="flex flex-col sm:w-1/3">
                <h1 className={`text-2xl/[24px] font-semibold  ${inter.className}`}>{product?.title || ''}</h1>
                <div className="flex items-center gap-2 my-4">
                    <Stars ratingsAverage={product?.ratingsAverage || 0} />
                    <span className=' text-sm text-text2/50'>({product?.ratingsQuantity} Reviews)</span>
                    <span className="text-text2/50">|</span>
                    <span className="text-button1">In Stock</span>
                </div>
                <p className={`${inter.className} tracking-wide text-2xl mb-6`}>${product?.price}</p>
                <p className={`${inter.className} text-sm/[21px] pb-6 border-b-2`}>{product?.description}</p>
                {product?.category.name.includes('Fashion') &&
                    <div className="flex items-center gap-4 my-6">
                        <span>Size:</span>
                        <div className="flex items-center gap-2">
                            <span className="px-2 text-sm font-medium py-1 border border-text2/50 rounded-md">XS</span>
                            <span className="px-2 text-sm font-medium py-1 border border-text2/50 rounded-md">S</span>
                            <span className="px-2 text-sm font-medium bg-button2 text-text py-1 border border-text2/50 rounded-md">M</span>
                            <span className="px-2 text-sm font-medium py-1 border border-text2/50 rounded-md">L</span>
                            <span className="px-2 text-sm font-medium py-1 border border-text2/50 rounded-md">XL</span>
                        </div>
                    </div>
                }
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <Incrementer />
                    </div>
                    <Button className="button-primary rounded-xs px-12">Buy Now</Button>
                    <span className="border border-black/50 flex-center rounded-sm px-[2px]"> <Icons.heart /></span>
                </div>
            </div>
        </div>
    );
}
