'use client'
import Link from "next/link";
import generateSocialData from "../../data/social-data";
import React from "react";
import {StaticImageData} from "next/image";
interface SocialItemProps {
    item: {
        id: number;
        image: StaticImageData;
        title: string;
        url: string;
    };
}
const SocialArea: React.FC<SocialItemProps> = ({ item }) => {
    const social_data = generateSocialData();
    return (
        <React.Fragment>
            {social_data.map((item,key)=>(
                <Link key={item.id}  href={item?.url} className={"text-gray-400 dark:text-light hover:text-gray-500 dark:hover:text-white"}>
                    <img src={item.image} className={""} alt={item?.title}/>
                </Link>
            ))}

        </React.Fragment>
    );
};
export default SocialArea;
