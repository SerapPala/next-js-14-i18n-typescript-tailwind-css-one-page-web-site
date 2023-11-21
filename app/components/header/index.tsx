'use client'
import Link from "next/link";
import {useTheme} from "next-themes";
import ThemeSwitcher from "../theme-switcher";
import {useTranslation} from "react-i18next";
import {useState} from "react";
import Image from "next/image";
import logo_img from "../../../public/assets/img/logo.png"
import SearchArea from "../search-area";
import {IoHeartOutline, IoLanguageOutline} from "react-icons/io5";
import i18next from "i18next";

const Header = () => {
    const {t} = useTranslation();
    const {theme, setTheme} = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const changeLanguage = (lang) => {
        i18next.changeLanguage(lang);
        localStorage.setItem('language', lang);
        setIsMenuOpen(false);
    };
    return (
        <header className={"header bg-black border border-r-0  border-t-0 border-l-0 border-b-black"}>
            <div className="container">
                <div className="flex items-center justify-between py-4">
                    {/*logo start*/}
                    <Link href={t("header.logo.url")} className={"block w-32"}>
                        <Image src={logo_img} width={80} height={80} alt={"logo-image"}/>
                    </Link>
                    {/*logo end*/}
                    {/*search start*/}
                    <SearchArea/>
                    {/*search end*/}
                    {/*buttons start*/}
                    <div className="space-x-4 flex items-center">
                        {/* Dark Mode Switch */}
                        <div
                            className="group block text-center text-white hover:text-primary  transition duration-500 relative">
                            <div className="text-2xl text-center flex justify-center hover:text-primary">
                                <ThemeSwitcher/>
                            </div>
                            <div className="text-sm leading-7 cursor-pointer">
                                {theme === 'dark' ? t("header.buttons.0.title") : t("header.buttons.0.title2")}
                            </div>
                        </div>
                        {/* Favorites */}
                        <div
                            className="block text-center text-white hover:text-primary transition duration-500 relative">
                <span
                    className="absolute right-3 -top-1.5 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                    5
                </span>
                            <div className="text-2xl text-center flex justify-center hover:text-primary">
                                <IoHeartOutline/>
                            </div>
                            <div className="text-sm leading-7 cursor-pointer">
                                {t("header.buttons.1.title")}
                            </div>
                        </div>
                        {/* Language Selector */}
                        <div
                            className="block text-center text-white hover:text-primary  transition duration-500 relative">
                            <div className="text-2xl text-center flex justify-center hover:text-primary">
                                <IoLanguageOutline/>
                            </div>
                            <div className="text-sm leading-6">

                                <div>
                                    <button
                                        className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent  px-3 py-2 text-sm font-medium  border-none "
                                        type="button"
                                        id="menu-button"
                                        aria-expanded={isMenuOpen}
                                        aria-haspopup="true"
                                        onClick={toggleMenu}
                                    >
                                        {t("language")}
                                    </button>
                                </div>

                                {isMenuOpen && (
                                    <div
                                        className="absolute right-0 left-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                        role="menu"
                                        aria-orientation="vertical"
                                        aria-labelledby="menu-button"
                                        tabIndex={-1}
                                    >
                                        <div className="py-1" role="none">
                                            <Link href="#" passHref legacyBehavior>
                                                <a className="text-gray-700 block px-4 py-2 text-sm" role="menuitem"
                                                   tabIndex={-1} onClick={() => changeLanguage('tr')}>
                                                    {t("languages.0.title")}
                                                </a>
                                            </Link>

                                            <Link href="#" passHref legacyBehavior>
                                                <a className="text-gray-700  block px-4 py-2 text-sm" role="menuitem"
                                                   tabIndex={-1} onClick={() => changeLanguage('en')}>
                                                    {t("languages.1.title")}
                                                </a>
                                            </Link>

                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>
                    {/*buttons end*/}
                </div>
            </div>
        </header>
    );
};

export default Header;
