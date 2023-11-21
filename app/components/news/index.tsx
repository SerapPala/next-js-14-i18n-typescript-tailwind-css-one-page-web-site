'use client'
import React from 'react';
import news_data from "@/app/data/news-data";
import NewsItem from "@/app/components/news/news-item";
import {useTranslation} from "react-i18next";

const News = () => {
    const { t } = useTranslation();
    return (
        <React.Fragment>
            <h2>{t("news.title")}</h2>
                <div className="flex flex-row lg:flex-col  justify-start lg:justify-between flex-wrap lg:flex-nowrap ">
                    {news_data.slice(0,2).map((item, i) => (
                        <NewsItem key={item.id} item={item}/>
                    ))}
                </div>
        </React.Fragment>
    );
};
export default News;
