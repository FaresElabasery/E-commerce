import ProductCard from "@/_Components/shared/ProductCard/ProductCard";
import { IProduct } from "@/app/_interfaces/products";
import { GetSpecificCategory } from "@/app/_services/Categories.services";
import { getAllProducts, IProductParams } from "@/app/_services/products.services";
import { Metadata } from "next";
interface ProductPageProps {
  searchParams: Promise<IProductParams>
}
export async function generateMetadata({ searchParams }: ProductPageProps): Promise<Metadata> {
  const plainParams: IProductParams = Object.fromEntries(
    Object.entries(searchParams)
  )
  const Category = await GetSpecificCategory(plainParams?.['category[in]'] || '');
  const category = Category?.name || "All";

  return {
    title: `${category} Products `
  };
}
export default async function Products({ searchParams }: ProductPageProps) {
  const plainParams: IProductParams = Object.fromEntries(
    Object.entries(searchParams)
  )
  const products = await getAllProducts(plainParams);
  console.log("plainParams:", plainParams);
  const Category = await GetSpecificCategory(plainParams?.['category[in]'] || '');

  if (products?.length === 0) {
    return <p className="h-screen text-center text-5xl font-bold my-10">No Products Found</p>;
  }

  return (
    <section>
      <h1 className="text-center text-5xl font-bold my-10"><span className="text-button2">{Category?.name || 'All'}</span>  Products</h1>
      <div className="min-h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-y-10 ">
        {
          products?.map((product: IProduct) => {
            return <ProductCard key={product.id} product={product} />
          })
        }
      </div>
    </section>

  )
}
