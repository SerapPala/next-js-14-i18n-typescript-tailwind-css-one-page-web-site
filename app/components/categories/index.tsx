'use client'
import React from 'react';
import CategoryItem from "../categories/category-item";
import {useTranslation} from "react-i18next";

const Index = () => {
    const {t} = useTranslation();
    const categoryItem = {
        id: 1,
        title: 'Kategori Başlığı',
        url: '/kategori-url',
        image: '',
        description: ''
    };
    return (
        <section>
            <div className="container pb-16">
                <h2 className={"text-2xl md:text-3xl font-medium text-gray-800 dark:text-white uppercase mb-6"}>{t("blogCategories.title")}</h2>
                <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-3">
                    <CategoryItem item={categoryItem}/>
                </div>
            </div>
        </section>
    );
};
export default Index;
