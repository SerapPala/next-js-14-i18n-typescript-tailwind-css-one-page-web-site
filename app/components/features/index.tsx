'use client'
import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {useTranslation} from "react-i18next";
import generateFeaturesData from "../../data/features-data";

const Features = () => {
    const {t} = useTranslation();
    const features_data = generateFeaturesData();
    return (
        <React.Fragment>
            <div className="container py-16 ">
                <div className="lg:w-10/12 grid md:grid-cols-3 lg:gap-6 mx-auto justify-center ">
                    {features_data?.map((item, i) => (
                    <div
                        className="border-primary border rounded-sm px-8 lg:px-3 lg:py-6 py-4 flex justify-center items-center gap-5 transition hover:border-slate-400 hover:bg-gray-100 dark:hover:bg-gray-900 duration-300 rounded-md ">
                        <div className="lg:w-12 w-10 h-12 object-contain">
                            <img src={item?.ıcon} alt={"categories-icon-image"} className={"categories-icon-image"}/>
                        </div>
                        <div>
                            <h4 className="font-medium capitalize text-lg ">{item?.title}</h4>
                            <p className="text-gray-500 dark:text-white text-xs lg:text-sm "> {item?.description}</p>
                        </div>
                    </div>

                    ))}
                </div>
            </div>
        </React.Fragment>

    );
};

export default Features;
