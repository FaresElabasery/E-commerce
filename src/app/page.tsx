import MainSlider from "@/components/home/MainSlider/MainSlider";
import CategoriesMenu from './../components/home/CategoriesMenu/CategoriesMenu';
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";

export default function Home() {
  return (
    <div className="">
      <div className='flex'>
        <CategoriesMenu />
        <MainSlider />
      </div>
      <div className="Today’s mt-20">
        <SectionTitle title='Today’s' desc="Flash Sales" />
      </div>
    </div>
  );
}
