import i18next from 'i18next';

type IFooterDataType = {
    id: number;
    title: string;
    url: string;
};

const generateFooterData = (): IFooterDataType[] => [
    {
        id: 1,
        title: i18next.t('footer.data.0.title'),
        url: i18next.t('footer.data.0.url'),
    },
    {
        id: 2,
        title: i18next.t('footer.data.1.title'),
        url: i18next.t('footer.data.1.url'),
    },
    {
        id: 3,
        title: i18next.t('footer.data.2.title'),
        url: i18next.t('footer.data.2.url'),
    },
    {
        id: 4,
        title: i18next.t('footer.data.3.title'),
        url: i18next.t('footer.data.3.url'),
    },
];

export default generateFooterData;
