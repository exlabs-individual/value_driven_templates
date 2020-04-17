import React from 'react';
import {
  MobileMenuApi,
  MobileMenuContext,
} from '../../context/mobile-menu/mobile-menu.context';

export const useMobileMenuState = (): MobileMenuApi => {
  const context = React.useContext(MobileMenuContext) as MobileMenuApi;

  if (!context) {
    throw new Error(
      'useMobileMenuState should be used within on MobileMenuContext'
    );
  }

  return context;
};
