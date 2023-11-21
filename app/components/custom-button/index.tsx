import Link from "next/link";
import React from "react";

interface CustomButtonProps {
    title: string;
    url: string;
    style: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({title, url, style}) => {
    return (
        <Link href={url}
              className={"text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center inline-flex items-center  uppercase transition duration-500"}>
            {title}
        </Link>
    );
};

export default CustomButton;
