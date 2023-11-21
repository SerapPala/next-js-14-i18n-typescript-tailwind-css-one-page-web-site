import i18next from 'i18next';
const categories_data: {
    id: number;
    header: string; title: string; description: string; url: string; button: {
        title: string;
        url: string;
    };
}[] = [
    {
        id: 1,
        header: i18next.t("heroBanner.subtitle"),
        title: i18next.t("categories.0.title"),
        description: i18next.t("heroBanner.description"),
        button: {
            title: i18next.t("categories.0.button.title"),
            url: i18next.t("categories.0.button.url")
        },
        url: i18next.t("categories.0.url")
    },
    {
        id: 2,
        header: i18next.t("categories.1.title"),
        title: i18next.t("categories.1.title"),
        description: i18next.t("categories.1.description"),
        button: {
            title: i18next.t("categories.1.button.title"),
            url: i18next.t("categories.1.button.url")
        },
        url: i18next.t("categories.1.url")
    },
]

export default categories_data;
