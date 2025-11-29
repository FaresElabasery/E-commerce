import { Icons } from '@/_Components/icons/icons';
import { Input } from '@/_Components/ui/input';
export default function SearchInput() {
    return (
        <span className='relative'>
            <Input type='search' className='w-full ps-8 bg-secondary shadow-none border-none' placeholder='Search for products' />
            <Icons.search size={20} className='absolute top-1/2 left-2 -translate-y-1/2' />
        </span>
    )
}
