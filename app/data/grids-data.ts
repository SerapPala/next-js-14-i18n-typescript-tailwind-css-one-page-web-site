import {StaticImageData} from 'next/image';
import img_1 from '../../public/assets/img/blogs/user-avatar.png';
import img_2 from '../../public/assets/img/blogs/user-avatar.png';

import i18next from 'i18next';

const grid1_data: {
    id: number;
    image: StaticImageData;
    fav:string;
    comment:string;
    date: string; title: string; description: string; button: {
        title: string;
        url: string;
    };
}[] = [
    {
        id: 1,
        image: img_1,
        title: i18next.t("grid1.data.0.title"),
        description: i18next.t("grid1.data.0.description"),
        button: {
            title: i18next.t("grid1.data.0.button.title"),
            url: i18next.t("grid1.data.0.button.url")
        },
        date: i18next.t("grid1.data.0.date"),
        fav: i18next.t("grid1.data.0.fav"),
        comment: i18next.t("grid1.data.0.comment"),
    },   {
        id: 2,
        image: img_2,
        title: i18next.t("grid1.data.1.title"),
        description: i18next.t("grid1.data.1.description"),
        button: {
            title: i18next.t("grid1.data.1.button.title"),
            url: i18next.t("grid1.data.1.button.url")
        },
        date: i18next.t("grid1.data.1.date"),
        fav: i18next.t("grid1.data.1.fav"),
        comment: i18next.t("grid1.data.1.comment"),
    }, {
        id: 3,
        image: img_2,
        title: i18next.t("grid1.data.1.title"),
        description: i18next.t("grid1.data.1.description"),
        button: {
            title: i18next.t("grid1.data.1.button.title"),
            url: i18next.t("grid1.data.1.button.url")
        },
        date: i18next.t("grid1.data.1.date"),
        fav: i18next.t("grid1.data.1.fav"),
        comment: i18next.t("grid1.data.1.comment"),
    },
]

export default grid1_data;
