'use client'
import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {useTranslation} from "react-i18next";
import generateHeroBannerData from "../../data/hero-banner-data";
import Image from "next/image";
import CustomButton from "../custom-button";


const Index = () => {
    const {t} = useTranslation();
    const hero_banner_data = generateHeroBannerData();
    return (
        <React.Fragment>
            {hero_banner_data.slice(0,1).map((item, i) => (
                <div className={`group relative bg-light dark:bg-black p-4  rounded `}>
                    <div className={"container"}>
                    <div
                        className={`w-full flex flex-col-reverse md:flex-row items-center`}>
                        {/*left*/}
                        <div className={"md:basis-2/3 lg:basis-2/3 md:px-4 lg:px-10"}>
                            <div className={"header-text"}>
                                {item?.header}
                            </div>
                            <h1 className={"xl:text-6xl md:text-5xl text-4xl text-gray-800 dark:text-white font-semibold mb-4"}>
                                {item?.title}
                            </h1>
                            <p className={`description`}>
                                {item?.description}
                            </p>
                            <div className="mt-8">
                                <div
                                    className={`flex group-hover:opacity-100 dark:text-white text-dark`}>
                                    <CustomButton title={hero_banner_data[0].button1.title} url={hero_banner_data[0].button1.url} />
                                    <div
                                        className={`flex ml-3 h-8 px-2 text-center items-center justify-center rounded-full bottom-button`}>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*right*/}
                        <div className="md:basis-2/3 lg:basis-1/3 flex justify-end">
                            <div className={`w-250 h-250 relative flex-shrink-0 `}>
                                <Image src={item?.image} width={300} height={300} alt={`${item?.title}`} />
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            ))}
        </React.Fragment>

    );
};

export default Index;
