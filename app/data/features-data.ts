
import i18next from 'i18next';
import {StaticImageData} from "next/image";
type IFeaturesDataType = {
    id: number;
    title: string;
    description:string;
    url: string;
    ıcon: StaticImageData;
    button?: {
        title: string;
        url: string;
    }[];
};

const generateFeaturesData = (): IFeaturesDataType[] => [
    {
        id: 1,
        title: i18next.t("features.0.title"),
        description: i18next.t("features.0.description"),
        url: i18next.t("features.0.url"),
        ıcon:i18next.t("features.0.ıcon"),
    },  {
        id: 2,
        title: i18next.t("features.1.title"),
        description: i18next.t("features.1.description"),
        url: i18next.t("features.1.url"),
        ıcon:i18next.t("features.1.ıcon"),
    },  {
        id: 3,
        title: i18next.t("features.2.title"),
        description: i18next.t("features.2.description"),
        url: i18next.t("features.2.url"),
        ıcon:i18next.t("features.2.ıcon"),
    },
];

export default generateFeaturesData;
