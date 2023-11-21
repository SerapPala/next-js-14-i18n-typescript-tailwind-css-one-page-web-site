import React from 'react';
import Link from 'next/link';
import generatePopulerBlogData from "../../../data/populer-blog-data";
import {IoHeartOutline} from "react-icons/io5";
import {useTranslation} from "react-i18next";
interface PopulerBlogItemProps {
    item: {
        id: number;
        image: string;
        title: string;
        description: string;
        url: string;
        category:string;
        date:string;
        user:{
            name:string;
        }
    };
}
const PopulerBlogItem: React.FC<PopulerBlogItemProps> = ({item}) => {
    const {t} = useTranslation();
    const populer_blog_data = generatePopulerBlogData();
    return (
        <React.Fragment>
            {populer_blog_data.slice(0,4).map((item, i) => (
                <div className="group rounded-md bg-white dark:bg-dark shadow overflow-hidden " key={item?.id}>
                    <div className="relative ">
                        <img src={item?.image} className="w-full" alt="populer-blog-image"/>
                        <div
                            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition ">
                            <Link href="#"
                                  className="text-primary text-lg w-9 h-9 rounded-full items-center justify-center ">
                                <IoHeartOutline/>
                            </Link>
                        </div>
                    </div>
                    <div className="pt-4 pb-2 px-4 ">
                       <Link href={item?.url}>
                            <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 dark:text-white hover:text-primary transition ">
                                {item?.title}</h4>
                        </Link>
                        <p className={`text-gray-600  dark:text-gray-100 text-md font-normal tracking-wider text-base  leading-6 w-64 overflow-hidden whitespace-nowrap overflow-ellipsis`}>
                            {item?.description}
                        </p>
                        <div className="flex items-baseline mb-1 mt-1 space-x-2 ">
                            <p className="text-sm text-primary font-primaryFont font-semibold ">   {item?.user?.name} </p>
                            <p className="text-xs text-gray-400 dark:text-gray-200 font-primaryFont"> {item?.date} </p>
                        </div>
                    </div>
                   <Link href="#"
                       className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b font-medium hover:bg-transparent hover:text-primary transition ">
                       {t("populerBlogs.button.title")}
                    </Link>
                </div>
            ))}
        </React.Fragment>
    );
};

export default PopulerBlogItem;
