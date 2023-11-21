'use client'
import Link from "next/link";
import {IoMenuOutline, IoCodeOutline, IoPaperPlane} from "react-icons/io5";
import {useTranslation} from "react-i18next";
const menuItems = [
    { titleKey: "mobileNavTitle.0.title", icon: <IoMenuOutline /> },
    { titleKey: "mobileNavTitle.1.title", icon: <IoCodeOutline /> },
    { titleKey: "mobileNavTitle.2.title", icon: <IoPaperPlane /> },
    { titleKey: "mobileNavTitle.2.title", icon: <IoPaperPlane /> },
];const MobileMenu = () => {
    const { t } = useTranslation();

    return (
        <div
            className={
                "fixed w-full border-t border-gray-200 dark:border-gray-800 bg-light py-3 bottom-0 left-0 flex justify-around items-center lg:hidden z-40"
            }
        >
            {menuItems?.map((menuItem, index) => (
                <Link
                    key={index}
                    href={"javascript:void(0)"}
                    className={
                        "block text-center text-gray-700 dark:text-gray-800 hover:text-primary transition duration-500 relative"
                    }
                >
                    <div className="text-2xl" id={"menuBar"}>
                        {menuItem?.icon}
                    </div>
                    <div className="text-xs leading-3">{t(menuItem?.titleKey)}</div>
                </Link>
            ))}
        </div>
    );
};

export default MobileMenu;