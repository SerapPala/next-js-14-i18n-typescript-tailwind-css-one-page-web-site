// 'use client'
import Link from "next/link";
import Image, { StaticImageData } from 'next/image';
import React from "react";
import { BsCalendar2Date } from "react-icons/bs";
import { AiOutlineComment } from "react-icons/ai";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import grid1_data from "@/app/data/grids-data";
import {useTranslation} from "react-i18next";

interface Grid1ItemProps {
    item: {
        id: number;
        image: StaticImageData;
        title: string;
        description: string;
        fav: number;
        date: string;
        comment: number;
    };
}

const Grid1: React.FC<Grid1ItemProps> = ({ item }) => {
    const {t} = useTranslation();
    return (
        <section id={t("grid1.sectionId")}>
            <div className="py-24 text-muted">
                <div className="container">
                    {/*title*/}
                    <h2>
                        <Link href={t("grid1.url")}>{t("grid1.title")}</Link>
                    </h2>
                    {/*grid area*/}
                    <div className="grid grid-cols-6 gap-10">
                        {grid1_data.slice(0,2).map((item, key) => (
                            <div className="col-span-6 md:col-span-3 lg:col-span-3 border border-primary" key={key}>
                                {/*item*/}
                                <div className={""}>
                                    {/*item header*/}
                                    <div className="p-4 border-b border-primary flex items-center justify-between">
                                        <h3>{item?.title}</h3>
                                        <Image src={item?.image} width={30} height={30}
                                               className={"rounded full object-contain"} alt={`${item?.title}`}/>
                                    </div>
                                    {/*item paragraph*/}
                                    <p className={"p-4 text-sm"}>{item?.description}</p>
                                    {/* item footer*/}
                                    <div
                                        className="p-4 border-t border-primary flex justify-end items-center space-x-4 font-bold text-xs">
                                        <div className={"flex items-center justify-center space-x-1"}><BsCalendar2Date/><p>{item?.date}</p></div>
                                        <div className={"flex items-center justify-center space-x-1"}><MdOutlineFavoriteBorder color={"white"}/><p>{item?.fav}</p></div>
                                        <div className={"flex items-center justify-center space-x-1"}><AiOutlineComment/><p>{item?.comment}</p></div>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>

                    {/*grid area*/}
                    <div className="grid grid-cols-6 gap-10 mt-5">
                        {grid1_data.map((item, key) => (
                            <div className=" col-span-3 lg:col-span-2 border border-primary" key={key}>
                                {/*item*/}
                                <div className={""}>
                                    {/*item header*/}
                                    <div className="p-4 border-b border-primary flex items-center justify-between">
                                        <h3>{item?.title}</h3>
                                        <Image src={item?.image}  alt={`${item.title}`}  width={30} height={30}
                                               className={"rounded full object-contain"}/>
                                    </div>
                                    {/*item paragraph*/}
                                    <p className={"p-4 text-sm"}>{item?.description}</p>
                                    {/* item footer*/}
                                    <div
                                        className="p-4 border-t border-primary flex justify-end items-center space-x-4 font-bold text-xs">
                                        <div className={"flex items-center justify-center space-x-1"}><BsCalendar2Date/><p>{item?.date}</p></div>
                                        <div className={"flex items-center justify-center space-x-1"}><MdOutlineFavoriteBorder color={"white"}/><p>{item?.fav}</p></div>
                                        <div className={"flex items-center justify-center space-x-1"}><AiOutlineComment/><p>{item?.comment}</p></div>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>


                </div>
            </div>
        </section>
    );
};
export default Grid1;
