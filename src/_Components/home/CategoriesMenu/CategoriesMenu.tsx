import  Link  from 'next/link';

export default function CategoriesMenu() {
    const categories = [
        {
            name: "Woman’s Fashion",
            link: "/"
        },
        {
            name: "Men’s Fashion",
            link: "/"
        },
        {
            name: "Electronics",
            link: "/"
        },
        {
            name: "Home & Lifestyle",
            link: "/"
        },
        {
            name: "Medicine",
            link: "/"
        },
        {
            name: "Sports & Outdoor",
            link: "/"
        },
        {
            name: "Baby’s & Toys",
            link: "/"
        },
        {
            name: "Groceries & Pets",
            link: "/"
        },
        {
            name: "Health & Beauty",
            link: "/"
        }
    ]
    return (
        <div className='w-1/4 border-r'>
            <div className="flex flex-col h-full justify-between pt-10">
                {categories.map(({ name, link }, i) => (
                    <Link key={i} href={link}>{name}</Link>
                ))}
            </div>
        </div>
    )
}
