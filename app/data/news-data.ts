import {StaticImageData} from 'next/image';
import img_1 from '../../public/assets/img/news/news.png';
import img_2 from '../../public/assets/img/news/news.png';
import img_3 from '../../public/assets/img/news/news.png';
import { SiApplenews } from 'react-icons/si';
import { GiNewShoot } from 'react-icons/gi';
import i18next from 'i18next';
import {IconType} from "react-icons";
export interface NewsItem {
    id: number;
    image: StaticImageData;
    title: string;
    description: string;
    date: string;
    icon: IconType;
}
const news_data: NewsItem[] = [
    {
        id: 1,
        image: img_1,
        title: i18next.t("news.0.title"),
        description: i18next.t("news.0.description"),
        date:i18next.t("news.0.date"),
        icon: SiApplenews,
    },
    {
        id: 2,
        image: img_2,
        title: i18next.t("news.1.title"),
        description: i18next.t("news.1.description"),
        date:i18next.t("news.1.date"),
        icon: GiNewShoot,
    },
    {
        id: 3,
        image: img_3,
        title: i18next.t("news.2.title"),
        description: i18next.t("news.2.description"),
        date:i18next.t("news.2.date"),
        icon: SiApplenews,
    },{
        id: 4,
        image: img_1,
        title: i18next.t("news.0.title"),
        description: i18next.t("news.0.description"),
        date:i18next.t("news.3.date"),
        icon: GiNewShoot,
    }
]

export default news_data;
