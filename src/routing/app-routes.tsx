export enum AppRoute {
  HOME = '/',
  ABOUT = '/about',
  HOW_TO_CONTRIBUTE = '/how-to-contribute',
}

interface Navigation {
  link: AppRoute;
  label: string;
}

export const navigationData: Navigation[] = [
  {
    link: AppRoute.HOME,
    label: 'Home',
  },

  {
    link: AppRoute.ABOUT,
    label: 'About',
  },
  {
    link: AppRoute.HOW_TO_CONTRIBUTE,
    label: 'How to contribute?',
  },
];
