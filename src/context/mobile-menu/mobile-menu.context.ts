import React from 'react';
import { MobileMenuState, MobileMenuActionTypes } from './mobile-menu.reducer';

export type MobileMenuApi = {
  state: MobileMenuState;
  dispatch: React.Dispatch<MobileMenuActionTypes>;
};

export const mobileMenuInitialState: MobileMenuState = {
  isVisible: false,
};

export const MobileMenuContext = React.createContext<
  MobileMenuState | MobileMenuApi
>(mobileMenuInitialState);
