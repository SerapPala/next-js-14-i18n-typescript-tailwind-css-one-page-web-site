import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { IconType } from 'react-icons';
import Image, {StaticImageData} from 'next/image';
import {useTranslation} from "react-i18next";
import i18next from "i18next";

interface BlogItemProps {
    item: {
        id: number;
        image: StaticImageData ;
        title: string;
        description: string;
        icon:IconType;
    };
}const BlogItem: React.FC<BlogItemProps> = ({ item }) => {
    const {t} = useTranslation();
    return (
        <div className={'group relative overflow-hidden basis-1/2  md:basis-1/3 sm:basis-1/2 pr-5 pb-5'} key={item?.id}>
           {/* <Link href={`/blog/${item?.id}`}>*/}
                <div className="relative max-w-xl mx-auto ">
                    <Image className="h-64 w-full object-cover rounded"
                         src={item?.image}    alt={`blog-item-image ${item?.title}`}/>
                        <div className="absolute inset-0 bg-dark opacity-70 rounded"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            {/* Icon */}
                            <div className="absolute top-2 left-0 p-2 md:p-4 text-2xl">
                                {item?.icon({ color: 'white' })}
                            </div>
                            {/* detail */}
                            <div className="absolute  bottom-2 group-hover:pb-2 duration-1000 p-2 md:p-4">
                                <h3 className={'text-white group-hover:text-primary text-lg md:text-xl lg:text-2xl pb-2 duration-500'}>{item?.title}</h3>
                                <div className={"hidden group-hover:block hover:transition duration-500"}>
                                    <p className="line-clamp-2 text-light">{item?.description}</p>
                                    {/* icons */}
                                    <div className={' flex space-x-8 text-white -bottom-2 group-hover:bottom-2 text-2-xl items-center'}>
                                        {i18next.t("blog.button.title")} <BsArrowRight color={'primary'} className={"ms-3"} />
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
           {/* </Link>*/}
        </div>
    );
};

export default BlogItem;
