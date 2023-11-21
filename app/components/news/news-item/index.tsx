import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import i18n from "@/i18n";
import { NewsItem as NewsItemType } from '@/app/data/news-data';
import {useTranslation} from "react-i18next";

interface NewsItemProps {
    item: NewsItemType;
}

const NewsItem: React.FC<NewsItemProps> = ({ item }) => {
    const { t } = useTranslation();
    return (
                <div className="flex items-center group basis-3/4 md:basis-1/3 relative mb-5 lg:mb-8  ">
                    {/* News image */}
                    <div className="basis-1/3  relative lg:h-56">
                      {/*  <Link href={`/news/${item?.id}`} aria-label={t("news.title")}>
                        <Image
                            src={item?.image}
                            height={30}
                            className="h-full w-full object-cover rounded border-l-2 border-t-2 border-b-2 border-dark-gray-500  "
                            alt={`${item?.title}`}
                        />
                        </Link>*/}

                       {/* <div className="absolute inset-0 flex items-center justify-center">
                            <Link href={`/news/${item?.id}`} className={"text-4xl"} aria-label={t("news.title")}>
                                {item?.icon({ color: 'white' })}
                            </Link>
                        </div>*/}
                    </div>
                    {/* News detail */}
                    <div className="pl-4 basis-2/3 text-muted group-hover:text-secondary group-hover:cursor-pointer duration-500 h-full">
                        <div className="text-sm md:text-md line-clamp-2">{"dddd"}</div>
                        <div className="text-xs mt-1 md:text-sm tracking-tighter font-bold mt-2">date</div>
                    </div>
                </div>
    );
};

export default NewsItem;
