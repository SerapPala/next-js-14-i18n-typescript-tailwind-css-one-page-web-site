import React from 'react';
import Link from 'next/link';
import generateBlogCategoryData from "../../../data/blog-categories-data";

interface CategoryItemProps {
    item: {
        id: number;
        image: string;
        title: string;
        description: string;
        url: string;
    };
}
const CategoryItem: React.FC<CategoryItemProps> = ({ item }) => {
    const blog_categories_data = generateBlogCategoryData();
    return (
        <React.Fragment>
            {blog_categories_data.slice(0,3).map((category, i) => (
                <div className="relative group rounded-md overflow-hidden" key={category?.id}>
                    <img src={category.image} alt="categories-image" className={"w-full"}/>
                    <Link href={category.url} className={"absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white font-primary font-medium tracking-wide transition duration-500"}>
                        {category.title}
                    </Link>
                </div>
            ))}
        </React.Fragment>
    );
};

export default CategoryItem;
