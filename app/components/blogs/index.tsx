'use client'
import React from 'react';
import BlogItem from "../../components/blogs/blog-item";
import {useTranslation} from "react-i18next";
import generateBlogsData from "../../data/blogs-data";
const Blogs = () => {
    const {t} = useTranslation();
    const blogs_data = generateBlogsData();
    return (
        <div className="flex flex-wrap">
            {blogs_data.map((item, i) => (
                <BlogItem key={item.id} item={item} />
            ))}
        </div>
    );
};
export default Blogs;
