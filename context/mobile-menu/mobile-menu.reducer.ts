import { AppAction } from '../../types';

export const TOGGLE_MENU = 'mobile-menu/toggle';

export type MobileMenuActionTypes = AppAction<typeof TOGGLE_MENU>;

export interface MobileMenuState {
  isVisible: boolean;
}

export const mobileMenuReducer = (
  state: MobileMenuState,
  action: MobileMenuActionTypes
): MobileMenuState => {
  switch (action.type) {
    case TOGGLE_MENU: {
      return {
        ...state,
        isVisible: !state.isVisible,
      };
    }

    default:
      return state;
  }
};
