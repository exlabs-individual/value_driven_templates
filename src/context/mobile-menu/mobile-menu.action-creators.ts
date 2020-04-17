import { MobileMenuActionTypes, TOGGLE_MENU } from './mobile-menu.reducer';

export const toggleMenu = (): MobileMenuActionTypes => ({
  type: TOGGLE_MENU,
});
