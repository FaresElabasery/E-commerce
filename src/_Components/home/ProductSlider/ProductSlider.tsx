import ProductCard from "@/_Components/shared/ProductCard/ProductCard";
import SectionTitle from "@/_Components/shared/SectionTitle/SectionTitle";
import { getAllProducts } from "@/app/_services/products.services";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Countdown from "../Countdown/Countdown";
import SectionSlider from '../SectionSlider/SectionSlider';

export default async function ProductSlider() {
    const products = await getAllProducts({
        limit: 8,
    })
    return (
        <div className="category-slider mt-15">
            <div className="flex justify-between items-end ">
                <div className="countdown flex gap-20 items-end">
                    <SectionTitle title='Today’s' desc="Flash Sales" />
                    <Countdown />
                </div>
                <div className="flex gap-3">
                    <span className="review-prev-product flex-center size-8 rounded-full duration-200 hover:bg-gray-200">
                        <ArrowLeft />
                    </span>
                    <span className="review-next-product flex-center size-8 rounded-full duration-200 hover:bg-gray-200">
                        <ArrowRight />
                    </span>
                </div>
            </div>
            <div className="my-10">
                <SectionSlider
                    uniqueId={'product'}
                    slidesPerView={4.5}
                    spaceBetween={10}
                    items={products?.map((item) => (
                        <ProductCard
                            key={item._id}
                            product={item}
                        />
                    ))}
                />
            </div>
        </div>
    )
}
