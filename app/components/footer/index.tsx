'use client'
import React from 'react';
import Link from 'next/link';
import generateFooterData from '../../data/footer-data';
import {useTranslation} from "react-i18next";
import SocialArea from "../social-area";

const Index = () => {
    const {t} = useTranslation();
    const footer_data = generateFooterData();
    return (
        <footer>
            <div className="bg-white dark:bg-transparent pt-16 pb-16 border-t border-gray-600 ">
                <div className="container">
                    <div className={"xl:grid xl:grid-cols-3 xl:gap-8"}>

                        {/* footer description start*/}
                        <div className={"space-y-8 xl:col-span-1"}>
                            {/*logo start*/}
                            <Link href={t("footer.logo.url")}>
                                <img src={t("footer.logo.image")} alt={"logo-image"} className={"w-20 h-20"}/>
                            </Link>
                            {/*logo end*/}

                            <p className={"text-gray-500 dark:text-white text-base font-primaryFont"}>
                                {t("footer.description")}
                            </p>

                            {/*social area start*/}
                            <div className="flex space-x-5">
                                <SocialArea/>
                            </div>
                            {/*social area start*/}

                        </div>
                        {/*footer description end*/}

                        {/*footer links start*/}
                        <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                            <div className="md:grid md:grid-cols-2 md:gap-8">

                                <div>
                                    <h3 className={"text-lg font-semibold text-gray-600 dark:text-gray-100 tracking-wide uppercase"}> {t("footer.title1")}</h3>
                                        {footer_data?.map((item, key) => (
                                            <div className="mt-4 space-y-4">
                                                <Link href={item?.url} className={"text-base text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-50 block font-semibold"}> {item?.title}</Link>
                                            </div>
                                        ))}
                                </div>
                                <div>
                                    <h3 className={"text-lg font-semibold text-gray-600 dark:text-gray-100 tracking-wide uppercase"}> {t("footer.title2")}</h3>
                                    {footer_data?.map((item, key) => (
                                        <div className="mt-4 space-y-4">
                                            <Link href={item?.url} className={"text-base text-gray-500 dark:text-gray-300   hover:text-gray-900 dark:hover:text-gray-50 block font-semibold"}> {item?.title}</Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="md:grid md:grid-cols-2 md:gap-8">
                                <div>
                                    <h3 className={"text-lg font-semibold text-gray-600 dark:text-gray-100 tracking-wide uppercase"}> {t("footer.title3")}</h3>
                                    {footer_data?.map((item, key) => (
                                        <div className="mt-4 space-y-4">
                                            <Link href={item?.url} className={"text-base text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-50 block font-semibold"}> {item?.title}</Link>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <h3 className={"text-lg font-semibold text-gray-600 dark:text-gray-100 tracking-wide uppercase"}>{t("footer.title4")}</h3>
                                    {footer_data?.map((item, key) => (
                                        <div className="mt-4 space-y-4">
                                            <Link href={item?.url} className={"text-base  text-gray-500 dark:text-gray-300  hover:text-gray-900 dark:hover:text-primary block font-semibold"}> {item?.title}</Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/*footer links start*/}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Index;
