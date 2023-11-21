'use client'
import Link from "next/link";
import {usePathname} from 'next/navigation'
import generateMenuData from '../../data/menu-data';
const MenuArea = () => {
    const pathname = usePathname();
    const menu_data = generateMenuData();
    return (
        <div
            className="flex items-center text-sm md:text-md lg:text-lg font-normal space-x-4 lg:space-x-8">
            {menu_data.map((menu) =>
               <div  key={menu?.id} ><Link href={`${menu?.link ? menu?.link : "/test"}`}
                          className={pathname === menu?.link ? 'navbar-link-active' : 'navbar-link'}>{menu?.title}</Link></div>
            )}
        </div>
    );
};
export default MenuArea;
