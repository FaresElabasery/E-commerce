import MainSlider from "@/components/home/MainSlider/MainSlider";
import CategoriesMenu from './../components/home/CategoriesMenu/CategoriesMenu';

export default function Home() {
  return (
    <div className="">
      <div className='flex'>
        <CategoriesMenu />
        <MainSlider />
      </div>
      <h1 className="text-3xl">category</h1>
    </div>
  );
}
