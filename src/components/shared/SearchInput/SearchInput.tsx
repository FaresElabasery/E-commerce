import { Icons } from '@/components/icons/icons';
import { Input } from '@/components/ui/input';
export default function SearchInput() {
    return (
        <span className='relative'>
            <Input type='search' className='w-61 ps-8 bg-secondary shadow-none border-none' placeholder='What are you looking for?' />
            <Icons.search size={20} className='absolute top-1/2 left-2 -translate-y-1/2' />
        </span>
    )
}
