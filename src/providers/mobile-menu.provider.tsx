import React from 'react';
import {
  MobileMenuState,
  MobileMenuActionTypes,
  mobileMenuReducer,
} from '../context/mobile-menu/mobile-menu.reducer';
import {
  mobileMenuInitialState,
  MobileMenuContext,
} from '../context/mobile-menu/mobile-menu.context';

export const MobileMenuStateProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = React.useReducer<
    React.Reducer<MobileMenuState, MobileMenuActionTypes>
  >(mobileMenuReducer, mobileMenuInitialState);

  return (
    <MobileMenuContext.Provider value={{ dispatch, state }}>
      {children}
    </MobileMenuContext.Provider>
  );
};
