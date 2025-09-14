import MainSlider from "@/components/home/MainSlider/MainSlider";
import CategoriesMenu from './../components/home/CategoriesMenu/CategoriesMenu';
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import Countdown from './../components/home/Countdown/Countdown';
import ProductCard from "@/components/shared/ProductCard/ProductCard";

export default function Home() {
  return (
    <div className="">
      <div className='flex'>
        <CategoriesMenu />
        <MainSlider />
      </div>
      <div className="Today’s mt-20">
        <div className="countdown flex gap-20 items-end">
          <SectionTitle title='Today’s' desc="Flash Sales" />
          <Countdown />
        </div>
        <div className="product-card flex gap-4">
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
}
