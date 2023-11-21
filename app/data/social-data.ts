import i18next from 'i18next';
import {StaticImageData} from 'next/image';
type SocialDataType = {
    id: number;
    image: StaticImageData;
    title: string;
    url: string;
};

const generateSocialData = (): SocialDataType[] => [
    {
        id: 1,
        image:i18next.t("socialItem.0.image"),
        title: i18next.t("socialItem.0.title"),
        url: i18next.t("socialItem.0.url"),
    },
    {
        id: 2,
        image: i18next.t("socialItem.1.image"),
        title: i18next.t("socialItem.1.title"),
        url: i18next.t("socialItem.1.url"),
    }, {
        id: 3,
        image: i18next.t("socialItem.2.image"),
        title: i18next.t("socialItem.2.title"),
        url: i18next.t("socialItem.2.url"),
    }
];

export default generateSocialData;
