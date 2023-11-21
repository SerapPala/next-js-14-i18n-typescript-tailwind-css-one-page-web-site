import i18next from 'i18next';
import {StaticImageData} from "next/image";
type IBlogCategoryDataType = {
    id: number;
    title: string;
    url: string;
    ıcon: StaticImageData;
    image: StaticImageData;
    button?: {
        title: string;
        url: string;
    }[];
};

const generateBlogCategoryData = (): IBlogCategoryDataType[] => [
    {
        id: 1,
        title: i18next.t("blogCategories.0.title"),
        url: i18next.t("blogCategories.0.url"),
        ıcon:i18next.t("blogCategories.0.ıcon"),
        image:i18next.t("blogCategories.0.image"),
    },  {
        id: 2,
        title: i18next.t("blogCategories.1.title"),
        url: i18next.t("blogCategories.1.url"),
        ıcon:i18next.t("blogCategories.1.ıcon"),
        image:i18next.t("blogCategories.1.image"),
    },  {
        id: 3,
        title: i18next.t("blogCategories.2.title"),
        url: i18next.t("blogCategories.2.url"),
        ıcon:i18next.t("blogCategories.2.ıcon"),
        image:i18next.t("blogCategories.2.image"),
    },  {
        id: 4,
        title: i18next.t("blogCategories.3.title"),
        url: i18next.t("blogCategories.3.url"),
        ıcon:i18next.t("blogCategories.3.ıcon"),
        image:i18next.t("blogCategories.3.image"),
    },  {
        id: 5,
        title: i18next.t("blogCategories.4.title"),
        url: i18next.t("blogCategories.4.url"),
        ıcon:i18next.t("blogCategories.4.ıcon"),
        image:i18next.t("blogCategories.4.image"),
    },  {
        id: 6,
        title: i18next.t("blogCategories.5.title"),
        url: i18next.t("blogCategories.5.url"),
        ıcon:i18next.t("blogCategories.5.ıcon"),
        image:i18next.t("blogCategories.5.image"),
    },  {
        id: 7,
        title: i18next.t("blogCategories.6.title"),
        url: i18next.t("blogCategories.6.url"),
        ıcon:i18next.t("blogCategories.6.ıcon"),
        image:i18next.t("blogCategories.6.image"),
    },  {
        id: 8,
        title: i18next.t("blogCategories.7.title"),
        url: i18next.t("blogCategories.7.url"),
        ıcon:i18next.t("blogCategories.7.ıcon"),
        image:i18next.t("blogCategories.7.image"),
    },  {
        id: 9,
        title: i18next.t("blogCategories.8.title"),
        url: i18next.t("blogCategories.8.url"),
        ıcon:i18next.t("blogCategories.8.ıcon"),
        image:i18next.t("blogCategories.8.image"),
    },
];

export default generateBlogCategoryData;
