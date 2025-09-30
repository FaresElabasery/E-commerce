import { ICategory } from "../_interfaces/products";

export async function getAllCategories(): Promise<ICategory[] | null> {
    try {
        const response = await fetch('https://ecommerce.routemisr.com/api/v1/categories', {
            cache: 'force-cache'
        })
        const finalRes = await response.json()
        return finalRes.data
    } catch (error) {
        console.log(error);
        return null
    }
}
export async function GetSpecificCategory(id: string): Promise<ICategory | null> {
    try {
        const response = await fetch(`https://ecommerce.routemisr.com/api/v1/categories/${id}`, {
            cache: 'no-cache'
        })
        const finalRes = await response.json()
        return finalRes.data
    } catch (error) {
        console.log(error);
        return null
    }
}