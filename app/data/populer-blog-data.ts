import i18next from 'i18next';
import {StaticImageData} from "next/image";
type IBlogCategoryDataType = {
    id: number;
    title: string;
    url: string;
    ıcon: StaticImageData;
    image: StaticImageData;
    category:string;
    description:string;
    date:string;
    user?: {
        name: string;
    }[];
};

const generateBlogCategoryData = (): IBlogCategoryDataType[] => [
    {
        id: 1,
        title: i18next.t("populerBlogs.0.title"),
        url: i18next.t("populerBlogs.0.url"),
        ıcon:i18next.t("populerBlogs.0.ıcon"),
        image:i18next.t("populerBlogs.0.image"),
        description:i18next.t("populerBlogs.0.description"),
        category:i18next.t("populerBlogs.0.category"),
        date:i18next.t("populerBlogs.0.date"),
        user: {
            "name":i18next.t("populerBlogs.0.user.name"),
        }
    },  {
        id: 2,
        title: i18next.t("populerBlogs.1.title"),
        url: i18next.t("populerBlogs.1.url"),
        ıcon:i18next.t("populerBlogs.1.ıcon"),
        image:i18next.t("populerBlogs.1.image"),
        description:i18next.t("populerBlogs.1.description"),
        category:i18next.t("populerBlogs.1.category"),
        date:i18next.t("populerBlogs.1.date"),
        user: {
            "name":i18next.t("populerBlogs.1.user.name"),
        }
    },  {
        id: 3,
        title: i18next.t("populerBlogs.2.title"),
        url: i18next.t("populerBlogs.2.url"),
        ıcon:i18next.t("populerBlogs.2.ıcon"),
        image:i18next.t("populerBlogs.2.image"),
        description:i18next.t("populerBlogs.2.description"),
        category:i18next.t("populerBlogs.2.category"),
        date:i18next.t("populerBlogs.2.date"),
        user: {
            "name":i18next.t("populerBlogs.2.user.name"),
        }
    },  {
        id: 4,
        title: i18next.t("populerBlogs.3.title"),
        url: i18next.t("populerBlogs.3.url"),
        ıcon:i18next.t("populerBlogs.3.ıcon"),
        image:i18next.t("populerBlogs.3.image"),
        description:i18next.t("populerBlogs.3.description"),
        category:i18next.t("populerBlogs.3.category"),
        date:i18next.t("populerBlogs.3.date"),
        user: {
            "name":i18next.t("populerBlogs.3.user.name"),
        }
    }
];

export default generateBlogCategoryData;
