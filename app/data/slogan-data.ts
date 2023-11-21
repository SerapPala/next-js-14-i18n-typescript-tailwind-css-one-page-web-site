import i18next from 'i18next';
interface SloganItem {
    id: number;
    header: string;
    title: string;
    description: string;
    circleText:string;
    button: {
        title: string;
        url: string;
    };
}

const slogan_data: SloganItem[] = [
    {
        id: 1,
        header: i18next.t("slogan.header"),
        title: i18next.t("slogan.title"),
        description: i18next.t("slogan.description"),
        circleText: i18next.t("slogan.circleText"),
        button: {
            title: i18next.t("slogan.button.title"),
            url: i18next.t("slogan.button.url")
        },
    },
];

export default slogan_data;
