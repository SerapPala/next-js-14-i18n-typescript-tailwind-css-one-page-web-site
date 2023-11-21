'use client'
import {useTranslation} from "react-i18next";
import {FaBars} from "react-icons/fa";
import Link from "next/link";
import React from "react";
import {IoMailOutline} from "react-icons/io5";
import generateMenuData from "../../data/menu-data";
import generateBlogCategoryData from "../../data/blog-categories-data";
const Navbar = ({}) => {
    const {t} = useTranslation();
    const menu_data = generateMenuData();
    const blog_categories_data = generateBlogCategoryData();
    return (
        <nav className={"navbar hidden lg:block"}>
            <div className={"container"}>
                <div className="flex">
                    {/* all category start */}
                    <div className="px-8 py-4 bg-primary flex items-center cursor-pointer group relative ">
                        <span className={"text-white"}>
                            <FaBars/>
                        </span>
                        <span className={"capitalize ml-2 text-white "}>
                         {t("navbar.dropdownButton.title")}
                        </span>
                        {/* dropdown start */}
                        <div
                            className="absolute left-0 top-full w-full bg-white dark:bg-dark shadow-md py-3 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition duration-500 z-50 divide-y divide-gray-300 dark:divide-gray-500 divide-dashed">
                            {/*single category start*/}
                            {blog_categories_data.map((item, id) => (
                                <Link key={item.id} href={item.url}
                                      className="px-6 py-3 flex items-center hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-500">
                                    <div className="w-5 h-5 object-contain">
                                        <img src={item?.ıcon} alt={"categories-icon-image"} className={"categories-icon-image"}/>
                                    </div>
                                    <span className="ml-6 text-gray-700 dark:text-white text-sm font-medium">{item.title}</span>
                                </Link>
                            ))}
                            {/*single category end*/}
                        </div>
                        {/* dropdown end */}
                    </div>
                    {/* all category  end*/}
                    {/* nav menu start*/}
                    <div className="flex items-center justify-between flex-grow pl-12">
                        <div className="flex items-center space-x-6 text-base capitalize">
                            {menu_data.map((item, i) => (
                                <React.Fragment>
                                    <Link href={item?.link} key={item?.id}
                                          className={"text-gray-700 dark:text-white hover:text-primary transition duration-500 font-medium"}>{item.title}</Link>
                                </React.Fragment>
                            ))}
                        </div>
                        <Link href={t("navbar.buttons.0.link")}
                              className={"text-gray-700 hover:text-primary dark:text-white transition duration-500 font-medium flex items-center"}><span
                            className={"mr-2 text-xl"}><IoMailOutline/></span>{t("navbar.buttons.0.title")}</Link>
                    </div>
                    {/* nav menu start*/}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
