import i18next from 'i18next';
type IMenuDataType = {
  id: number;
  title: string;
  link: string;
  sub_menu?: {
    title: string;
    link: string;
  }[];
};

const generateMenuData = (): IMenuDataType[] => [
  {
    id: 1,
    title: i18next.t('navbar.0.title'),
    link: i18next.t('navbar.0.link'),
  },
  {
    id: 2,
    title: i18next.t('navbar.1.title'),
    link: i18next.t('navbar.1.link'),
  },
  {
    id: 3,
    title: i18next.t('navbar.2.title'),
    link: i18next.t('navbar.2.link'),
  },
  {
    id: 4,
    title: i18next.t('navbar.3.title'),
    link: i18next.t('navbar.3.link'),
  },
  {
    id: 5,
    title: i18next.t('navbar.4.title'),
    link: i18next.t('navbar.4.link'),
  },
];

export default generateMenuData;
