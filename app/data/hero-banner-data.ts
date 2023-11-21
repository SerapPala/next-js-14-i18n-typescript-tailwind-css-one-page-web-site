import {StaticImageData} from 'next/image';
import img_1 from '../../public/assets/img/hero-banner/programmer.png';
import img_2 from '../../public/assets/img/hero-banner/programmer.png';
import i18next from 'i18next';

type IHeroBannerDataType = {
    id: number;
    image: StaticImageData;
    header: string;
    title: string;
    description: string;
    button0: {
        title: string;
        url: string;
    };
    button1: {
        title: string;
        url: string;
    };
};
const generateHeroBannerData = (): IHeroBannerDataType[] => [
    {
        id: 1,
        image: img_1,
        header: i18next.t("heroBanner.subtitle"),
        title: i18next.t("heroBanner.title"),
        description: i18next.t("heroBanner.description"),
        button0: {
            title: i18next.t("heroBanner.button.0.title"),
            url: i18next.t("heroBanner.button.0.url")
        },
        button1: {
            title: i18next.t("heroBanner.button.1.title"),
            url: i18next.t("heroBanner.button.1.url")
        }
    },
    {
        id: 2,
        image: img_2,
        header: i18next.t("heroBanner.subtitle"),
        title: "TEST",
        description: i18next.t("heroBanner.description"),
        button0: {
            title: i18next.t("heroBanner.button.0.title"),
            url: i18next.t("heroBanner.button.0.url")
        },
        button1: {
            title: i18next.t("heroBanner.button.1.title"),
            url: i18next.t("heroBanner.button.1.url")
        }
    },

]

export default generateHeroBannerData;
