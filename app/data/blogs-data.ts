import { DiJavascript1 } from 'react-icons/di';
import { TbBrandNextjs } from 'react-icons/tb';
import { BiLogoReact } from 'react-icons/bi';
import i18next from 'i18next';
import {StaticImageData} from 'next/image';
import img_1 from '../../public/assets/img/blogs/post_1.jpg';
import img_2 from '../../public/assets/img/blogs/post_2.jpg';
import img_3 from '../../public/assets/img/blogs/post_1.jpg';
import {IconType} from "react-icons";
type BlogDataType = {
    id: number;
    image: StaticImageData;
    title: string;
    description: string;
    icon: IconType;
};

const generateBlogsData = (): BlogDataType[] => [
    {
        id: 1,
        image: img_1,
        title: i18next.t("blogs.0.title"),
        description: i18next.t("blogs.0.description"),
        icon: DiJavascript1,
    },
    {
        id: 2,
        image: img_2,
        title: i18next.t("blogs.1.title"),
        description: i18next.t("blogs.1.description"),
        icon: TbBrandNextjs,
    },
    {
        id: 3,
        image: img_3,
        title: i18next.t("blogs.2.title"),
        description: i18next.t("blogs.2.description"),
        icon: BiLogoReact,
    },  {
        id: 4,
        image: img_1,
        title: i18next.t("blogs.0.title"),
        description: i18next.t("blogs.0.description"),
        icon: DiJavascript1,
    },
    {
        id: 5,
        image: img_2,
        title: i18next.t("blogs.1.title"),
        description: i18next.t("blogs.1.description"),
        icon: TbBrandNextjs,
    },
    {
        id: 6,
        image: img_3,
        title: i18next.t("blogs.2.title"),
        description: i18next.t("blogs.2.description"),
        icon: BiLogoReact,
    },

];

export default generateBlogsData;
