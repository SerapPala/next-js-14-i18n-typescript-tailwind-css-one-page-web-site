'use client'
import React from 'react';
import Image from 'next/image'
import slogan_img from '@/public/assets/img/slogan/slogan.jpeg'
import slogan_data from "@/app/data/slogan-data";
import Link from "next/link";
import {useTranslation} from "react-i18next";
const Index = () => {
    const {t} = useTranslation();
    return (
        <section id={t("slogan.sectionId")}>
            <div className={"bg-white rounded"}>
                <div className=" container flex items-center justify-center relative py-16 px-5 lg:px-0">
                    {/*left*/}
                    <div className="hidden md:block md:basis-1/3 lg:basis-1/3">
                        <Image src={slogan_img} className={"lg:absolute lg:left-0 lg:bottom-0"} alt={`${slogan_data[0].description}`}></Image>
                    </div>
                    {/*right*/}
                    <div className="md:basis-2/3 lg:basis-1/2">
                        <div className="flex flex-col justify-center">
                            <h3 className={"text-dark-gray-100 tracking-wider  text-lg md:text-xl lg:text-2xl font-medium mb-3"}>{slogan_data[0]?.header}</h3>
                            <h4 className={"text-lg md:text-2xl lg:text-3xl  font-semibold text-black mb-3"}>{slogan_data[0]?.title}</h4>
                            <div
                                className={"text-dark-gray-100 font-normal text-md mb-4"}>{slogan_data[0]?.description}</div>
                            <Link className={"text-third font-semibold text-md"}
                                  href={slogan_data[0]?.button?.url}>{slogan_data[0]?.button?.title}</Link>
                        </div>
                    </div>
                    <div className="absolute -top-12 left-0 w-24 h-24 bg-primary rounded-full text-center flex items-center justify-center ">
                        <p className={"font-bold uppercase text-lg text-black text-rotate-45"}>{slogan_data[0]?.circleText}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Index;
