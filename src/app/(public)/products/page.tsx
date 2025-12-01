import ProductList from "@/_Components/shared/ProductList/ProductList";
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
  const Category = await GetSpecificCategory(plainParams?.['category[in]'] || '');

  if (products?.length === 0) {
    return <p className="h-screen text-center text-5xl font-bold my-10">No Products Found</p>;
  }
  if (!products) {
    return
  }

  return (
    <section>
      <h1 className="text-center text-5xl font-bold my-10">
        <span className="text-button2">{Category?.name || 'All'} </span>
        Products
      </h1>
      <div className="min-h-screen ">
        <ProductList products={products} />
      </div>
    </section>

  )
}
