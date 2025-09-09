import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { Icons } from '@/components/icons/icons';

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    return (
        <Button className="bg-gray-100 text-gray-600  hover:bg-gray-200 hover:text-black dark:hover:bg-white dark:hover:text-black dark:text-yellow-400 dark:bg-black" variant={'ghost'} size='icon' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? <Icons.sun /> : <Icons.moon />}
            <span className="sr-only">Theme Toggle</span>
        </Button>
    )
}
